import { useFooterComponentState } from '../../hooks/footer';

import { mediaConstant } from '../../utils/importConstantsUtil';
import {
    SOURCE_SRCSET_DEFAULT,
    SOURCE_TYPE_PRIMARY,
    SOURCE_SRCSET_PRIMARY,
    SOURCE_TYPE_SECONDARY,
    SOURCE_SRCSET_SECONDARY
} from '../../utils/constants/mediaKeys';

import Heading from '../common/Heading';
import Contact from '../contact/Contact';
import Sitemap from './Sitemap';
import Copyright from './Copyright';

export default function Footer() {
    const { loading, collage, level, label } = useFooterComponentState();

    if (loading) {
        return (<div></div>); // Refactor to display loading animation...
    } else {
        const source = collage[0].src;
        const primary = source.replace(mediaConstant(SOURCE_SRCSET_DEFAULT), mediaConstant(SOURCE_SRCSET_PRIMARY));
        const secondary = source.replace(mediaConstant(SOURCE_SRCSET_DEFAULT), mediaConstant(SOURCE_SRCSET_SECONDARY));
        return (
            <footer>
                <section>
                    <Heading hidden={true} level={level} label={label} />
                    <div className='logotype_minimal'>
                        <a href='/'>
                            <picture>
                                <source type={mediaConstant(SOURCE_TYPE_PRIMARY)} srcSet={primary} />
                                <source type={mediaConstant(SOURCE_TYPE_SECONDARY)} srcSet={secondary} />
                                <img className='footer_logotype' src={collage[0].src} alt={collage[0].alt} title={collage[0].title} loading="lazy" />
                            </picture>
                        </a>
                    </div>
                    <div className='container_minimal'>
                        <div className='contact_minimal'>
                            <Contact minimalContact={true} />
                        </div>
                        <div className='sitemap_minimal'>
                            <Sitemap />
                        </div>
                    </div>
                    <div className='copyright_minimal'>
                        <Copyright />
                    </div>
                </section>
            </footer>
        );
    }
}
