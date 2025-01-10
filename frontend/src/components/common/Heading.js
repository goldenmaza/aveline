export default function Heading(props) {
    const { level, label, hidden } = props;

    const allowedHeadings = ['h1', 'h2', 'h3', 'h4', 'h5']; // Todo: Refactor to load allowed from ENV...
    const Heading = allowedHeadings.includes(level) ? level : 'p';
    return (
        <Heading className={hidden ? 'hidden' : ''}>
            {label}
        </Heading>
    );
}
