import { FSA } from "@src/helpers/FSA";

/** Action type constants. */
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SWITCH_PAGE = "SWITCH_PAGE";

/** Action type definitions. */
export type IncrementAction = FSA<typeof INCREMENT>;
export type DecrementAction = FSA<typeof DECREMENT>;
export type SwitchPageAction = FSA<typeof SWITCH_PAGE, string>;

export type Action = IncrementAction | DecrementAction | SwitchPageAction;

/** Action creators.  */
export function incrementCounter(): IncrementAction {
    return {
        type: INCREMENT,
    };
}

export function decrementCounter(): DecrementAction {
    return {
        type: DECREMENT,
    };
}

export function SwitchPage(page: string): SwitchPageAction {
    return {
        payload: page,
        type: SWITCH_PAGE,
    };
}
