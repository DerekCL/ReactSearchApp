import { FSA } from "@src/helpers/FSA";

/** Action type constants. */
export const SWITCH_PAGE = "SWITCH_PAGE";
export const LOGIN_EPIC = "LOGIN_EPIC";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GOOGLE_LOGIN = "GOOGLE_LOGIN";
export const GOOGLE_LOGOUT = "GOOGLE_LOGOUT";

/** Action type definitions. */
export type SwitchPageAction = FSA<typeof SWITCH_PAGE, string>;
export type LoginEpicAction = FSA<typeof LOGIN_EPIC>;
export type LoginSuccessAction = FSA<typeof LOGIN_SUCCESS, any>;
export type LoginFailureAction = FSA<typeof LOGIN_FAILURE, any>;
export type GoogleLoginAction = FSA<typeof GOOGLE_LOGIN, any>;
export type GoogleLogoutAction = FSA<typeof GOOGLE_LOGOUT, any>;

export type Action =
    | SwitchPageAction
    | LoginEpicAction
    | LoginSuccessAction
    | LoginFailureAction
    | GoogleLoginAction
    | GoogleLogoutAction;

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

export function loginSuccess(response: any): LoginSuccessAction {
    return {
        payload: response,
        type: LOGIN_SUCCESS,
    };
}

export function loginFailure(response: any): LoginFailureAction {
    return {
        payload: response,
        type: LOGIN_FAILURE,
    };
}

export function googleLogin(authPayload: any): GoogleLoginAction {
    return {
        payload: authPayload,
        type: GOOGLE_LOGIN,
    };
}

export function googleLogout(authPayload: any): GoogleLogoutAction {
    return {
        payload: authPayload,
        type: GOOGLE_LOGOUT,
    };
}
