import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-old-input',
  standalone: true,
  template: ``,
  styles: ``
})
export class OldInputComponent {
  @Input('aliased-input') aliasedInput?: string;
  @Input('aliased-model') aliasedModel?: string;
  @Output('aliased-modelChange') readonly aliasedModelChange = new EventEmitter<string | undefined>();

  splitInput(): string[] {
    return (this.aliasedInput ?? '').trim().split(/\s+/);
  }
}
