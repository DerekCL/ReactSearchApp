import {
    Action,
    GOOGLE_LOGIN,
    GOOGLE_LOGOUT,
    SEARCH_RESULTS_UPDATE,
    SWITCH_PAGE,
} from "./actions";
import { initialState, State } from "./state";

export default function counter(state: State = initialState, action: Action) {
    const modfiedState = { ...state };
    switch (action.type) {
        case SWITCH_PAGE:
            modfiedState.page = action.payload;
            return modfiedState;
        case GOOGLE_LOGIN:
        case GOOGLE_LOGOUT:
            modfiedState.isAuthenticated = action.payload.isAuthenticated;
            modfiedState.user = action.payload.user;
            modfiedState.token = action.payload.token;
            return modfiedState;
        case SEARCH_RESULTS_UPDATE:
            modfiedState.searchData = action.payload;
            return modfiedState;
        default:
            return state;
    }
}
