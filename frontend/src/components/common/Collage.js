import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Collage extends Component {
    render() {
        const { collection } = this.props;
        if (!collection) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const collage = [];

            collection.forEach(c => {
                collage.push(
                    <a key={c.id} href={c.src} target='_blank' rel='noopener noreferrer'>
                        <img src={c.src} alt={c.alt} title={c.title} />
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
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Collage));
