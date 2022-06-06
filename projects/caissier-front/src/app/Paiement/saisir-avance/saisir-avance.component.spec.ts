import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisirAvanceComponent } from './saisir-avance.component';

describe('SaisirAvanceComponent', () => {
  let component: SaisirAvanceComponent;
  let fixture: ComponentFixture<SaisirAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisirAvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisirAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
