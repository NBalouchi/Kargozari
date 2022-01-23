export enum ActionTypeEnum {
    SetAssets = 'set assets',
    SetAlert = 'set alert',
    TogglePageLoader = 'toggle page loader',
    AddLoader = 'add loader',
    RemoveLoader = 'remove loader',
    AddSkeletonLoader = 'add skeletone loader',
    RemoveSkeletonLoader = 'remove skeletone loader',
    SetAuthStatus = 'set auth status',
    SetRoute = 'set route',
    SetPasswordIsExpired = 'set password is expired',
    ToggleSidebar = 'toggle sidebar',
}

export interface ActionInterface<T> {
    type: ActionTypeEnum;
    payload: T;
}