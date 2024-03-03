import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-old-input',
  standalone: true,
  template: ``,
  styles: ``
})
export class OldInputComponent {
  @Input('aliased-input') aliasedInput?: string;

  splitInput(): string[] {
    return (this.aliasedInput ?? '').trim().split(/\s+/);
  }
}
