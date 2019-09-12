import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockChainMenuComponent } from './block-chain-menu.component';

describe('BlockChainMenuComponent', () => {
  let component: BlockChainMenuComponent;
  let fixture: ComponentFixture<BlockChainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockChainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockChainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
