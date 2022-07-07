import { ComponentFixture, TestBed } from '@angular/core/testing';
import { increment } from '../state/counter.action';

import { CounterButtonComponent } from './counter-button.component';

describe('CounterButtonComponent', () => {
  let component: CounterButtonComponent;
  let fixture: ComponentFixture<CounterButtonComponent>;

 

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increment', () => {
    expect(component.onIncrement).toBeTruthy();
  });
});
