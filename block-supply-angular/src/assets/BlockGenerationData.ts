interface BlockGenerationData {
  pId: string,
  height: number,
  fee: number,
  time: string,
  previousHash: string,
  // Data Block
  sourceAddress: string,
  destinationAddress: string,
  readCount: number,
  // PData
  pName: string,
  ProductExpirationDate: string,
  toSignTId: string,
  signedPdata: string,
}
