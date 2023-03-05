import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingATourComponent } from './purchasing-a-tour.component';

describe('PurchasingATourComponent', () => {
  let component: PurchasingATourComponent;
  let fixture: ComponentFixture<PurchasingATourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasingATourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasingATourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
