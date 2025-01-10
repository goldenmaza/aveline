import { useContactComponentState } from '../../hooks/contact';

import { toggleContactOffice } from '../../redux/actions/contact';

import MainOfficeList from './MainOfficeList';
import RegionalOfficeListItem from './RegionalOfficeListItem';
import OfficeEmployeeListItem from './OfficeEmployeeListItem';
import ContactSummary from './ContactSummary';
import OfficeSummary from './OfficeSummary';

import Heading from '../common/Heading';
import Page from '../common/Page';

export default function Contact(props) {
    const {
        loading, offices, officeIdentifier,
        officeLevel, officeLabel, employeeLevel, employeeLabel
    } = useContactComponentState();
    const { minimalContact, route } = props;

    function toggleOffice(event) {
        event.preventDefault();

        const id = event.currentTarget.dataset.none === '' ? Number(event.currentTarget.dataset.id) : null;
        toggleContactOffice(id);
    }

    if (loading) {
        return (<div></div>); // Refactor to display loading animation...
    } else {
        const main = [];
        const officeEmployees = [];
        const regionalOffices = [];
        const regionalSocials = [];
        const children = [];
        let addressNavigation = '';

        offices.forEach(o => {
            const thumbnail = o.thumbnail;
            const employees = o.employees;
            const socials = o.socials;
            employees.forEach(e => {
                if (o.main && e.main) {
                    addressNavigation = encodeURIComponent(e.street + ', ' + e.postal + ', '  + e.country);
                    main.push(
                        <MainOfficeList key={e.id} o={o} e={e} />
                    );
                }

                if (o.id === officeIdentifier) {
                    const profiles = e.profiles;
                    const portrait = e.portraits.length > 0 ? e.portraits[0] : null;
                    if (portrait !== null && profiles !== null) {
                        officeEmployees.push(
                            <OfficeEmployeeListItem key={o.id} e={e} profiles={profiles} portrait={portrait} />
                        );
                    }
                }
            });

            if (thumbnail !== undefined) {
                regionalOffices.push(
                    <RegionalOfficeListItem key={o.id} o={o} employees={employees} toggleOffice={toggleOffice} thumbnail={thumbnail} />
                );
            }

            socials.forEach(s => {
                regionalSocials.push(
                    <li key={s.id}>
                        <a href={s.url + s.label} target='_blank' rel='noopener noreferrer'>{s.media}</a>
                    </li>
                );
            });
        });

        children.push(
            <>
                <section>
                    <Heading hidden={true} level={officeLevel} label={officeLabel} />
                    <div key='0' className='childrenContainer'>
                        { <ContactSummary main={main} regionalSocials={regionalSocials} addressNavigation={addressNavigation} /> }
                    </div>
                </section>
                <section>
                    <Heading hidden={true} level={employeeLevel} label={employeeLabel} />
                    <div key='1' className='childrenContainer'>
                        { <OfficeSummary regionalOffices={regionalOffices} officeEmployees={officeEmployees} /> }
                    </div>
                </section>
            </>
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
                        <Page route={route} children={children} />
                    </>
                )}
            </>
        );
    }
}
