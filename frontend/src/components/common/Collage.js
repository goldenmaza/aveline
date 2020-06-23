import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Collage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { collection } = this.props;
        const collage = [];

        collection.forEach(c => {
            collage.push(
                <a href={c.src} target='_blank' rel='noopener noreferrer'>
                    <img key={c.id} src={c.src} alt={c.alt} title={c.title} />
                    <div>
                        <span>
                            View source...
                        </span>
                    </div>
                </a>
            );
        });

        return (
            <div className='collageContainer'>
                { collage }
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Collage));
