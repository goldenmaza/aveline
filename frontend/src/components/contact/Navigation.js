export default function Navigation(props) {
    const { address } = props;

    const src = 'https://maps.google.com/maps?q=' + address + '&t=k&z=13&ie=UTF8&iwloc=&output=embed';
    return (
        <iframe src={src} tabIndex='-1' title='Navigational map to find our address...'></iframe>
    );
}
