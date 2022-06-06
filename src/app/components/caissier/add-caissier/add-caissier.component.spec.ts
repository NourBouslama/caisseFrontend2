import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaissierComponent } from './add-caissier.component';

describe('AddCaissierComponent', () => {
  let component: AddCaissierComponent;
  let fixture: ComponentFixture<AddCaissierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCaissierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCaissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
