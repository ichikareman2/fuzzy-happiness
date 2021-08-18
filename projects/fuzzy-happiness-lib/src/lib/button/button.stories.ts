// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'test/Button2',
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
  // component: ButtonComponent,
  excludeStories: /.*Data$/
} as Meta;

export const actionsData = {
  onClick: action('onClick'),
}

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    ...args,
    onClick: actionsData.onClick
  },
  template: `
    <lib-button (click)="onClick($event)">Click me</lib-button>
  `,
});

export const Normal = Template.bind({});
Normal.args = {
}
