import React from 'react';

import Select from './Select';

class Model extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            availableOptions: null
        };
        this.apiCall();
    }

    apiCall() {
        const requestBody = {
            query: `
                query {
                    model {
                        id
                        type
                        value
                        label
                        description
                        price
                        src
                        title
                        aria
                    }
                }
            `
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(requestBody)
        };
        //console.log(options);
        fetch('http://localhost:6969/api', options).then(promise => {
            return promise.json();
//            if (res.ok) {
//                return res.json();
//            } else {
//                console.log(res);
//                throw new Error("Unable to fetch data from GraphQL API...");
//            }
        }).then(result => {
            console.log(result.data);
            this.setState({
                availableOptions: result.data.model
            });
            //console.log(json);
        });
    }

    render() {
        return (
            <div className={this.props.component}>
                <Select component={this.props.component} availableOptions={this.state.availableOptions} />
            </div>
        );
    }
}

export default Model;
