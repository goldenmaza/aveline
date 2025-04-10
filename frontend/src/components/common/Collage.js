import { mediaConstant } from '../../utils/importConstantsUtil';
import {
    SOURCE_SRCSET_DEFAULT,
    SOURCE_TYPE_PRIMARY,
    SOURCE_SRCSET_PRIMARY,
    SOURCE_TYPE_SECONDARY,
    SOURCE_SRCSET_SECONDARY
} from '../../utils/constants/mediaKeys';

export default function Collage(props) {
    const { collection } = props;

    const collage = [];
    collection.forEach(c => {
        const source = c.src;
        const primary = source.replace(mediaConstant(SOURCE_SRCSET_DEFAULT), mediaConstant(SOURCE_SRCSET_PRIMARY));
        const secondary = source.replace(mediaConstant(SOURCE_SRCSET_DEFAULT), mediaConstant(SOURCE_SRCSET_SECONDARY));
        collage.push(
            <a key={c.id} href={c.src} target='_blank' rel='noopener noreferrer'>
                <picture>
                    <source type={mediaConstant(SOURCE_TYPE_PRIMARY)} srcSet={primary} />
                    <source type={mediaConstant(SOURCE_TYPE_SECONDARY)} srcSet={secondary} />
                    <img src={c.src} alt={c.alt} title={c.title} loading="lazy" />
                </picture>
                <div>
                    <span>
                        View source...
                    </span>
                </div>
            </a>
        );
    });

    return (
        <div className='collageContainer'>
            { collage }
        </div>
    );
}
