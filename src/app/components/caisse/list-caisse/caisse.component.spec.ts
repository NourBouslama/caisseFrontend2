import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerCaisseComponent } from './listerCaisse.component';

describe('ListCaissierComponent', () => {
  let component: ListerCaisseComponent;
  let fixture: ComponentFixture<ListerCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerCaisseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
