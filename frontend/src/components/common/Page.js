import Heading from '../common/Heading';
import ContentContainer from './ContentContainer';

export default function Page(props) {
    const { pages, route, level, label, children } = props;

    const sections = [];
    if (route !== undefined) { // TODO: Remove...
        pages.forEach(page => {
            if (page.route === route) { // Verify which page, route, the user has chosen to view...
                const paragraphs = page.paragraphs;
                paragraphs.forEach(paragraph => {
                    const id = page.route + paragraph.id;
                    sections.push(
                        <section key={id}>
                            <ContentContainer route={route} paragraphs={paragraph} level={level} />
                        </section>
                    );
                });
            }
        });
    }

    return (
        <>
            {sections.length > 0 &&
                <section key={route} className='contentContainer'>
                    <Heading hidden={true} level={level} label={label} />
                    { sections }
                </section>
            }
            {
                children
            }
        </>
    );
}
