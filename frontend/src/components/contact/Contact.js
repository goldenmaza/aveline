import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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

        const id = event.currentTarget.dataset.none === '' ? Number(event.currentTarget.dataset.id) : null;
        this.props.actions.toggleContactOffice(id);
    }

    render() {
        const { loading, offices, route, minimalContact, target } = this.props;
        if (loading) {
            return (<div></div>); // Refactor to display loading animation...minimalContact
        } else {
            const main = [];
            const regionalOffices = [];
            const officeEmployees = [];
            const regionalSocials = [];
            const children = [];
            let addressNavigation = '';

            offices.forEach(o => {
                const thumbnail = o.thumbnail;
                const employees = o.employees;
                const socials = o.socials;
                employees.forEach(e => {
                    if (o.main && e.main) {
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
                                    {o.orgnr !== '' &&
                                        <p>Orgnr: <a href={orgnr} target='_blank' rel='noopener noreferrer'>{o.orgnr}</a></p>
                                    }
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
                if (thumbnail !== undefined) {
                    const classValue = employees.some(e => e.office === o.id) ? '' : 'none';
                    regionalOffices.push(
                        <li key={o.id} className={classValue} data-none={classValue} data-id={o.id} onClick={this.toggleOffice}>
                            <a href='#'>//TOOD: Change to a button...
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
                        const portrait = e.portraits.length > 0 ? e.portraits[0] : null;
                        const profiles = e.profiles;
                        if (portrait !== null) {
                            const mailto = Buffer.from(e.email, "ascii").toString('hex');
                            const media = [];
                            profiles.forEach(p => {
                                media.push(
                                    <a key={p.id} href={p.url + p.label} target='_blank' rel='noopener noreferrer'>{p.media}</a>
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
                        {addressNavigation.length > 0 &&
                            <div className='contact_map'>
                                <Navigation address={addressNavigation} />
                            </div>
                        }
                    </div>
                    {regionalOffices.length > 0 &&
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
                            <Content route={route} children={children} />
                        </>
                    )}
                </>
            );
        }
    }
}

const mapStateToProps = state => ({
    loading: state.contactComponent.loading,
    offices: state.contactComponent.offices,
    target: state.contactComponent.target
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getContactDetails,
        toggleContactOffice
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Contact));
