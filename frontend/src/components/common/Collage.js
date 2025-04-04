export default function Collage(props) {
    const { collection } = props;

    const collage = [];
    collection.forEach(c => {
        const source = c.src;
        const primary = source.replace(import.meta.env.VITE_APP_SOURCE_SRCSET_DEFAULT, import.meta.env.VITE_APP_SOURCE_SRCSET_PRIMARY);
        const secondary = source.replace(import.meta.env.VITE_APP_SOURCE_SRCSET_DEFAULT, import.meta.env.VITE_APP_SOURCE_SRCSET_SECONDARY);
        collage.push(
            <a key={c.id} href={c.src} target='_blank' rel='noopener noreferrer'>
                <picture>
                    <source type={import.meta.env.VITE_APP_SOURCE_TYPE_PRIMARY} srcSet={primary} />
                    <source type={import.meta.env.VITE_APP_SOURCE_TYPE_SECONDARY} srcSet={secondary} />
                    <img src={c.src} alt={c.alt} title={c.title} loading="lazy" />
                </picture>
                <div>
                    <span>
                        View source...
                    </span>
                </div>
            </a>
        );
    });

    return (
        <div className='collageContainer'>
            { collage }
        </div>
    );
}
