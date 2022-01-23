import {HelperService, HttpMethodEnum, MainResInterface} from "../../../utils/helper.service";
import {ActionInterface, ActionTypeEnum} from "../../../provider/action.interface";
import {store} from "../../../provider/store";
import {AlertInterface, AlertTypeEnum, AuthStatusEnum} from "../../../provider/reducer/utils.reducer";


export interface LoginReqInterface {
    username: string;
    password: string;
}

export interface LoginResInterface extends MainResInterface {
    token: string;
}

export const loginService = async (req: LoginReqInterface) => {
    const service = new HelperService<LoginReqInterface, LoginResInterface>(
        '/user/login',
        req,
        HttpMethodEnum.Post,
        true,
        false
    );
    await service.call();
    if (service.response?.data) {
        localStorage.setItem('token', service.response.data.token);
        store.dispatch<ActionInterface<AuthStatusEnum>>({
            type: ActionTypeEnum.SetAuthStatus,
            payload: AuthStatusEnum.Ok,
        });
        store.dispatch<ActionInterface<AlertInterface>>({
            type: ActionTypeEnum.SetAlert,
            payload: {
                text: 'خوش آمدید',
                type: AlertTypeEnum.Success,
            },
        });
    }
};