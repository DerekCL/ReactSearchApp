import { Action, SWITCH_PAGE } from "./actions";
import { initialState, State } from "./state";

export default function counter(state: State = initialState, action: Action) {
    const modfiedState = { ...state };
    switch (action.type) {
        case SWITCH_PAGE:
            modfiedState.page = action.payload;
            return modfiedState;
        default:
            return state;
    }
}
