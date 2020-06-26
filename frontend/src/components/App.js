import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from './common/Heading';
import Selector from './common/Selector';
import Prevention from './common/Prevention';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { level, label, location } = this.props;
        const tag = location.pathname.split("/").pop();
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

const mapStateToProps = state => ({
    level: state.appComponent.level,
    label: state.appComponent.label
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(App));
