import React, { Component } from 'react';

class Copyright extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const year = new Date().getFullYear();
        const copyright = year > 2020 ? "2020 - " + year : year;
        return (
            <>
                <div className='footer_copyright'>
                    <strong>&copy; {copyright} Aveline.se. All rights reserved.</strong>
                </div>
                <div className='footer_by'>
                    <span>by <a href="http://www.hellstrand.org" target="_blank" rel="noopener noreferrer">goldenmaza</a></span>
                </div>
            </>
        );
    }
}

export default Copyright;
