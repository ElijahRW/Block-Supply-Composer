import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserLoginComponent = class UserLoginComponent {
    constructor(formBuilder, _snackBar, blockChainApi) {
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        this.blockChainApi = blockChainApi;
        this.loginForm = this.formBuilder.group({
            userName: "",
            password: "",
        });
    }
    ngOnInit() {
    }
    onSubmit(customerData) {
        console.log(customerData);
    }
};
UserLoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-login',
        templateUrl: './user-login.component.html',
        styleUrls: ['./user-login.component.css']
    })
], UserLoginComponent);
export { UserLoginComponent };
//# sourceMappingURL=user-login.component.js.map