import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

import { useHighlightsComponentState } from '../../hooks/home';

import Heading from '../common/Heading';

export default function Highlights(props) {
    const { loading, pages, level, label } = useHighlightsComponentState();

    if (loading) {
        return (<div></div>); // Refactor to display loading animation...
    } else {
        const highlights = [];
        pages.forEach(p => {
            const collage = p.collage;
            const to = '/page/' + p.route;
            collage.forEach(m => {
                highlights.push(
                    <li key={p.id + m.id}>
                        <NavLink to={to} title={p.title}>
                            <img className='highlights_image' src={m.src} alt={m.alt} title={m.title} loading="lazy" />
                            <div>
                                <span>{p.title}</span>
                            </div>
                        </NavLink>
                    </li>
                );
            });
        });
        pages.forEach(p => {
            const paragraphs = p.paragraphs;
            const to = '/page/' + p.route;
            paragraphs.forEach(c => {
                const collage = c.collage;
                collage.forEach(m => {
                    highlights.push(
                        <li key={p.id + c.id + m.id}>
                            <HashLink to={to+'#'+p.route+c.id} title={c.text}>
                                <img className='highlights_image' src={m.src} alt={m.alt} title={m.title} loading="lazy" />
                                <div>
                                    <span>{c.heading}</span>
                                </div>
                            </HashLink>
                        </li>
                    );
                });
            });
        });

        return (
            <section>
                <Heading hidden={true} level={level} label={label} />
                <nav>
                    <ul className='highlights_navigation'>
                        { highlights }
                    </ul>
                </nav>
            </section>
        );
    }
}
