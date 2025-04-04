import DOMPurify from 'dompurify';

export default function OfficeEmployeeListItem(props) {
    const { e, profiles, portrait } = props;

    const media = [];
    const source = portrait.src;
    const primary = source.replace(import.meta.env.VITE_APP_SOURCE_SRCSET_DEFAULT, import.meta.env.VITE_APP_SOURCE_SRCSET_PRIMARY);
    const secondary = source.replace(import.meta.env.VITE_APP_SOURCE_SRCSET_DEFAULT, import.meta.env.VITE_APP_SOURCE_SRCSET_SECONDARY);
    const mailto = Array.from(DOMPurify.sanitize(e.email)).toString('hex');
    profiles.forEach(p => {
        media.push(
            <a key={p.id} href={p.url + p.label} target='_blank' rel='noopener noreferrer'>{p.media}</a>
        );
    });
    return (
        <>
            <li key={e.id}>
                <div>
                    <picture>
                        <source type={import.meta.env.VITE_APP_SOURCE_TYPE_PRIMARY} srcSet={primary} />
                        <source type={import.meta.env.VITE_APP_SOURCE_TYPE_SECONDARY} srcSet={secondary} />
                        <img className='contact_image' src={portrait.src} alt={portrait.alt} title={portrait.title} loading="lazy" />
                    </picture>
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
