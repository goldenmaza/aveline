export default function RegionalOfficeListItem(props) {
    const { o, employees, toggleOffice, thumbnail } = props;

    const classValue = employees.some(e => e.office === o.id) ? '' : 'none';
    const source = thumbnail.src;
    const primary = source.replace(import.meta.env.VITE_APP_SOURCE_SRCSET_DEFAULT, import.meta.env.VITE_APP_SOURCE_SRCSET_PRIMARY);
    const secondary = source.replace(import.meta.env.VITE_APP_SOURCE_SRCSET_DEFAULT, import.meta.env.VITE_APP_SOURCE_SRCSET_SECONDARY);
    return (
        <>
            <li key={o.id} className={classValue} data-none={classValue} data-id={o.id} onClick={toggleOffice}>
                <a href='/'>
                    <picture>
                        <source type={import.meta.env.VITE_APP_SOURCE_TYPE_PRIMARY} srcSet={primary} />
                        <source type={import.meta.env.VITE_APP_SOURCE_TYPE_SECONDARY} srcSet={secondary} />
                        <img className='office_image' src={thumbnail.src} alt={thumbnail.alt} title={thumbnail.title} loading="lazy" />
                    </picture>
                    <div>
                        <span>
                            {o.label}
                        </span>
                    </div>
                </a>
            </li>
        </>
    );
}
