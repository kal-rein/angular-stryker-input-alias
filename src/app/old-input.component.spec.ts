import { Component, input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { OldInputComponent } from './old-input.component';

@Component({
  standalone: true,
  imports: [OldInputComponent],
  template: `<app-old-input [aliased-input]="value()" />`,
})
class TestComponent {
  value = input('');
}

describe('OldInputComponent', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [TestComponent, OldInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should receive input using the alias', () => {
    const oldInputComponent = fixture.debugElement.query(
      By.css('app-old-input'),
    ).componentInstance as OldInputComponent;

    expect(oldInputComponent.aliasedInput).toEqual('');

    fixture.componentRef.setInput('value', 'new value');
    fixture.detectChanges();

    expect(oldInputComponent.aliasedInput).toEqual('new value');
  });
});
