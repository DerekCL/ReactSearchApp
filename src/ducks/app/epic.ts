import { combineEpics, Epic, ofType } from "redux-observable";
import { mapTo } from "rxjs/operators";

import {
    Action as RootAction,
    State as RootState,
} from "@src/store/configureStore";

import { LOGIN_EPIC, REGISTER_EPIC, SWITCH_PAGE } from "./actions";

/**
 * When we fetch mailing files, make an API request to get the files for the
 * currently chosen year and set them in the store.
 */
const LoginEpic: Epic<any, RootState> = (action$, store) =>
    action$.pipe(
        ofType(LOGIN_EPIC),
        mapTo({
            payload: "Search",
            type: SWITCH_PAGE,
        }),
    );

const RegisterEpic: Epic<any, RootState> = (action$, store) =>
    action$.pipe(
        ofType(REGISTER_EPIC),
        mapTo({
            payload: "Search",
            type: SWITCH_PAGE,
        }),
    );

export default combineEpics(LoginEpic, RegisterEpic);
