import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFullComponent } from './checkout-full.component';

describe('CheckoutFullComponent', () => {
  let component: CheckoutFullComponent;
  let fixture: ComponentFixture<CheckoutFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
