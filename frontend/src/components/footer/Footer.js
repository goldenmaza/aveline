import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from '../common/Heading';
import Contact from '../contact/Contact';
import Sitemap from './Sitemap';
import Copyright from './Copyright';

class Footer extends Component {
    render() {
        const { loading, collage, tag, level, label } = this.props;
        if (loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            return (
                <footer>
                    <header>
                        <Heading hidden={true} level={level} label={label} />
                        <a href='/'>
                            <img className='footer_logotype' src={collage[0].src} alt={collage[0].alt} title={collage[0].title} />
                        </a>
                    </header>
                    <section>
                        <div className='contact_minimal'>
                            <Contact minimalContact={true} tag={tag} />
                        </div>
                        <Sitemap />
                    </section>
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
    collage: state.handlerComponent.collage,//Note: Get logo from Handler...
    level: state.footerComponent.level,
    label: state.footerComponent.label
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Footer));
