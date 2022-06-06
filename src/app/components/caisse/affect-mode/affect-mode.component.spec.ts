import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectModeComponent } from './affect-mode.component';

describe('AffectModeComponent', () => {
  let component: AffectModeComponent;
  let fixture: ComponentFixture<AffectModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
