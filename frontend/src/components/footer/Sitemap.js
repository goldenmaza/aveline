import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { useSitemapComponentState } from '../../hooks/footer';

import Heading from '../common/Heading';

export default function Sitemap() {
    const { loading, pages, level, label } = useSitemapComponentState();

    if (loading) {
        return (<div></div>); // Refactor to display loading animation...
    } else {
        const lists = [];
        let items = [];
        pages.forEach(p => {
            if (p.sitemap) {
                const paragraphs = p.paragraphs;
                const p_label = p.label.toLowerCase().replace('å', 'a').replace('ä', 'a').replace('ö', 'o');
                const to = '/page/' + p_label;
                items.push(
                    <li key={'li' + p.id} className='bold'>
                        <NavLink to={to} title={p.title}>
                            {p.label}
                        </NavLink>
                    </li>
                );
                paragraphs.forEach(c => {
                    if (p.id === c.page && !c.sitemap) {
                        items.push(
                            <li key={c.id}>
                                <HashLink to={to + '#' + p_label + c.id} title={c.heading}>
                                    {c.heading}
                                </HashLink>
                            </li>
                        );
                    }
                });
                lists.push(
                    <ul key={'ul' + p.id}>
                        {items}
                    </ul>
                );
                items = [];
            }
        });

        return (
            <>
                <nav className='sitemap_navigation' aria-label='sitemap navigation'>
                    <Heading hidden={true} level={level} label={label} />
                    {lists}
                </nav>
            </>
        );
    }
}
