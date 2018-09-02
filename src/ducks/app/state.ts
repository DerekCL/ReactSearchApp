interface SearchDataElement {
    id: number;
    name: string;
    domain: string;
}

export interface State {
    page: string;
    searchData: SearchDataElement[];
}

const dummyData = [
    { id: 1, name: "Google", domain: "www.google.com" },
    { id: 2, name: "Microsoft", domain: "www.microsoft.com" },
    { id: 3, name: "Apple", domain: "www.apple.com" },
];

/** Initial state for the application. */
export const initialState: State = {
    page: "Login",
    searchData: dummyData,
};
