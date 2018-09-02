import { Action, DECREMENT, INCREMENT, SWITCH_PAGE } from "./actions";
import { initialState, State } from "./state";

export default function counter(state: State = initialState, action: Action) {
    const modfiedState = { ...state };
    switch (action.type) {
        case INCREMENT:
            modfiedState.count = modfiedState.count + 1;
            return modfiedState;
        case DECREMENT:
            modfiedState.count = modfiedState.count - 1;
            return modfiedState;
        case SWITCH_PAGE:
            modfiedState.page = action.payload;
            return modfiedState;
        default:
            return state;
    }
}
