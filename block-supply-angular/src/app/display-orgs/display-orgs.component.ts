import {Component, OnInit} from '@angular/core';
import {BlockChainApiService} from '../services/block-chain-api.service';

@Component({
  selector: 'app-display-orgs',
  templateUrl: './display-orgs.component.html',
  styleUrls: ['./display-orgs.component.css']
})
export class DisplayOrgsComponent implements OnInit {

  organizations: Organization [];

  constructor(private blockChainApi: BlockChainApiService) {
  }

  ngOnInit() {
    this.organizations = [];
    this.getOrgs();
  }

  getOrgs() {
    this.blockChainApi.getManufacturers()
      .subscribe((data: Organization[]) => {
        console.log(data);
        this.organizations = this.organizations.concat(data);
        console.log(this.organizations);
      });
    this.blockChainApi.getDistributors()
      .subscribe((data: Organization[]) => this.organizations = this.organizations.concat(data));
    console.log(this.organizations);

  }

}
