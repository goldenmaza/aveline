export default function MainOfficeList(props) {
    const { o, e } = props;

    const orgnr = 'https://www.allabolag.se/<ORGNR>/bokslut'.replace('<ORGNR>', o.orgnr);
    const phone = 'tel:<TEL>'.replace('<TEL>', e.phone);
    const email = 'mailto:<MAIL>'.replace('<MAIL>', Buffer.from(e.email, "ascii").toString('hex'));
    const address = e.street + ', ' + e.postal + ', '  + e.country;
    const find = 'https://www.google.se/maps/place/<FIND>'.replace('<FIND>', address);
    return (
        <>
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
        </>
    );
}
