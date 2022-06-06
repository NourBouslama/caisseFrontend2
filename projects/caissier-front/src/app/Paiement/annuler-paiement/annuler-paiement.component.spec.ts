import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulerPaiementComponent } from './annuler-paiement.component';

describe('AnnulerPaiementComponent', () => {
  let component: AnnulerPaiementComponent;
  let fixture: ComponentFixture<AnnulerPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnulerPaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnulerPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
