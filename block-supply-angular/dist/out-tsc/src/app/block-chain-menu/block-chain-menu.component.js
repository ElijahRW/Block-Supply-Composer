import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let BlockChainMenuComponent = class BlockChainMenuComponent {
    // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
    // events: any;
    constructor() {
        this.loggedIn = true; //TODO: Set to false to enable a login
        this.selectedPId = "";
        this.openTab = 4;
    }
    ngOnInit() {
    }
    setOpenTab(newTab) {
        this.openTab = newTab;
    }
    setChangeLocation(selectedPId) {
        this.selectedPId = "";
        this.selectedPId = selectedPId;
        console.log(selectedPId);
        this.openTab = 1;
    }
};
BlockChainMenuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-block-chain-menu',
        templateUrl: './block-chain-menu.component.html',
        styleUrls: ['./block-chain-menu.component.css']
    })
], BlockChainMenuComponent);
export { BlockChainMenuComponent };
//# sourceMappingURL=block-chain-menu.component.js.map