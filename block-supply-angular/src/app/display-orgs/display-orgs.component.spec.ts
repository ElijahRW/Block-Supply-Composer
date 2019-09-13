import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOrgsComponent } from './display-orgs.component';

describe('DisplayOrgsComponent', () => {
  let component: DisplayOrgsComponent;
  let fixture: ComponentFixture<DisplayOrgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOrgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOrgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
