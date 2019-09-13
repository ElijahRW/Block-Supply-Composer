import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {MatSnackBar} from "@angular/material";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BlockChainApiService {

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
  ) {
  }

  productUrl = "http://localhost:3001/api/Product";
  productGenerationUrl = "http://localhost:3001/api/GenerateProduct";
  productChangedLocationUrl = "http://localhost:3001/api/BeginShippingProduct";
  manufacturersUrl = "http://localhost:3001/api/Manufacturer";
  distributorsUrl = "http://localhost:3001/api/Manufacturer";


  getProducts() {
    return this.http.get(this.productUrl);
  }

  getManufacturers () {
    return this.http.get(this.manufacturersUrl);
  }

  getDistributors () {
    return this.http.get(this.distributorsUrl);
  }


  createProduct(blockGenerationData: any): Observable<any> {
    /** POST: add a new hero to the database */
    return this.http.post<any>(this.productGenerationUrl, blockGenerationData, httpOptions);
      /*.pipe(
        catchError(error => this.handleError(error))
      );*/
  }

  postBeginShippingProduct(shippingData: any): Observable<any> {
    return this.http.post<any>(this.productChangedLocationUrl, shippingData, httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      this._snackBar.open("'An error occurred:'," +  error.error.message, "X", {
        duration: 2000,
      });
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this._snackBar.open(`Backend returned code ${error.status}, ` +
        `body was: ${error.error}`, "X", {
        duration: 2000,
      });
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
