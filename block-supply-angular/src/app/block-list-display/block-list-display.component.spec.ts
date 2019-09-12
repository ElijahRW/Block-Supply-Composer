import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockListDisplayComponent } from './block-list-display.component';

describe('BlockListDisplayComponent', () => {
  let component: BlockListDisplayComponent;
  let fixture: ComponentFixture<BlockListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockListDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
