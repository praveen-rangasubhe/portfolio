import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbnapComponent } from './abnap.component';

describe('AbnapComponent', () => {
  let component: AbnapComponent;
  let fixture: ComponentFixture<AbnapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbnapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
