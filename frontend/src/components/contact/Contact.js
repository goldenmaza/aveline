import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from '../common/Heading';
import Content from '../common/Content';
import Navigation from './Navigation';

import {
    getContactDetails,
    toggleContactOffice
} from '../../redux/actions/contact';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.toggleOffice = this.toggleOffice.bind(this);
    }

    componentDidMount() {
        this.props.actions.getContactDetails();
    }

    toggleOffice(event) {
        event.preventDefault();

        const value = this.props.target === null ? Number(event.currentTarget.dataset.id) : null;
        this.props.actions.toggleContactOffice(value);
    }

    render() {
        const { loading, office, tag, minimalContact, target } = this.props;
        if (loading) {
            return (<div></div>); // Refactor to display loading animation...minimalContact
        } else {
            const main = [];
            const regionalOffices = [];
            const officeEmployees = [];
            const regionalSocials = [];
            const children = [];
            let addressNavigation = '';

                office.forEach(o => {
                    const thumbnail = o.thumbnail;
                    const employees = o.employees;
                    const socials = o.socials;
                    employees.forEach(e => {
                        if (o.main && e.main) {//TODO: Is it required for both main to be verified?
                            const orgnr = 'https://www.allabolag.se/<ORGNR>/bokslut'.replace('<ORGNR>', o.orgnr);
                            const phone = 'tel:<TEL>'.replace('<TEL>', e.phone);
                            const email = 'mailto:<MAIL>'.replace('<MAIL>', Buffer.from(e.email, "ascii").toString('hex'));
                            const address = e.street + ', ' + e.postal + ', '  + e.country;
                            addressNavigation = encodeURIComponent(address);
                            const find = 'https://www.google.se/maps/place/<FIND>'.replace('<FIND>', address);
                            main.push(
                                <ul key={0}>
                                    <li>
                                        <strong>{o.label}</strong>
                                        <p>Orgnr: <a href={orgnr} target='_blank' rel='noopener noreferrer'>{o.orgnr}</a></p>
                                    </li>
                                    <li>
                                        <p>{e.street}</p>
                                    </li>
                                    <li>
                                        <p>{e.postal}</p>
                                    </li>
                                    <li>
                                        <p>{e.country}</p>
                                    </li>
                                    <li>
                                        <p>Phone: <a href={phone}>{e.phone}</a></p>
                                    </li>
                                    <li>
                                        <p>E-mail: <a href={email}>{'Us'}</a></p>
                                    </li>
                                    <li>
                                        <strong><a href={find}>Find us...</a></strong>
                                    </li>
                                </ul>
                            );
                        }
                    });
                    if (thumbnail.box) {//TODO: Remove box and place condition with the query?
                        regionalOffices.push(
                            <li key={o.id} className={employees.some(e => e.office === o.id) ? '' : 'none'} data-id={o.id} onClick={this.toggleOffice}>
                                <a href='#'>
                                    <img className='office_image' src={thumbnail.src} alt={thumbnail.alt} title={thumbnail.title} />
                                    <div>
                                        <span>
                                            {o.label}
                                        </span>
                                    </div>
                                </a>
                            </li>
                        );
                    }
                    socials.forEach(s => {
                        regionalSocials.push(
                            <li key={s.id}>
                                <a href={s.url + s.label} target='_blank' rel='noopener noreferrer'>{s.media}</a>
                            </li>
                        );
                    });
                    if (o.id === target) {
                        employees.forEach(e => {
                            const portrait = e.portrait;
                            const profiles = e.profiles;
                            if (portrait.box) {//TODO: Remove box and place condition with the query?
                                const mailto = Buffer.from(e.email, "ascii").toString('hex');
                                const media = [];
                                profiles.forEach(p => {
                                    media.push(
                                        <a href={p.url + p.label} target='_blank' rel='noopener noreferrer'>{p.media}</a>
                                    );
                                });
                                officeEmployees.push(
                                    <li key={e.id}>
                                        <div>
                                            <img className='contact_image' src={portrait.src} alt={portrait.alt} title={portrait.title} />
                                            <div>
                                                <span>
                                                    {e.forename + ' ' + e.surname + ', ' + e.title}
                                                </span>
                                                <span>
                                                    Phone: <a href={'tel:' + e.phone}>{e.phone}</a>
                                                </span>
                                                <span>
                                                    <a href={'mailto:' + mailto}>Send E-mail</a>
                                                </span>
                                                {media.length > 0 &&
                                                    <span>
                                                        Social media: { media }
                                                    </span>
                                                }
                                            </div>
                                        </div>
                                    </li>
                                );
                            }
                        });
                    }
                });

            children.push(
                <div key='0' className='childrenContainer'>
                    <div className='contact_summary'>
                        <div className='contact_full'>
                            { main }
                            {regionalSocials.length > 0 &&
                                <ul>
                                    <li>
                                        <strong>Follow us:</strong>
                                    </li>
                                    { regionalSocials }
                                </ul>
                            }
                        </div>
                        {!minimalContact && addressNavigation.length > 0 &&
                            <div className='contact_map'>
                                <Navigation address={addressNavigation} />
                            </div>
                        }
                    </div>
                    {!minimalContact && regionalOffices.length > 0 &&
                        <div className='contact_tree'>
                            <ul>
                                { regionalOffices }
                            </ul>
                            <ul>
                                { officeEmployees }
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
                            {regionalSocials.length > 0 &&
                                <ul>
                                    <li>
                                        <strong>Follow us:</strong>
                                    </li>
                                    { regionalSocials }
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

const mapStateToProps = state => ({
    loading: state.contactComponent.loading,
    office: state.contactComponent.office,
    target: state.contactComponent.target
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
        getContactDetails,
        toggleContactOffice
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Contact));
