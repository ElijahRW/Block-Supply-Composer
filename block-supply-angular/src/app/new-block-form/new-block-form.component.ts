import {Component, OnInit} from '@angular/core';

import {FormBuilder} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
// import {NewBlockResponse} from "./new-block-response";
import {BlockChainApiService} from "../services/block-chain-api.service";


@Component({
  selector: 'app-new-block-form',
  templateUrl: './new-block-form.component.html',
  styleUrls: ['./new-block-form.component.css']
})
export class NewBlockFormComponent implements OnInit {
  private readonly checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private blockChainApi: BlockChainApiService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      productId: "", // PId
      fee: "",
      sourceOrganization: "",
      // TODO: PData Refactor?
      productName: "", // PNae
      productExpirationDate: "",
      productSignedTagId: "", //TODO: Generate elsewhere?
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
      sourceOrganization: customerData.sourceOrganization,
      // PData
      pName: customerData.productName,
      ProductExpirationDate: event.toISOString(),
      toSignTId: customerData.productSignedTagId,
      signedPdata: customerData.productSignedData,

    }
    this.blockChainApi.createProduct(product).subscribe((data: BlockData) => {
      console.log(data)
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

}
