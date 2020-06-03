import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Heading from './common/Heading';
import Selector from './common/Selector';
import Prevention from './common/Prevention';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 'h1',
            label: 'Aveline',
            tag: null
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setState({
                tag: this.props.location.pathname.split("/").pop()
            });
        }
    }

    render() {
        const { level, label, tag } = this.state;
        return (
            <>
                <Heading hidden={true} level={level} label={label} />
                <Switch>
                    <Route exact path='/' render={() => <Selector component={'home'} tag={tag} />} />
                    <Route exact path='/p/contact/' render={() => <Selector component={'form'} tag={tag} />} />
                    {tag !== null &&
                        <Route path='/p/' render={() => <Selector component={'content'} tag={tag} />} />
                    }
                    <Route component={Prevention} />
                </Switch>
            </>
        );
    }
}

export default withRouter(props => <App {...props}/>);
