import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-new-input',
  standalone: true,
  template: ``,
  styles: ``
})
export class NewInputComponent {
  aliasedInput = input<string | undefined>(undefined, { alias: 'aliased-input' });
  aliasedModel = model<string | undefined>(undefined, { alias: 'aliased-model' });

  splitInput(): string[] {
    return (this.aliasedInput() ?? '').trim().split(/\s+/);
  }
}
