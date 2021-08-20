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
    <button
      [lib-button]="color"
      >
      Click me
    </button>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'blue'
}
export const Gray = Template.bind({});
Gray.args = {
  color: 'gray'
}
export const Red = Template.bind({});
Red.args = {
  color: 'red'
}
export const Yellow = Template.bind({});
Yellow.args = {
  color: 'yellow'
}
export const Green = Template.bind({});
Green.args = {
  color: 'green'
}
export const White = Template.bind({});
White.args = {
  color: 'white'
}
export const Black = Template.bind({});
Black.args = {
  color: 'black'
}
