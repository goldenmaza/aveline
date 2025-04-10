import DOMPurify from 'dompurify';

import { mediaConstant } from '../../utils/importConstantsUtil';
import {
    SOURCE_SRCSET_DEFAULT,
    SOURCE_TYPE_PRIMARY,
    SOURCE_SRCSET_PRIMARY,
    SOURCE_TYPE_SECONDARY,
    SOURCE_SRCSET_SECONDARY
} from '../../utils/constants/mediaKeys';

export default function OfficeEmployeeListItem(props) {
    const { e, profiles, portrait } = props;

    const media = [];
    const source = portrait.src;
    const primary = source.replace(mediaConstant(SOURCE_SRCSET_DEFAULT), mediaConstant(SOURCE_SRCSET_PRIMARY));
    const secondary = source.replace(mediaConstant(SOURCE_SRCSET_DEFAULT), mediaConstant(SOURCE_SRCSET_SECONDARY));
    const mailto = Array.from(DOMPurify.sanitize(e.email)).toString('hex');
    profiles.forEach(p => {
        media.push(
            <a key={p.id} href={p.url + p.label} target='_blank' rel='noopener noreferrer'>{p.media}</a>
        );
    });
    return (
        <>
            <li key={e.id}>
                <div>
                    <picture>
                        <source type={mediaConstant(SOURCE_TYPE_PRIMARY)} srcSet={primary} />
                        <source type={mediaConstant(SOURCE_TYPE_SECONDARY)} srcSet={secondary} />
                        <img className='contact_image' src={portrait.src} alt={portrait.alt} title={portrait.title} loading="lazy" />
                    </picture>
                    <div>
                        <span>
                            {e.forename + ' ' + e.surname + ', ' + e.title}
                        </span>
                        <span>
                            Phone: <a href={'tel:' + e.phone}>{e.phone}</a>
                        </span>
                        <span>
                            <a href={'mailto:' + mailto}>Send E-mail</a>
                        </span>
                        {media.length > 0 &&
                            <span>
                                Social media: { media }
                            </span>
                        }
                    </div>
                </div>
            </li>
        </>
    );
}
