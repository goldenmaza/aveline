import React from 'react';
import Heading from '../../../../components/common/Heading';

// TODO: Refactor to a central location for both component tests and storybook stories...
const propLevel = 'h1';
const propLabel = 'Example';

export const HeadingComponent = () => <Heading hidden={false} level={propLevel} label={propLabel} />;

export default {
    title: '/Common',
    component: HeadingComponent,
    decorators: [(Story) => <div class='storybook'><Story/></div>]
}
