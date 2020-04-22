import React, { Component, Fragment } from 'react';

import Header from './Header';

class App extends Component {
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
                    page {
                        id
                        label
                        layout
                        hidden
                        title
                        aria
                    }
                    content {
                        id
                        page
                        header
                        text
                        hidden
                    }
                    multimedia {
                        id
                        page
                        src
                        ordering
                        box
                        hidden
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
                availableOptions: result.data.page
            });
            //console.log(json);
        });
    }

    render() {
        return (
            <Fragment>
                <Header>
                    <Nav>
                        <Heading>
                        </Heading>
                        <Handler>
                        </Handler>
                        <Menu>
                        </Menu>
                    </Nav>
                </Header>
                <Section>
                </Section>
                <Footer>
                    <Container>
                        <Contact>
                        </Contact>
                        <Social>
                        </Social>
                    </Container>
                    <Container>
                        <Sitemap>
                        </Sitemap>
                        <Brand>
                        </Brand>
                    </Container>
                    <Copyright>
                    </Copyright>
                </Footer>
            </Fragment>
        );
    }
}

export default App;
