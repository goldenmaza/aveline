export default function Collage(props) {
    const { collection } = props;

    const collage = [];
    collection.forEach(c => {
        collage.push(
            <a key={c.id} href={c.src} target='_blank' rel='noopener noreferrer'>
                <img src={c.src} alt={c.alt} title={c.title} loading="lazy" />
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
