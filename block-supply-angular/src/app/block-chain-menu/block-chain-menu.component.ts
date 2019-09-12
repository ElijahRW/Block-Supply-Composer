import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-chain-menu',
  templateUrl: './block-chain-menu.component.html',
  styleUrls: ['./block-chain-menu.component.css']
})
export class BlockChainMenuComponent implements OnInit {
  opened: boolean;
  loggedIn: boolean = true; //TODO: Set to false to enable a login
  private selectedPId: string = "";

  openTab: number;
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  // events: any;

  constructor() {
    this.openTab = 2;
  }

  ngOnInit() {
  }

  private setOpenTab(newTab: number) {
    this.openTab = newTab;
  }

  private setChangeLocation(selectedPId: string) {
    this.selectedPId = "";
    this.selectedPId = selectedPId;
    console.log("AGAIN: "+ selectedPId);
    this.openTab = 1;
  }

}
