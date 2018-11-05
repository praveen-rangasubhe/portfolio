import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActRuleComponent } from './act-rule.component';

describe('ActRuleComponent', () => {
  let component: ActRuleComponent;
  let fixture: ComponentFixture<ActRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
