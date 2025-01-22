import Heading from './Heading';
import Collage from './Collage';

export default function ContentContainer(props) {
    const { route, paragraphs, level } = props;

    function createContentContainer(route, paragraphs, level) {
        const id = route + 'p' + paragraphs.id;
        const collage = paragraphs.collage;
        const key = Object.keys(paragraphs).find(key => key.toLowerCase().includes('paragraphs'));
        const subLevel = level.slice(0,1) + (parseInt(level.slice(level.length - 1)) + 1);

        return (
            <div key={id} className='contentContainer'>
                <Heading level={subLevel} label={paragraphs.heading} />
                <p>{paragraphs.text}</p>
                {collage.length > 0 &&
                    <Collage collection={collage.slice()} />
                }
                {paragraphs[key] !== undefined &&
                    paragraphs[key].map((p, k) => createContentContainer(route, p, subLevel))
                }
            </div>
        );
    }

    const contentContainers = createContentContainer(route, paragraphs, level);
    return (
        <>
            { contentContainers }
        </>
    );
}
