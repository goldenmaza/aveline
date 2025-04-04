import { useSliderComponentState } from '../../hooks/home';

export default function Slide(props) {
    const { loading, current } = useSliderComponentState(); // TODO: Refactor to use Slide's state...

    if (loading) {
        return (<div></div>); // Refactor to display loading animation...
    } else {
        const source = current.src;
        const primary = source.replace(import.meta.env.VITE_APP_SOURCE_SRCSET_DEFAULT, import.meta.env.VITE_APP_SOURCE_SRCSET_PRIMARY);
        const secondary = source.replace(import.meta.env.VITE_APP_SOURCE_SRCSET_DEFAULT, import.meta.env.VITE_APP_SOURCE_SRCSET_SECONDARY);
        return (
            <picture>
                <source type={import.meta.env.VITE_APP_SOURCE_TYPE_PRIMARY} srcSet={primary} />
                <source type={import.meta.env.VITE_APP_SOURCE_TYPE_SECONDARY} srcSet={secondary} />
                <img src={current.src} alt={current.alt} title={current.title} loading="lazy" />
            </picture>
        );
    }
}
