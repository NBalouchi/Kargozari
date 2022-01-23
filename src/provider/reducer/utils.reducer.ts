import {ActionInterface, ActionTypeEnum} from "../action.interface";

export enum AlertTypeEnum {
    Success,
    Warning,
    Info,
    Danger,
}

export enum AuthStatusEnum {
    NotChecked,
    Ok,
    Forbidden,
}

export interface AlertInterface {
    type: AlertTypeEnum;
    text: string;
}

export interface UtilsReducerInterface {
    loader: string[];
    skeletonLoader: string[];
    pageLoader: boolean;
    alert?: AlertInterface;
    authStatus: AuthStatusEnum;
    passwordIsExpired: boolean;
    collapsedSidebar: boolean;
}

export const UtilsReducer = (
    state: UtilsReducerInterface = {
        loader: [],
        pageLoader: false,
        alert: undefined,
        authStatus: AuthStatusEnum.NotChecked,
        skeletonLoader: [],
        passwordIsExpired: false,
        collapsedSidebar: false,
    },
    action: ActionInterface<any>
) => {
    switch (action.type) {
        case ActionTypeEnum.ToggleSidebar:
            return {...state, collapsedSidebar: !state.collapsedSidebar};
        case ActionTypeEnum.AddLoader:
            return {...state, loader: [...state.loader, action.payload]};
        case ActionTypeEnum.RemoveLoader:
            return {
                ...state,
                loader: state.loader.filter((item) => item !== action.payload),
            };
        case ActionTypeEnum.AddSkeletonLoader:
            return {
                ...state,
                skeletonLoader: [...state.skeletonLoader, action.payload],
            };
        case ActionTypeEnum.RemoveSkeletonLoader:
            return {
                ...state,
                skeletonLoader: state.skeletonLoader.filter(
                    (item) => item !== action.payload
                ),
            };
        case ActionTypeEnum.SetPasswordIsExpired:
            return {
                ...state,
                passwordIsExpired: action.payload,
            };
        case ActionTypeEnum.TogglePageLoader:
            return {...state, pageLoader: !state.pageLoader};
        case ActionTypeEnum.SetAlert:
            return {...state, alert: action.payload};
        case ActionTypeEnum.SetAuthStatus:
            return {...state, authStatus: action.payload};
        case ActionTypeEnum.SetRoute:
            return {...state, route: action.payload};

        default:
            return state;
    }
};