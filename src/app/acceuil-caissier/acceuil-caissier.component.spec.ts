import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilCaissierComponent } from './acceuil-caissier.component';

describe('AcceuilCaissierComponent', () => {
  let component: AcceuilCaissierComponent;
  let fixture: ComponentFixture<AcceuilCaissierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilCaissierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilCaissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
