import React, { Component } from 'react';

import Heading from '../common/Heading';

class FormHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 'h3',
            label: 'Help section'
        };
    }

    render() {
        const { level, label } = this.state;
        return (
            <section>
                <Heading hidden={true} level={level} label={label} />
                <div>
                    <strong>Forename:</strong>
                    <p>a to z, åäö, A to Z, ÅÄÖ, space, dot, underscore, hyphen and/or an apostrophe - number of characters between 2 and 50</p>
                </div>
                <div>
                    <strong>Surname:</strong>
                    <p>a to z, åäö, A to Z, ÅÄÖ, space, dot, underscore, hyphen and/or an apostrophe - number of characters between 2 and 50</p>
                </div>
                <div>
                    <strong>Address:</strong>
                    <p>a to z, åäö, A to Z, ÅÄÖ, space, dot, underscore, hyphen and/or an apostrophe - number of characters between 3 and 100</p>
                </div>
                <div>
                    <strong>Phone:</strong>
                    <p>0 to 9, space, plus sign and/or hyphen - number of characters between 3 and 25</p>
                </div>
                <div>
                    <strong>E-mail:</strong>
                    <p>e.g. username + AT + domain + DOT + prefix</p>
                    <p>username - a to z, A to Z, 0 to 9, dot and/or hyphen - number of characters between 2 and 50</p>
                    <p>domain - a to z, A to Z, 0 to 9, dot and/or hyphen - number of characters between 2 and 50</p>
                    <p>ending - a to z and/or A to Z - number of characters between 2 and 13</p>
                </div>
                <div>
                    <strong>Purpose:</strong>
                    <p>a to z, åäö, A to Z, ÅÄÖ, space, dot, underscore, hyphen and/or an apostrophe - number of characters between 2 and 50</p>
                </div>
                <div>
                    <strong>Message:</strong>
                    <p>a to z, åäö, A to Z, ÅÄÖ, space, dot, underscore, hyphen and/or an apostrophe - number of characters between 2 and 5000</p>
                </div>
            </section>
        );
    }
}

export default FormHelp;
