import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from '../common/Heading';
import Contact from '../contact/Contact';
import Sitemap from './Sitemap';
import Copyright from './Copyright';

//import {
//    getFooterLogo
//} from '../../redux/actions/footer';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //this.props.actions.getFooterLogo();//Note: Get logo from Handler...
    }

    render() {
        const { loading, multimedia, level, label } = this.props;
        if (loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            return (
                <footer>
                    <header>
                        <Heading hidden={true} level={level} label={label} />
                        <a href='/'>
                            <img className='footer_logotype' src={multimedia[0].src} alt={multimedia[0].alt} title={multimedia[0].title} />
                        </a>
                    </header>
                    <div>
                        <div className='contact_minimal'>
                            <Contact minimalContact={true} tag={this.props.tag} />
                        </div>
                        <div>
                            <Sitemap />
                        </div>
                    </div>
                    <footer>
                        <Copyright />
                    </footer>
                </footer>
            );
        }
    }
}

const mapStateToProps = state => ({
    loading: state.handlerComponent.loading,//Note: Get logo from Handler...
    multimedia: state.handlerComponent.multimedia,//Note: Get logo from Handler...
    level: state.footerComponent.level,
    label: state.footerComponent.label
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Footer));
