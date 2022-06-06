import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterSessionComponent } from './consulter-session.component';

describe('ConsulterSessionComponent', () => {
  let component: ConsulterSessionComponent;
  let fixture: ComponentFixture<ConsulterSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
