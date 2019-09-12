import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BlockChainApiService} from "../services/block-chain-api.service";

@Component({
  selector: 'app-block-list-display',
  templateUrl: './block-list-display.component.html',
  styleUrls: ['./block-list-display.component.css']
})
export class BlockListDisplayComponent implements OnInit {

  products: BlockData [];

  @Output() selectedId = new EventEmitter<string>();


  constructor(private blockChainApi: BlockChainApiService) {
  }

  ngOnInit() {
    // this.initTempBlocks();
    this.showConfig();
  }

  showConfig() {
    this.blockChainApi.getProducts()
      .subscribe((data: BlockData[]) => this.products = data);
  }

  onSelect(pId: string) {
    console.log("PID is: " + pId);
    this.selectedId.emit(pId);
  }
}
