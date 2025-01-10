import { NavLink } from 'react-router-dom';

import { useMenuComponentState } from '../../hooks/header';

import { toggleHandlerMenu } from '../../redux/actions/header';

export default function Menu () {
    const { loading, toggled, pages } = useMenuComponentState();

    if (loading) {
        return (<div></div>); // Refactor to display loading animation...
    } else {
        const handlerNavigation = toggled ? 'handler_navigation active' : 'handler_navigation';

        const items = [];
        pages.forEach(p => {
            const to = '/page/' + p.label.toLowerCase().replace('å', 'a').replace('ä', 'a').replace('ö', 'o');
            items.push(
                <li key={p.id}>
                    <NavLink to={to} className={'active'} onClick={toggleHandlerMenu} title={p.title}>
                        {p.label}
                    </NavLink>
                </li>
            );
        });

        return (
            <ul className={handlerNavigation}>
                {items}
            </ul>
        );
    }
}
