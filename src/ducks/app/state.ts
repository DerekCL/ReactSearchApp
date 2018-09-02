export interface State {
    count: number;
    page: string;
}

/** Initial state for the application. */
export const initialState: State = {
    count: 0,
    page: "Login",
};
