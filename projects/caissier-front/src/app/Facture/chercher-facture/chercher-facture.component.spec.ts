import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherFactureComponent } from './chercher-facture.component';

describe('ChercherFactureComponent', () => {
  let component: ChercherFactureComponent;
  let fixture: ComponentFixture<ChercherFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChercherFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercherFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
