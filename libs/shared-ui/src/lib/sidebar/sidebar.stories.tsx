import type { Meta } from '@storybook/react';
import { Sidebar } from './sidebar';

const Story: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'Sidebar',
};
export default Story;

export const Primary = {
  args: {
    text: '',
  },
};
