import React, { Component } from 'react';

import Heading from './Heading';
import Content from './Content';
import Navigation from './Navigation';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            office: null,
            contact: null,
            social: null,
            navigation: null,
            multimedia: null,
            target: null,
            level: 'h2',
            label: 'Page content'
        };

        this.toggleOffice = this.toggleOffice.bind(this);
    }

    componentDidMount() {
        const requestBody = {
            query: `
                query {
                    office (hidden: false) {
                        id
                        main
                        region
                        locale
                        label
                        orgnr
                    }
                    contact (hidden: false) {
                        id
                        office
                        main
                        title
                        forename
                        surname
                        street
                        postal
                        country
                        phone
                        email
                    }
                    social (hidden: false) {
                        id
                        url
                        media
                        label
                    }
                    navigation (hidden: false) {
                        id
                        office
                        latitude
                        longitude
                        main
                    }
                    multimedia (hidden: false) {
                        id
                        contact
                        office
                        box
                        src
                        alt
                        title
                    }
                }
            `
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(requestBody)
        };
        fetch('http://localhost:6969/api', options).then(promise => {
            return promise.json();
        }).then(result => {
            this.setState({
                office: result.data.office,
                contact: result.data.contact,
                social: result.data.social,
                navigation: result.data.navigation,
                multimedia: result.data.multimedia,
                loading: false
            });
        });
    }

    toggleOffice(event) {
        event.preventDefault();

        this.setState({
            target: Number(event.currentTarget.dataset.id)
        });
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...minimalContact
        } else {
            const { office, contact, social, navigation, multimedia, target, level, label } = this.state;
            const main = [];
            const socials = [];
            const offices = [];
            const contacts = [];

            office.forEach(o => {
                contact.forEach(c => {
                    if (o.id === c.office && o.main && c.main) {
                        const orgnr = 'https://www.allabolag.se/<ORGNR>/bokslut'.replace('<ORGNR>', o.orgnr);
                        const phone = 'tel:<TEL>'.replace('<TEL>', c.phone);
                        const email = 'mailto:<MAIL>'.replace('<MAIL>', c.email);
                        const address = c.street + ', ' + c.postal + ', '  + c.country;
                        const find = 'https://www.google.se/maps/place/<FIND>'.replace('<FIND>', address);
                        main.push(
                            <ul key={0}>
                                <li>
                                    <strong>
                                        {o.label}
                                    </strong>
                                </li>
                                <li>
                                    <a href={orgnr}>{o.orgnr}</a>
                                </li>
                                <li>
                                    {c.street}
                                </li>
                                <li>
                                    {c.postal}
                                </li>
                                <li>
                                    {c.country}
                                </li>
                                <li>
                                    <a href={phone}>{c.phone}</a>
                                </li>
                                <li>
                                    <a href={email}>{c.email}</a>
                                </li>
                                <li>
                                    <strong>
                                        <a href={find}>Hitta hit...</a>
                                    </strong>
                                </li>
                            </ul>
                        );
                    }
                });
            });

            social.forEach(s => {
                socials.push(
                    <li key={s.id}>
                        <a href={s.url + s.label} target='_blank' rel='noopener noreferrer'>{s.media}</a>
                    </li>
                );
            });

            office.forEach(o => {
                multimedia.forEach(m => {
                    if (o.id === m.office && m.box) {
                        offices.push(
                            <li key={o.id} data-id={o.id} onClick={this.toggleOffice}>
                                <img className='office_image' src={m.src} alt={m.alt} />
                            </li>
                        );
                    }
                });
            });

            contact.forEach(c => {
                multimedia.forEach(m => {
                    if (target === c.office && c.id === m.contact && m.box) {
                        contacts.push(
                            <li key={c.id}>
                                <img className='contact_image' src={m.src} alt={m.alt} />
                            </li>
                        );
                    }
                });
            });

            return (
                <>
                    <Heading hidden={true} level={level} label={label} />
                    {!this.props.minimalContact &&
                        <Content tag={this.props.tag} />
                    }
                    { main }
                    {socials.length > 0 &&
                        <ul>
                            <li>
                                <strong>Follow us:</strong>
                            </li>
                            { socials }
                        </ul>
                    }
                    {!this.props.minimalContact &&
                        <Navigation />
                    }
                    {!this.props.minimalContact && offices.length > 0 &&
                        <>
                            <nav>
                                <ul>
                                    { offices }
                                </ul>
                            </nav>
                            <nav>
                                <ul>
                                    { contacts }
                                </ul>
                            </nav>
                        </>
                    }
                </>
            );
        }
    }
}

export default Contact;
