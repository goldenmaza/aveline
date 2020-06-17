import React, { Component } from 'react';

import Heading from '../common/Heading';

class FormHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: process.env.REACT_APP_DOC_FORMHELP_LEVEL,
            label: process.env.REACT_APP_DOC_FORMHELP_LABEL
        };
    }

    render() {// TODO: Refactor so help details are generated dynamically based on the values stated under .env
        const { level, label } = this.state;
        return (
            <section className={'helpSection'}>
                <header>
                    <Heading hidden={false} level={level} label={label} />
                </header>
                <div>
                    <strong>Forename:</strong>
                    <div>
                        <p>
                            <strong>Alphabetic characters:</strong>a to z, åäö, A to Z and ÅÄÖ
                        </p>
                        <p>
                            <strong>Others:</strong>space, dot, underscore, hyphen and/or an apostrophe
                        </p>
                        <p>
                            <strong>Limit:</strong>number of characters between 2 and 50
                        </p>
                    </div>
                </div>
                <div>
                    <strong>Surname:</strong>
                    <div>
                        <p>
                            <strong>Alphabetic characters:</strong>a to z, åäö, A to Z and ÅÄÖ
                        </p>
                        <p>
                            <strong>Others:</strong>space, dot, underscore, hyphen and/or an apostrophe
                        </p>
                        <p>
                            <strong>Limit:</strong>number of characters between 2 and 50
                        </p>
                    </div>
                </div>
                <div>
                    <strong>Address:</strong>
                    <div>
                        <p>
                            <strong>Alphabetic characters:</strong>a to z, åäö, A to Z and ÅÄÖ
                        </p>
                        <p>
                            <strong>Others:</strong>space, dot, underscore, hyphen and/or an apostrophe
                        </p>
                        <p>
                            <strong>Limit:</strong>number of characters between 3 and 100
                        </p>
                    </div>
                </div>
                <div>
                    <strong>Phone:</strong>
                    <div>
                        <p>
                            <strong>Digits:</strong>0 to 9
                        </p>
                        <p>
                            <strong>Others:</strong>space, plus sign and/or hyphen
                        </p>
                        <p>
                            <strong>Limit:</strong>number of characters between 3 and 25
                        </p>
                    </div>
                </div>
                <div>
                    <strong>E-mail:</strong>
                    <div>
                        <div>
                            <p>e.g. username + AT + domain + DOT + suffix</p>
                        </div>
                        <div>
                            <p>
                                <strong>username:</strong>a to z, A to Z, 0 to 9, dot and/or hyphen - number of characters between 2 and 50
                            </p>
                            <p>
                                <strong>domain:</strong>a to z, A to Z, 0 to 9, dot and/or hyphen - number of characters between 2 and 50
                            </p>
                            <p>
                                <strong>suffix:</strong>a to z and/or A to Z - number of characters between 2 and 13
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <strong>Purpose:</strong>
                    <div>
                        <p>
                            <strong>Alphabetic characters:</strong>a to z, åäö, A to Z and ÅÄÖ
                        </p>
                        <p>
                            <strong>Others:</strong>space, dot, underscore, hyphen and/or an apostrophe
                        </p>
                        <p>
                            <strong>Limit:</strong>number of characters between 2 and 50
                        </p>
                    </div>
                </div>
                <div>
                    <strong>Message:</strong>
                    <div>
                        <p>
                            <strong>Alphabetic characters:</strong>a to z, åäö, A to Z and ÅÄÖ
                        </p>
                        <p>
                            <strong>Others:</strong>space, dot, underscore, hyphen and/or an apostrophe
                        </p>
                        <p>
                            <strong>Limit:</strong>number of characters between 5 and 5000
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default FormHelp;
