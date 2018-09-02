import { createSelector } from "reselect";

import { State as RootState } from "@src/store/configureStore";

/** Get the app duck state. */
const getApp = (state: RootState) => state.app;

export const page = createSelector(getApp, app => app.page);
