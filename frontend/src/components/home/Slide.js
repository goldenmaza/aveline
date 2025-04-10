import { useSliderComponentState } from '../../hooks/home';

import { mediaConstant } from '../../utils/importConstantsUtil';
import {
    SOURCE_SRCSET_DEFAULT,
    SOURCE_TYPE_PRIMARY,
    SOURCE_SRCSET_PRIMARY,
    SOURCE_TYPE_SECONDARY,
    SOURCE_SRCSET_SECONDARY
} from '../../utils/constants/mediaKeys';

export default function Slide(props) {
    const { loading, current } = useSliderComponentState(); // TODO: Refactor to use Slide's state...

    if (loading) {
        return (<div></div>); // Refactor to display loading animation...
    } else {
        const source = current.src;
        const primary = source.replace(mediaConstant(SOURCE_SRCSET_DEFAULT), mediaConstant(SOURCE_SRCSET_PRIMARY));
        const secondary = source.replace(mediaConstant(SOURCE_SRCSET_DEFAULT), mediaConstant(SOURCE_SRCSET_SECONDARY));
        return (
            <picture>
                <source type={mediaConstant(SOURCE_TYPE_PRIMARY)} srcSet={primary} />
                <source type={mediaConstant(SOURCE_TYPE_SECONDARY)} srcSet={secondary} />
                <img src={current.src} alt={current.alt} title={current.title} loading="lazy" />
            </picture>
        );
    }
}
