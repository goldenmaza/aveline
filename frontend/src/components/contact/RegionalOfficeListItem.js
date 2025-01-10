export default function RegionalOfficeListItem(props) {
    const { o, employees, toggleOffice, thumbnail } = props;

    const classValue = employees.some(e => e.office === o.id) ? '' : 'none';
    return (
        <>
            <li key={o.id} className={classValue} data-none={classValue} data-id={o.id} onClick={toggleOffice}>
                <a href='/'>
                    <img className='office_image' src={thumbnail.src} alt={thumbnail.alt} title={thumbnail.title} loading="lazy" />
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
