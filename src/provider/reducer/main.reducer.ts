import {combineReducers} from "redux";
import {UtilsReducer, UtilsReducerInterface} from "./utils.reducer";


export interface MainReducerInterface {
    utils: UtilsReducerInterface;
}

export const mainReducer = combineReducers<MainReducerInterface>({
    utils: UtilsReducer,
});
