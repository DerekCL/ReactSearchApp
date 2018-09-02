import { FSA } from "@src/helpers/FSA";

/** Action type constants. */
export const SWITCH_PAGE = "SWITCH_PAGE";
export const LOGIN_EPIC = "LOGIN_EPIC";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REGISTER_EPIC = "REGISTER_EPIC";

/** Action type definitions. */
export type SwitchPageAction = FSA<typeof SWITCH_PAGE, string>;
export type LoginEpicAction = FSA<typeof LOGIN_EPIC>;
export type LoginSuccess = FSA<typeof LOGIN_SUCCESS, any>;
export type RegisterEpicAction = FSA<typeof REGISTER_EPIC>;

export type Action =
    | SwitchPageAction
    | LoginEpicAction
    | RegisterEpicAction
    | LoginSuccess;

/** Action creators.  */
export function switchPage(page: string): SwitchPageAction {
    return {
        payload: page,
        type: SWITCH_PAGE,
    };
}

export function loginEpicCreator(): LoginEpicAction {
    return {
        type: LOGIN_EPIC,
    };
}

export function registerEpicCreator(): RegisterEpicAction {
    return {
        type: REGISTER_EPIC,
    };
}

export function loginSuccess(response: any): LoginSuccess {
    return {
        payload: response,
        type: LOGIN_SUCCESS,
    };
}
