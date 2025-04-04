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
                const source = m.src;
                const primary = source.replace(import.meta.env.VITE_APP_SOURCE_SRCSET_DEFAULT, import.meta.env.VITE_APP_SOURCE_SRCSET_PRIMARY);
                const secondary = source.replace(import.meta.env.VITE_APP_SOURCE_SRCSET_DEFAULT, import.meta.env.VITE_APP_SOURCE_SRCSET_SECONDARY);
                highlights.push(
                    <li key={p.id + m.id}>
                        <NavLink to={to} title={p.title}>
                            <picture>
                                <source type={import.meta.env.VITE_APP_SOURCE_TYPE_PRIMARY} srcSet={primary} />
                                <source type={import.meta.env.VITE_APP_SOURCE_TYPE_SECONDARY} srcSet={secondary} />
                                <img className='highlights_image' src={m.src} alt={m.alt} title={m.title} loading="lazy" />
                            </picture>
                            <div>
                                <span>{p.title}</span>
                            </div>
                        </NavLink>
                    </li>
                );
            });
        });
        pages.forEach(p => {
            const paragraphs = Array.isArray(p.paragraphs) ? p.paragraphs : [];
            const to = '/page/' + p.route;
            paragraphs.forEach(c => {
                const collage = c.collage;
                collage.forEach(m => {
                    const source = m.src;
                    const primary = source.replace(import.meta.env.VITE_APP_SOURCE_SRCSET_DEFAULT, import.meta.env.VITE_APP_SOURCE_SRCSET_PRIMARY);
                    const secondary = source.replace(import.meta.env.VITE_APP_SOURCE_SRCSET_DEFAULT, import.meta.env.VITE_APP_SOURCE_SRCSET_SECONDARY);
                    highlights.push(
                        <li key={p.id + c.id + m.id}>
                            <HashLink to={to+'#'+p.route+c.id} title={c.text}>
                                <picture>
                                    <source type={import.meta.env.VITE_APP_SOURCE_TYPE_PRIMARY} srcSet={primary} />
                                    <source type={import.meta.env.VITE_APP_SOURCE_TYPE_SECONDARY} srcSet={secondary} />
                                    <img className='highlights_image' src={m.src} alt={m.alt} title={m.title} loading="lazy" />
                                </picture>
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
