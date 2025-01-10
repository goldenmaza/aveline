import { useHandlerComponentState } from '../../hooks/header';

import { toggleHandlerMenu } from '../../redux/actions/header';

import Menu from './Menu';

export default function Handler() {
    const { loading, toggled, collage } = useHandlerComponentState();

    if (loading) {
        return (<div></div>); // Refactor to display loading animation...
    } else {
        const handlerToggle = toggled ? 'handler_toggle active' : 'handler_toggle';

        return (
            <>
                <div className='nav_container'>
                    <a href='/'>
                        <img className='nav_logotype' src={collage[0].src} alt={collage[0].alt} title={collage[0].title} loading="lazy" />
                    </a>
                    <div className={handlerToggle} onClick={toggleHandlerMenu}>
                        <i></i><i></i><i></i>
                    </div>
                </div>
                <Menu />
            </>
        );
    }
}
