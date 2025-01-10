export default function OfficeEmployeeListItem(props) {
    const { e, profiles, portrait } = props;

    const media = [];
    const mailto = Buffer.from(e.email, "ascii").toString('hex');
    profiles.forEach(p => {
        media.push(
            <a key={p.id} href={p.url + p.label} target='_blank' rel='noopener noreferrer'>{p.media}</a>
        );
    });
    return (
        <>
            <li key={e.id}>
                <div>
                    <img className='contact_image' src={portrait.src} alt={portrait.alt} title={portrait.title} loading="lazy" />
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
        </>
    );
}
