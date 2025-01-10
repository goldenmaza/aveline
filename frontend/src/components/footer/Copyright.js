import { useCopyrightComponentState } from '../../hooks/footer';

import Heading from '../common/Heading';

export default function Copyright() {
    const { created, level, label, name, link, by } = useCopyrightComponentState();

    const year = new Date().getFullYear();
    const copy = year > created ? created + ' - ' + year : year;
    return (// TODO: Refactor '/' && 'noopener noreferrer' to env...
        <>
            <Heading hidden={true} level={level} label={label} />
            <div className='footer_copyright'>
                <strong>&copy; {copy} <a href='/'>{name}</a>. All rights reserved.</strong>
            </div>
            <div className='footer_by'>
                <span>by <a href={link} target='_blank' rel='noopener noreferrer'>{by}</a></span>
            </div>
        </>
    );
}
