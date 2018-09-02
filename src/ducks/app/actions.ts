import { FSA } from "@src/helpers/FSA";

/** Action type constants. */
export const SWITCH_PAGE = "SWITCH_PAGE";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

/** Action type definitions. */
export type SwitchPageAction = FSA<typeof SWITCH_PAGE, string>;
export type LoginAction = FSA<typeof LOGIN>;
export type RegisterAction = FSA<typeof REGISTER>;

export type Action = SwitchPageAction | LoginAction | RegisterAction;

/** Action creators.  */
export function SwitchPage(page: string): SwitchPageAction {
    return {
        payload: page,
        type: SWITCH_PAGE,
    };
}

export function LoginAC(): LoginAction {
    return {
        type: LOGIN,
    };
}
