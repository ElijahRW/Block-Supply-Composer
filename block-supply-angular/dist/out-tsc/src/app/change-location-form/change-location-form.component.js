import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let ChangeLocationFormComponent = class ChangeLocationFormComponent {
    constructor(formBuilder, _snackBar, blockChainApi) {
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        this.blockChainApi = blockChainApi;
        this.checkoutForm = this.formBuilder.group({
            productId: "",
            previousLocation: "",
            newDestination: "",
            newReadCount: 0,
        });
    }
    ngOnInit() {
    }
    onSubmit(customerData) {
        const product = {
            product: "resource:org.block.supply.Product#" + customerData.productId,
            destinationAddress: customerData.newDestination,
            sourceAddress: customerData.previousLocation,
        };
        this.blockChainApi.postBeginShippingProduct(product).subscribe((data) => {
            console.log(data);
        });
        // Process checkout data here
        this._snackBar.open("TEMP", "TEMP", {
            duration: 2000,
        });
        if (this.validateForm())
            this._snackBar.open("TEMP", "TEMP", {
                duration: 2000,
            });
        console.warn('New Block has been submitted', customerData);
        // TODO: Add form submission logic, for now log will submit, and form will reset.
        // this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
    }
    validateForm() {
        if (this.checkoutForm) {
            return false;
        }
        return true;
    }
    set loadNewChangeLocationForm(pId) {
        this.checkoutForm.reset({
            productId: pId,
            previousLocation: "",
            newDestination: "",
            newReadCount: 0,
        });
    }
};
tslib_1.__decorate([
    Input()
], ChangeLocationFormComponent.prototype, "loadNewChangeLocationForm", null);
ChangeLocationFormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-change-location-form',
        templateUrl: './change-location-form.component.html',
        styleUrls: ['./change-location-form.component.css']
    })
], ChangeLocationFormComponent);
export { ChangeLocationFormComponent };
//# sourceMappingURL=change-location-form.component.js.map