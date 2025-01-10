import Navigation from './Navigation';

export default function ContactSummary(props) {
    const { main, regionalSocials, addressNavigation } = props;

    return (
        <>
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
        </>
    );
}
