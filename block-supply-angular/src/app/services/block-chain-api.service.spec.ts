import { TestBed } from '@angular/core/testing';

import { BlockChainApiService } from './block-chain-api.service';

describe('BlockChainApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockChainApiService = TestBed.get(BlockChainApiService);
    expect(service).toBeTruthy();
  });
});
