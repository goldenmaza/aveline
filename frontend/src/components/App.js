import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from './common/Heading';
import Selector from './common/Selector';
import Prevention from './common/Prevention';

class App extends Component {
    render() {
        const { level, label, location } = this.props;
        const route = location.pathname.split("/").pop();
        return (
            <>
                <Heading hidden={true} level={level} label={label} />
                <Switch>
                    <Route exact path='/' render={() => <Selector component={'home'} route={route} />} />
                    <Route exact path='/p/contact/' render={() => <Selector component={'form'} route={route} />} />
                    {route !== null &&
                        <Route path='/p/' render={() => <Selector component={'content'} route={route} />} />
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

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(App));
