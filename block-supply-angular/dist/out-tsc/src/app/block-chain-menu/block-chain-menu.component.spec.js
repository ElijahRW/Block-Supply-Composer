import { async, TestBed } from '@angular/core/testing';
import { BlockChainMenuComponent } from './block-chain-menu.component';
describe('BlockChainMenuComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BlockChainMenuComponent]
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
//# sourceMappingURL=block-chain-menu.component.spec.js.map