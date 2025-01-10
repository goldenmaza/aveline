import { useSliderComponentState } from '../../hooks/home';

export default function Slide(props) {
    const { loading, current } = useSliderComponentState(); // TODO: Refactor to use Slide's state...

    if (loading) {
        return (<div></div>); // Refactor to display loading animation...
    } else {
        return (
            <img src={current.src} alt={current.alt} title={current.title} loading="lazy" />
        );
    }
}
