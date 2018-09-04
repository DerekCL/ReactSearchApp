import { combineEpics, Epic, ofType } from "redux-observable";
import { ajax } from "rxjs/observable/dom/ajax";
import { catchError, mapTo, mergeMap, switchMap } from "rxjs/operators";

import {
    Action as RootAction,
    State as RootState,
} from "@src/store/configureStore";

import {
    SEARCH_EPIC,
    searchEpicFailure,
    searchEpicSuccess,
    searchResultsUpdate,
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

const SearchEpic: Epic<any, RootState> = (action$, store) =>
    action$.pipe(
        ofType(SEARCH_EPIC),
        switchMap(action =>
            ajax({
                createXHR: () => {
                    return new XMLHttpRequest();
                },
                crossDomain: true,
                method: "POST",
                responseType: "json",
                body: {
                    google_access_token: action.payload.googleAccessToken,
                },
                url: `${host}:${searchPort}/?${action.payload.query}`,
            })
                // Note the different operator here
                .pipe(
                    mergeMap(payload => {
                        // Concat 2 observables so they fire sequentially
                        const response = payload.response;
                        const responseWithKeys = response.map(
                            (company: any, i: number) => {
                                company.id = i;
                                return company;
                            },
                        );
                        return [
                            searchEpicSuccess(),
                            searchResultsUpdate(responseWithKeys),
                        ];
                    }),
                    catchError(({ xhr }: any) => [searchEpicFailure(xhr)]),
                ),
        ),
    );

export default combineEpics(SearchEpic);
