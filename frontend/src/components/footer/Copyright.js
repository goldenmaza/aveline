import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from '../common/Heading';

class Copyright extends Component {
    render() {
        const { created, level, label, name, link, by } = this.props;
        const year = new Date().getFullYear();
        const copy = year > created ? created + ' - ' + year : year;
        return (// TODO: Refactor '/' && 'noopener noreferrer' to env???
            <>
                <Heading hidden={true} level={level} label={label} />
                <div className='footer_copyright'>
                    <strong>&copy; {copy} <a href='/'>{name}</a>. All rights reserved.</strong>
                </div>
                <div className='footer_by'>
                    <span>by <a href={link} target='_blank' rel='noopener noreferrer'>{by}</a></span>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    created: state.copyrightComponent.created,
    level: state.copyrightComponent.level,
    label: state.copyrightComponent.label,
    name: state.copyrightComponent.name,
    link: state.copyrightComponent.link,
    by: state.copyrightComponent.by
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Copyright));
