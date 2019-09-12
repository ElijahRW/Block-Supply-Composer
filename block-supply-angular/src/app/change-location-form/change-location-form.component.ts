import {Component, Input, OnInit} from '@angular/core';

import {FormBuilder} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BlockChainApiService} from "../services/block-chain-api.service";


@Component({
  selector: 'app-change-location-form',
  templateUrl: './change-location-form.component.html',
  styleUrls: ['./change-location-form.component.css']
})
export class ChangeLocationFormComponent implements OnInit {
  private checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private blockChainApi: BlockChainApiService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      productId: "",
      previousLocation: "",
      newDestination: "",
      additionalReads: 0,
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {

    const product = {
      product: "resource:org.block.supply.Product#" + customerData.productId,
      sourceOrganization: customerData.newDestination,
      destinationOrganization: customerData.previousLocation,
      additionalReads: customerData.additionalReads,
    };
    this.blockChainApi.postBeginShippingProduct(product).subscribe((data: BlockData) => {
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

  @Input()
  set loadNewChangeLocationForm(pId: string) {
    this.checkoutForm.reset({
      productId: pId,
      previousLocation: "",
      newDestination: "",
      additionalReads: 0,
    });
  }
}
