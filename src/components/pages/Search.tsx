import * as React from "react";

import Result from "@src/components/pages/Result";

class Search extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            query: "",
        };
    }

    handleInputChange = (event: any) => {
        this.setState({
            query: event.target.value,
        });
    }

    validateForm() {
        return this.state.query.length > 0;
    }

    handleSubmit = (event: any): void => {
        event.preventDefault();
        const companyArray = this.state.query.split(",");
        let queryString = "";
        companyArray.forEach((company: any) => {
            queryString = `${queryString}&companies[]=${company}`;
        });

        this.props.searchEpicCreator({
            query: queryString,
            user: this.props.user.googleAccessToken,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Domain Search</h1>
                    <h3>
                        Enter Company Names (seperated by commas ex: Google,
                        Microsoft)
                    </h3>
                    <input
                        placeholder="Search for..."
                        onChange={this.handleInputChange}
                    />
                    <button disabled={!this.validateForm()} type="submit">
                        Search
                    </button>
                </form>
                <Result />
            </div>
        );
    }
}

export default Search;
