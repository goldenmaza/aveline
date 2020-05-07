import React, { Component } from 'react';

class Collage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            collection: props.collection ? props.collection : null
        };
    }

    componentDidMount() {
        this.setState({
            loading: false
        });
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const { collection } = this.state;
            const collage = [];

            collection.forEach(c => {
                collage.push(
                    <img key={c.id} src={c.src} alt={c.alt} title={c.title} />
                );
            });

            return (
                <section>
                    { collage }
                </section>
            );
        }
    }
}

export default Collage;
