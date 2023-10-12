import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculMonnaieComponent } from './calcul-monnaie.component';

describe('CalculMonnaieComponent', () => {
  let component: CalculMonnaieComponent;
  let fixture: ComponentFixture<CalculMonnaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculMonnaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculMonnaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
