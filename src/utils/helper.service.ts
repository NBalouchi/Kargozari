import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {store} from '../provider/store';
import {ActionInterface, ActionTypeEnum} from '../provider/action.interface';
import {
    AlertInterface,
    AlertTypeEnum,
    AuthStatusEnum,
} from '../provider/reducer/utils.reducer';

export const host = process.env.REACT_APP_HOST ?? 'http://localhost:8000';


export enum HttpMethodEnum {
    Post,
    Put,
    Get,
    Delete,
}

export interface MainResInterface {
    clientMessage: string;
    message: string;
    code: number;
}

export interface RefreshServiceResInterface extends MainResInterface {
    token: string;
}

export class HelperService<Request, Response extends MainResInterface> {
    response?: AxiosResponse<Response>;
    errors: any[] = [];
    errorCode?: number;

    constructor(
        readonly url: string,
        readonly data: Request,
        readonly method: HttpMethodEnum,
        readonly shouldRefresh: boolean,
        readonly skeletone: boolean,
        readonly authNeed: boolean = true,
        readonly loader?: boolean
    ) {
    }

    private addLoader(url?: string) {
        if (this.loader ?? true) {
            if (this.skeletone) {
                store.dispatch<ActionInterface<string>>({
                    type: ActionTypeEnum.AddSkeletonLoader,
                    payload: url ?? this.url,
                });
            } else {
                store.dispatch<ActionInterface<string>>({
                    type: ActionTypeEnum.AddLoader,
                    payload: url ?? this.url,
                });
            }
        }
    }

    private removeLoader(url?: string) {
        if (this.loader ?? true) {
            if (this.skeletone) {
                store.dispatch<ActionInterface<string>>({
                    type: ActionTypeEnum.RemoveSkeletonLoader,
                    payload: url ?? this.url,
                });
            } else {
                store.dispatch<ActionInterface<string>>({
                    type: ActionTypeEnum.RemoveLoader,
                    payload: url ?? this.url,
                });
            }
        }
    }

    async call() {
        const axiosConfig: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token') ?? '',
            },
        };
        this.addLoader();
        try {
            switch (this.method) {
                case HttpMethodEnum.Get:
                    this.response = await axios.get<Response>(
                        host + this.url,
                        axiosConfig
                    );
                    break;
                case HttpMethodEnum.Delete:
                    this.response = await axios.delete<Response>(
                        host + this.url,
                        axiosConfig
                    );
                    break;
                case HttpMethodEnum.Put:
                    this.response = await axios.put<Response>(
                        host + this.url,
                        this.data,
                        axiosConfig
                    );
                    break;
                default:
                case HttpMethodEnum.Post:
                    this.response = await axios.post<Response>(
                        host + this.url,
                        this.data,
                        axiosConfig
                    );
                    break;
            }
            this.removeLoader();
            if ((this.response?.data?.clientMessage ?? '') !== '') {
                store.dispatch<ActionInterface<AlertInterface>>({
                    type: ActionTypeEnum.SetAlert,
                    payload: {
                        text: this.response?.data.clientMessage,
                        type:
                            this.response?.data.code === 0
                                ? AlertTypeEnum.Success
                                : AlertTypeEnum.Warning,
                    },
                });
            }
        } catch (e) {
            this.removeLoader();
            this.errors.push(e);
            if (((e as AxiosError).response?.data as MainResInterface)?.code) {
                this.errorCode = (
                    (e as AxiosError).response?.data as MainResInterface
                )?.code;
            }
            if ((e as AxiosError)?.response?.status === 401 && this.authNeed) {
                localStorage.clear();
                store.dispatch<ActionInterface<AlertInterface>>({
                    type: ActionTypeEnum.SetAlert,
                    payload: {
                        type: AlertTypeEnum.Warning,
                        text: 'جلسه شما به اتمام رسید. لطفا مجددا وارد شوید',
                    },
                });
                store.dispatch<ActionInterface<AuthStatusEnum>>({
                    type: ActionTypeEnum.SetAuthStatus,
                    payload: AuthStatusEnum.Forbidden,
                });
            } else {
                if (
                    (((e as AxiosError).response?.data as MainResInterface)
                        ?.clientMessage ?? '') !== ''
                ) {
                    store.dispatch<ActionInterface<AlertInterface>>({
                        type: ActionTypeEnum.SetAlert,
                        payload: {
                            type: AlertTypeEnum.Danger,
                            text:
                                (
                                    (e as AxiosError)?.response
                                        ?.data as MainResInterface
                                )?.clientMessage ?? '',
                        },
                    });
                } else {
                    store.dispatch<ActionInterface<AlertInterface>>({
                        type: ActionTypeEnum.SetAlert,
                        payload: {
                            type: AlertTypeEnum.Danger,
                            text:
                                'خطایی رخ دادهاست،اتصال خود\n' +
                                '\n' +
                                'را بررسی فرمایید!',
                        },
                    });
                }
            }
        }
    }

    async refresh() {
        this.addLoader('refresh');
        try {
            const res = await axios.post<RefreshServiceResInterface>(
                `${host}/refresh`,
                {refresh: localStorage.getItem('refresh')},
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            this.removeLoader('refresh');
            return res.data.token;
        } catch (e) {
            if ((e as AxiosError).response?.status === 401 && this.authNeed) {
                store.dispatch<ActionInterface<AuthStatusEnum>>({
                    type: ActionTypeEnum.SetAuthStatus,
                    payload: AuthStatusEnum.Forbidden,
                });
                store.dispatch<ActionInterface<string>>({
                    type: ActionTypeEnum.RemoveLoader,
                    payload: 'refresh',
                });
                return null;
            } else if (
                (e as AxiosError<MainResInterface>)?.response?.data.message &&
                (e as AxiosError<MainResInterface>)?.response?.data.message
                    .toLocaleLowerCase()
                    .indexOf('session id not found') !== -1
            ) {
                store.dispatch<ActionInterface<AuthStatusEnum>>({
                    type: ActionTypeEnum.SetAuthStatus,
                    payload: AuthStatusEnum.Forbidden,
                });
                store.dispatch<ActionInterface<string>>({
                    type: ActionTypeEnum.RemoveLoader,
                    payload: 'refresh',
                });
            } else {
                store.dispatch<ActionInterface<AlertInterface>>({
                    type: ActionTypeEnum.SetAlert,
                    payload: {
                        type: AlertTypeEnum.Danger,
                        text:
                            'خطایی رخ دادهاست،اتصال خود\n' +
                            '\n' +
                            'را بررسی فرمایید!',
                    },
                });
                this.removeLoader('refresh');
                return null;
            }
        }
    }
}
