import React, { Component } from 'react';

import Heading from './Heading';

class Copyright extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 'h3',
            label: 'Copyright content'
        };
    }

    render() {
        const { level, label } = this.state;
        const year = new Date().getFullYear();
        const copyright = year > 2020 ? '2020 - ' + year : year;
        return (
            <>
                <Heading hidden={true} level={level} label={label} />
                <div className='footer_copyright'>
                    <strong>&copy; {copyright} <a href='/'>XactPartner.com</a>. All rights reserved.</strong>
                </div>
                <div className='footer_by'>
                    <span>by <a href='http://www.hellstrand.org' target='_blank' rel='noopener noreferrer'>goldenmaza</a></span>
                </div>
            </>
        );
    }
}

export default Copyright;
