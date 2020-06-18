import React, { Component } from 'react';

import Heading from './Heading';

class Copyright extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_LEVEL,
            label: process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_LABEL
        };
    }

    render() {
        const { level, label } = this.state;
        const year = new Date().getFullYear();
        const copyright = year > 2020 ? '2020 - ' + year : year;
        const link = process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_LINK;
        const maza_link = process.env.REACT_APP_DOC_FOOTER_BY_LINK;
        const maza_label = process.env.REACT_APP_DOC_FOOTER_BY_LABEL;
        return (
            <>
                <Heading hidden={true} level={level} label={label} />
                <div className='footer_copyright'>
                    <strong>&copy; {copyright} <a href='/'>{link}</a>. All rights reserved.</strong>
                </div>
                <div className='footer_by'>
                    <span>by <a href={maza_link} target='_blank' rel='noopener noreferrer'>{maza_label}</a></span>
                </div>
            </>
        );
    }
}

export default Copyright;
