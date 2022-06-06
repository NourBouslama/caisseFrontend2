import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterCaissierComponent } from './consulter-caissier.component';

describe('ConsulterCaissierComponent', () => {
  let component: ConsulterCaissierComponent;
  let fixture: ComponentFixture<ConsulterCaissierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterCaissierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterCaissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
