import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterCaisseComponent } from './consulter-caisse.component';

describe('ConsulterCaisseComponent', () => {
  let component: ConsulterCaisseComponent;
  let fixture: ComponentFixture<ConsulterCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterCaisseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
