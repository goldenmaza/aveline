import { useHandlerComponentState } from '../../hooks/header';

import { toggleHandlerMenu } from '../../redux/actions/header';

import { mediaConstant } from '../../utils/importConstantsUtil';
import {
    SOURCE_SRCSET_DEFAULT,
    SOURCE_TYPE_PRIMARY,
    SOURCE_SRCSET_PRIMARY,
    SOURCE_TYPE_SECONDARY,
    SOURCE_SRCSET_SECONDARY
} from '../../utils/constants/mediaKeys';

import Menu from './Menu';

export default function Handler() {
    const { loading, toggled, collage } = useHandlerComponentState();

    if (loading) {
        return (<div></div>); // Refactor to display loading animation...
    } else {
        const handlerToggle = toggled ? 'handler_toggle active' : 'handler_toggle';
        const source = collage[0].src;
        const primary = source.replace(mediaConstant(SOURCE_SRCSET_DEFAULT), mediaConstant(SOURCE_SRCSET_PRIMARY));
        const secondary = source.replace(mediaConstant(SOURCE_SRCSET_DEFAULT), mediaConstant(SOURCE_SRCSET_SECONDARY));

        return (
            <>
                <div className='nav_container'>
                    <a href='/'>
                        <picture>
                            <source type={mediaConstant(SOURCE_TYPE_PRIMARY)} srcSet={primary} />
                            <source type={mediaConstant(SOURCE_TYPE_SECONDARY)} srcSet={secondary} />
                            <img className='nav_logotype' src={collage[0].src} alt={collage[0].alt} title={collage[0].title} loading="lazy" />
                        </picture>
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
