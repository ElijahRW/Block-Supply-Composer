import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let BlockChainApiService = class BlockChainApiService {
    constructor(http, _snackBar) {
        this.http = http;
        this._snackBar = _snackBar;
        this.productUrl = 'http://localhost:3000/api/Product';
        this.productGenerationUrl = "http://localhost:3000/api/GenerateProduct";
        this.productChangedLocationUrl = "http://localhost:3000/api/BeginShippingProduct";
    }
    getProducts() {
        return this.http.get(this.productUrl);
    }
    createProduct(blockGenerationData) {
        /** POST: add a new hero to the database */
        return this.http.post(this.productGenerationUrl, blockGenerationData, httpOptions);
        /*.pipe(
          catchError(error => this.handleError(error))
        );*/
    }
    postBeginShippingProduct(shippingData) {
        return this.http.post(this.productChangedLocationUrl, shippingData, httpOptions);
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            this._snackBar.open("'An error occurred:'," + error.error.message, "X", {
                duration: 2000,
            });
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            this._snackBar.open(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`, "X", {
                duration: 2000,
            });
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
    ;
};
BlockChainApiService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], BlockChainApiService);
export { BlockChainApiService };
//# sourceMappingURL=block-chain-api.service.js.map