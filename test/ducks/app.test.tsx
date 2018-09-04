import { expect } from "chai";

import reducer, {
    GOOGLE_LOGIN,
    GOOGLE_LOGOUT,
    googleLogin,
    googleLogout,
    initialState,
    SEARCH_EPIC,
    SEARCH_EPIC_FAILURE,
    SEARCH_EPIC_SUCCESS,
    SEARCH_RESULTS_UPDATE,
    searchEpicCreator,
    searchEpicFailure,
    searchEpicSuccess,
    searchResultsUpdate,
    SWITCH_PAGE,
    switchPage,
} from "@src/ducks/app";

// describe and it are global functions from mocha
describe("app", () => {
    describe("Switch Page", () => {
        it("should create an action to switch to a page", () => {
            const expectedAction = {
                payload: "Login",
                type: SWITCH_PAGE,
            };
            expect(switchPage("Login")).to.deep.equal(expectedAction);
        });
    });
    describe("Search Epic", () => {
        it("should create an action to start the search epic", () => {
            const expectedAction = {
                payload: "aae%edf1",
                type: SEARCH_EPIC,
            };
            expect(searchEpicCreator("aae%edf1")).to.deep.equal(expectedAction);
        });
    });
    describe("Search Epic Success", () => {
        it("should create an action to say the epic was successful", () => {
            const expectedAction = {
                type: SEARCH_EPIC_SUCCESS,
            };
            expect(searchEpicSuccess()).to.deep.equal(expectedAction);
        });
    });
    describe("Search Epic Failure", () => {
        it("should create an action to say the epic failed", () => {
            const expectedAction = {
                payload: "an error occured",
                type: SEARCH_EPIC_FAILURE,
            };
            expect(searchEpicFailure("an error occured")).to.deep.equal(
                expectedAction,
            );
        });
    });
    describe("Search Results Update", () => {
        it("should create an action to update results", () => {
            const expectedAction = {
                payload: "filler",
                type: SEARCH_RESULTS_UPDATE,
            };
            expect(searchResultsUpdate("filler")).to.deep.equal(expectedAction);
        });
    });
    describe("Google Login", () => {
        it("should create an action to say the user has logged in", () => {
            const expectedAction = {
                payload: {
                    isAuthenticated: true,
                    token: "aae%edf1",
                    user: "filler",
                },
                type: GOOGLE_LOGIN,
            };
            expect(
                googleLogin({
                    isAuthenticated: true,
                    token: "aae%edf1",
                    user: "filler",
                }),
            ).to.deep.equal(expectedAction);
        });
    });
    describe("Google Logout", () => {
        it("should create an action to say the user has logged out", () => {
            const expectedAction = {
                payload: { isAuthenticated: false, token: "", user: null },
                type: GOOGLE_LOGOUT,
            };
            expect(
                googleLogout({ isAuthenticated: false, token: "", user: null }),
            ).to.deep.equal(expectedAction);
        });
    });
    // describe("decrementCounter", () => {
    //     it("should create an action to decrement a number", () => {
    //         const expectedAction = {
    //             type: DECREMENT,
    //         };
    //         expect(decrementCounter()).to.deep.equal(expectedAction);
    //     });
    //     it("0 - 1 = -1", () => {
    //         const stateBefore = { ...initialState };
    //         const newState = reducer(stateBefore, decrementCounter());
    //         expect(newState)
    //             .to.have.property("count")
    //             .that.is.equal(-1);
    //     });
    // });
});
