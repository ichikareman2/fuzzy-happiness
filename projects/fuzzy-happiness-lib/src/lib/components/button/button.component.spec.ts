import { ButtonComponent } from './button.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator'
import { Component } from '@angular/core';

@Component({
  template: `
    <button lib-button="blue">Click me!</button>
  `
})
class TestComponent {}

describe('ButtonComponent', () => {
  let spectator: Spectator<TestComponent>;
  const createComponent = createComponentFactory({
    component: TestComponent,
    declarations: [ButtonComponent]
  });
  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.query('button')).toBeTruthy();
  });
  it('should have `bg-blue-600` class', () => {
    expect(spectator.query('button')).toHaveClass('bg-blue-600');
  });
});
