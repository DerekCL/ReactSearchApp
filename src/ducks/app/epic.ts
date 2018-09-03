import { combineEpics, Epic, ofType } from "redux-observable";
import { ajax } from "rxjs/observable/dom/ajax";
import { catchError, mapTo, mergeMap, switchMap } from "rxjs/operators";

import {
    Action as RootAction,
    State as RootState,
} from "@src/store/configureStore";

import {
    LOGIN_EPIC,
    loginFailure,
    loginSuccess,
    REGISTER_EPIC,
    switchPage,
} from "./actions";

const host = `http://www.localhost`;
const searchPort = 7000;
const authPort = 9000;
const googleAuth = "google";
const search = `?companies[]=nike
&companies[]=adidas
&companies[]=google
&companies[]=microsoft
&companies[]=balfour
&companies[]=ethoca`;

/**
 * When we fetch mailing files, make an API request to get the files for the
 * currently chosen year and set them in the store.
 */
const LoginEpic: Epic<any, RootState> = (action$, store) =>
    action$.pipe(
        ofType(LOGIN_EPIC),
        switchMap(() =>
            ajax({
                createXHR: () => {
                    return new XMLHttpRequest();
                },
                crossDomain: true,
                method: "GET",
                responseType: "json",
                // headers: { "Access-Control-Allow-Headers": "Content-Type" },
                url: `${host}:${authPort}/${googleAuth}`,
            })
                // Note the different operator here
                .pipe(
                    mergeMap(payload =>
                        // Concat 2 observables so they fire sequentially
                        [loginSuccess(payload), switchPage("Search")],
                    ),
                    catchError(({ xhr }: any) => [loginFailure(xhr)]),
                ),
        ),
    );

const RegisterEpic: Epic<any, RootState> = (action$, store) =>
    action$.pipe(
        ofType(LOGIN_EPIC),
        switchMap(() =>
            ajax({
                createXHR: () => {
                    return new XMLHttpRequest();
                },
                crossDomain: true,
                method: "GET",
                responseType: "json",
                url: `${host}:${searchPort}/${search}`,
            })
                // Note the different operator here
                .pipe(
                    mergeMap(payload =>
                        // Concat 2 observables so they fire sequentially
                        [loginSuccess(payload), switchPage("Search")],
                    ),
                    catchError(({ xhr }: any) => [loginFailure(xhr)]),
                ),
        ),
    );

export default combineEpics(LoginEpic, RegisterEpic);
