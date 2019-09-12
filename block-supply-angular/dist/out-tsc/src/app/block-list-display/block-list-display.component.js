import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
let BlockListDisplayComponent = class BlockListDisplayComponent {
    constructor(blockChainApi) {
        this.blockChainApi = blockChainApi;
        this.selectedId = new EventEmitter();
    }
    ngOnInit() {
        // this.initTempBlocks();
        this.showConfig();
    }
    showConfig() {
        this.blockChainApi.getProducts()
            .subscribe((data) => this.products = data);
    }
    onSelect(pId) {
        console.log("PID is: " + pId);
        this.selectedId.emit(pId);
    }
};
tslib_1.__decorate([
    Output()
], BlockListDisplayComponent.prototype, "selectedId", void 0);
BlockListDisplayComponent = tslib_1.__decorate([
    Component({
        selector: 'app-block-list-display',
        templateUrl: './block-list-display.component.html',
        styleUrls: ['./block-list-display.component.css']
    })
], BlockListDisplayComponent);
export { BlockListDisplayComponent };
//# sourceMappingURL=block-list-display.component.js.map