import { async, TestBed } from '@angular/core/testing';
import { BlockListDisplayComponent } from './block-list-display.component';
describe('BlockListDisplayComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BlockListDisplayComponent]
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
//# sourceMappingURL=block-list-display.component.spec.js.map