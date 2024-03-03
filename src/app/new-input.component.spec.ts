import { Component, input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NewInputComponent } from './new-input.component';

@Component({
  standalone: true,
  imports: [NewInputComponent],
  template: `<app-new-input [aliased-input]="value()" />`,
})
class TestComponent {
  value = input('');
}

describe('NewInputComponent', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [TestComponent, NewInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should receive input using the alias', () => {
    const oldInputComponent = fixture.debugElement.query(
      By.css('app-new-input'),
    ).componentInstance as NewInputComponent;

    expect(oldInputComponent.aliasedInput()).toEqual('');

    fixture.componentRef.setInput('value', 'new value');
    fixture.detectChanges();

    expect(oldInputComponent.aliasedInput()).toEqual('new value');
  });
});
