import { async, TestBed } from '@angular/core/testing';
import { ChangeLocationFormComponent } from './change-location-form.component';
describe('ChangeLocationFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChangeLocationFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChangeLocationFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=change-location-form.component.spec.js.map