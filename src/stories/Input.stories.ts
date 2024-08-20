import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from '@shared/components/input/input.component';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<InputComponent> = {
  title: 'Shared/Input',
  component: InputComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args: InputComponent) => ({ props: { ...args, label: 'Input' } }),
  argTypes: {
    label: {
      control: 'text'
    }
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, MatInputModule, FormsModule, ReactiveFormsModule]
    })
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Input: Story = {};
