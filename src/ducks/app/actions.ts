import { FSA } from "@src/helpers/FSA";

/** Action type constants. */
export const SWITCH_PAGE = "SWITCH_PAGE";
export const LOGIN_EPIC = "LOGIN_EPIC";
export const REGISTER_EPIC = "REGISTER_EPIC";

/** Action type definitions. */
export type SwitchPageAction = FSA<typeof SWITCH_PAGE, string>;
export type LoginEpicAction = FSA<typeof LOGIN_EPIC>;
export type RegisterEpicAction = FSA<typeof REGISTER_EPIC>;

export type Action = SwitchPageAction | LoginEpicAction | RegisterEpicAction;

/** Action creators.  */
export function SwitchPage(page: string): SwitchPageAction {
    return {
        payload: page,
        type: SWITCH_PAGE,
    };
}

export function LoginEpicCreator(): LoginEpicAction {
    return {
        type: LOGIN_EPIC,
    };
}

export function LoginEpicCreator(): LoginEpicAction {
    return {
        type: LOGIN_EPIC,
    };
}
