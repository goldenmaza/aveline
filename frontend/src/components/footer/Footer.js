import { useFooterComponentState } from '../../hooks/footer';

import Heading from '../common/Heading';
import Contact from '../contact/Contact';
import Sitemap from './Sitemap';
import Copyright from './Copyright';

export default function Footer() {
    const { loading, collage, level, label } = useFooterComponentState();

    if (loading) {
        return (<div></div>); // Refactor to display loading animation...
    } else {
        return (
            <footer>
                <section>
                    <Heading hidden={true} level={level} label={label} />
                    <div className='logotype_minimal'>
                        <a href='/'>
                            <img className='footer_logotype' src={collage[0].src} alt={collage[0].alt} title={collage[0].title} loading="lazy" />
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
