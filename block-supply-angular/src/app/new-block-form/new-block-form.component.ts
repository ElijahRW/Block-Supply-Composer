import {Component, OnInit} from '@angular/core';

import {FormBuilder} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
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

      productName: "", // PName
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
      sourceOrganization: customerData.sourceOrganization,
      // PData
      pName: customerData.productName,
      ProductExpirationDate: customerData.productExpirationDate,
      toSignTId: customerData.productSignedTagId,
      signedPdata: customerData.productSignedData,

    }
    this.blockChainApi.createProduct(product).subscribe((data: BlockData) => {
      console.log(data);
      this._snackBar.open("Successful Submission", "X", {
        duration: 2000,
      });
    });
    console.warn('New Block has been submitted', customerData);
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
