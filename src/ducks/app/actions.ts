import { FSA } from "@src/helpers/FSA";

/** Action type constants. */
export const SWITCH_PAGE = "SWITCH_PAGE";
export const SEARCH_EPIC = "SEARCH_EPIC";
export const SEARCH_EPIC_SUCCESS = "SEARCH_EPIC_SUCCESS";
export const SEARCH_EPIC_FAILURE = "SEARCH_EPIC_FAILURE";
export const SEARCH_RESULTS_UPDATE = "SEARCH_RESULTS_UPDATE";
export const GOOGLE_LOGIN = "GOOGLE_LOGIN";
export const GOOGLE_LOGOUT = "GOOGLE_LOGOUT";

/** Action type definitions. */
export type SwitchPageAction = FSA<typeof SWITCH_PAGE, string>;
export type SearchEpicAction = FSA<typeof SEARCH_EPIC, string>;
export type SearchSuccessAction = FSA<typeof SEARCH_EPIC_SUCCESS>;
export type SearchFailureAction = FSA<typeof SEARCH_EPIC_FAILURE, any>;
export type SearchResultsUpdateAction = FSA<typeof SEARCH_RESULTS_UPDATE, any>;
export type GoogleLoginAction = FSA<typeof GOOGLE_LOGIN, any>;
export type GoogleLogoutAction = FSA<typeof GOOGLE_LOGOUT, any>;

export type Action =
    | SwitchPageAction
    | SearchEpicAction
    | SearchSuccessAction
    | SearchFailureAction
    | SearchResultsUpdateAction
    | GoogleLoginAction
    | GoogleLogoutAction;

/** Action creators.  */
export function switchPage(page: string): SwitchPageAction {
    return {
        payload: page,
        type: SWITCH_PAGE,
    };
}

export function searchEpicCreator(googleAccessToken: any): SearchEpicAction {
    return {
        payload: googleAccessToken,
        type: SEARCH_EPIC,
    };
}

export function searchEpicSuccess(): SearchSuccessAction {
    return {
        type: SEARCH_EPIC_SUCCESS,
    };
}

export function searchEpicFailure(response: any): SearchFailureAction {
    return {
        payload: response,
        type: SEARCH_EPIC_FAILURE,
    };
}

export function searchResultsUpdate(response: any): SearchResultsUpdateAction {
    return {
        payload: response,
        type: SEARCH_RESULTS_UPDATE,
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
