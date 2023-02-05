import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { within, userEvent } from '@storybook/testing-library';
import { CommonModule } from '@angular/common';

import Button from './button.component';
import Header from './header.component';
import Page from './page.component';

type Story = StoryObj<Page>;

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      declarations: [Button, Header],
      imports: [CommonModule],
    }),
  ],
} as Meta;

export const LoggedOut = {} ;

// More on interaction testing: https://storybook.js.org/docs/angular/writing-tests/interaction-testing
export const LoggedIn = {
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  //   await userEvent.click(loginButton);
  // }
};
