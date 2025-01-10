import { useSlideshowComponentState } from '../../hooks/home';

import Heading from '../common/Heading';
import Slider from './Slider';

export default function Slideshow() {//TODO: Rename to Presenter and modify source code to be able to play video files...
    const { loading, level, label, collage } = useSlideshowComponentState();

    if (loading) {
        return (<div></div>); // Refactor to display loading animation...
    } else {
        const sources = [];
        collage.forEach(m => {
            sources.push({
                id: m.id,
                src: m.src,
                alt: m.alt,
                title: m.title
            });
        });

        return (
            <section>
                <Heading hidden={true} level={level} label={label} />
                <Slider sources={sources} />
            </section>
        );
    }
}
