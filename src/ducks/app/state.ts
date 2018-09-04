export interface SearchDataElement {
    id: number;
    name: string;
    domain: string;
}

export interface User {
    id: number;
    username: string;
    google_id: string;
    google_access_token: string;
    google_refresh_token: string;
    admin: boolean;
    date_added: string;
    updated: string;
}

export interface State {
    isAuthenticated: boolean;
    page: string;
    searchData: SearchDataElement[];
    token: string;
    user: User;
}

/** Initial state for the application. */
export const initialState: State = {
    isAuthenticated: false,
    page: "Login",
    searchData: [{ id: 0, name: "", domain: "" }],
    token: "",
    user: {
        id: 0,
        username: "",
        google_id: "",
        google_access_token: "",
        google_refresh_token: "",
        admin: false,
        date_added: "",
        updated: "",
    },
};
