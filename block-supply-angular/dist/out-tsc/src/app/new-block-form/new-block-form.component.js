import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let NewBlockFormComponent = class NewBlockFormComponent {
    constructor(formBuilder, _snackBar, blockChainApi) {
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        this.blockChainApi = blockChainApi;
        this.checkoutForm = this.formBuilder.group({
            fee: "",
            validationSignature: "",
            sourceAddress: "",
            destinationAddress: "",
            // TODO: PData Refactor?
            productId: "",
            productName: "",
            productExpirationDate: "",
            productSignedTagId: "",
            productSignedData: "",
        });
    }
    onSubmit(customerData) {
        const event = new Date(Date.now());
        const product = {
            pId: customerData.productId,
            fee: 0,
            time: event.toISOString(),
            // Data Block
            sourceAddress: customerData.sourceAddress,
            destinationAddress: customerData.destinationAddress,
            // PData
            pName: customerData.productName,
            ProductExpirationDate: event.toISOString(),
            toSignTId: customerData.productSignedTagId,
            signedPdata: customerData.productSignedData,
        };
        this.blockChainApi.createProduct(product).subscribe((data) => {
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
        this.checkoutForm.reset();
    }
    validateForm() {
        if (this.checkoutForm) {
            return false;
        }
        return true;
    }
    ngOnInit() {
    }
};
NewBlockFormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-new-block-form',
        templateUrl: './new-block-form.component.html',
        styleUrls: ['./new-block-form.component.css']
    })
], NewBlockFormComponent);
export { NewBlockFormComponent };
//# sourceMappingURL=new-block-form.component.js.map