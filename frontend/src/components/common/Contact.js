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
            target: null
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
        fetch(process.env.REACT_APP_SERVER_API_ADDRESS, options).then(promise => {
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
            target: this.state.target === null ? Number(event.currentTarget.dataset.id) : null
        });
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...minimalContact
        } else {
            const { office, contact, social, navigation, multimedia, target } = this.state;
            const { tag, minimalContact } = this.props;
            const main = [];
            const socials = [];
            const offices = [];
            const contacts = [];
            const children = [];
            let addressNavigation = '';

            office.forEach(o => {
                contact.forEach(c => {
                    if (o.id === c.office && o.main && c.main) {
                        const orgnr = 'https://www.allabolag.se/<ORGNR>/bokslut'.replace('<ORGNR>', o.orgnr);
                        const phone = 'tel:<TEL>'.replace('<TEL>', c.phone);
                        const email = 'mailto:<MAIL>'.replace('<MAIL>', Buffer.from(c.email, "ascii").toString('hex'));
                        const address = c.street + ', ' + c.postal + ', '  + c.country;
                        addressNavigation = encodeURIComponent(address);
                        const find = 'https://www.google.se/maps/place/<FIND>'.replace('<FIND>', address);
                        main.push(
                            <ul key={0}>
                                <li>
                                    <strong>
                                        {o.label}
                                    </strong>
                                    <p>
                                        Orgnr: <a href={orgnr} target='_blank' rel='noopener noreferrer'>{o.orgnr}</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        {c.street}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        {c.postal}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        {c.country}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Phone: <a href={phone}>{c.phone}</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        E-mail: <a href={email}>{'Us'}</a>
                                    </p>
                                </li>
                                <li>
                                    <strong>
                                        <a href={find}>Find us...</a>
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
                            <li key={o.id} className={contact.some(c => c.office === o.id) ? '' : 'none'} data-id={o.id} onClick={this.toggleOffice}>
                                <a href='#'>
                                    <img className='office_image' src={m.src} alt={m.alt} title={m.title} />
                                    <div>
                                        <span>
                                            {o.label}
                                        </span>
                                    </div>
                                </a>
                            </li>
                        );
                    }
                });
            });

            office.forEach(o => {
                contact.forEach(c => {
                    if (o.id === c.office) {
                        multimedia.forEach(m => {
                            if (target === c.office && c.id === m.contact && m.box) {
                                contacts.push(
                                    <li key={c.id}>
                                        <div>
                                            <img className='contact_image' src={m.src} alt={m.alt} title={m.title} />
                                            <div>
                                                <span>
                                                    {c.forename + ' ' + c.surname + ', ' + c.title}
                                                </span>
                                                <span>
                                                    Phone: <a href={'tel:' + c.phone}>{c.phone}</a>
                                                </span>
                                                <span>
                                                    <a href={'mailto:' + Buffer.from(c.email, "ascii").toString('hex')}>Send E-mail</a>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                );
                            }
                        });
                    }
                });
            });

            children.push(
                <div key='0' className='childrenContainer'>
                    <div className='contact_summary'>
                        <div className='contact_full'>
                            { main }
                            {socials.length > 0 &&
                                <ul>
                                    <li>
                                        <strong>Follow us:</strong>
                                    </li>
                                    { socials }
                                </ul>
                            }
                        </div>
                        {!minimalContact && addressNavigation.length > 0 &&
                            <div className='contact_map'>
                                <Navigation address={addressNavigation} />
                            </div>
                        }
                    </div>
                    {!minimalContact && offices.length > 0 &&
                        <div className='contact_tree'>
                            <ul>
                                { offices }
                            </ul>
                            <ul>
                                { contacts }
                            </ul>
                        </div>
                    }
                </div>
            );

            return (
                <>
                    {minimalContact ? (
                        <>
                            { main }
                            {socials.length > 0 &&
                                <ul>
                                    <li>
                                        <strong>Follow us:</strong>
                                    </li>
                                    { socials }
                                </ul>
                            }
                        </>
                    ) : (
                        <>
                            <Content tag={tag} children={children} />
                        </>
                    )}
                </>
            );
        }
    }
}

export default Contact;
