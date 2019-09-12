import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material";
import {BlockChainApiService} from "../services/block-chain-api.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  private readonly loginForm;

  constructor(private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar,
              private blockChainApi: BlockChainApiService,) {
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


}
