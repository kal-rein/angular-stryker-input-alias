import { Component, input } from '@angular/core';

@Component({
  selector: 'app-new-input',
  standalone: true,
  template: ``,
  styles: ``
})
export class NewInputComponent {
  aliasedInput = input<string | undefined>(undefined, { alias: 'aliased-input' });

  splitInput(): string[] {
    return (this.aliasedInput() ?? '').trim().split(/\s+/);
  }
}
