import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCaissierComponent } from './list-caissier.component';

describe('ListCaissierComponent', () => {
  let component: ListCaissierComponent;
  let fixture: ComponentFixture<ListCaissierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCaissierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCaissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
