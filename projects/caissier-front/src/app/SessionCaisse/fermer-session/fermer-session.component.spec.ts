import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FermerSessionComponent } from './fermer-session.component';

describe('FermerSessionComponent', () => {
  let component: FermerSessionComponent;
  let fixture: ComponentFixture<FermerSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FermerSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FermerSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
