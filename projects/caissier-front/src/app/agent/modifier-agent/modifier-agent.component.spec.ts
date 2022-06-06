import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAgentComponent } from './modifier-agent.component';

describe('ModifierAgentComponent', () => {
  let component: ModifierAgentComponent;
  let fixture: ComponentFixture<ModifierAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
