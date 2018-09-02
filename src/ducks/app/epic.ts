import { combineEpics, Epic, ofType } from "redux-observable";
import { ajax } from "rxjs/observable/dom/ajax";
import { catchError, mapTo, mergeMap, switchMap } from "rxjs/operators";
import { Observable } from "rxjs/Rx";

import {
    Action as RootAction,
    State as RootState,
} from "@src/store/configureStore";

import {
    LOGIN_EPIC,
    LOGIN_SUCCESS,
    REGISTER_EPIC,
    SWITCH_PAGE,
} from "./actions";

/**
 * When we fetch mailing files, make an API request to get the files for the
 * currently chosen year and set them in the store.
 */
const LoginEpic: Epic<any, RootState> = (action$, store) =>
    action$.pipe(
        ofType(LOGIN_EPIC),
        switchMap(() =>
            ajax
                .get("https://www.google.com")
                // Note the different operator here
                .pipe(
                    mergeMap(payload =>
                        // Concat 2 observables so they fire sequentially
                        [
                            {
                                payload,
                                type: LOGIN_SUCCESS,
                            },
                            {
                                payload: "Search",
                                type: SWITCH_PAGE,
                            },
                        ],
                    ),
                    catchError(({ xhr }: any) =>
                        Observable.of({
                            payload: "TOS",
                            type: SWITCH_PAGE,
                        }),
                    ),
                ),
        ),
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
