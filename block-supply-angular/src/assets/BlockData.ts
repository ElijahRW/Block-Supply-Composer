interface BlockData {
  /*pName: string,
  pId: number,
  sourceAddress: string,
  destinationAddress: string,
  height: number,*/
  pId: string,
  height: number,
  fee: number,
  time: string,
  previousHash: string,
  // Data Block
  sourceOrganization: string,
  destinationOrganization: string,
  readCount: number,
  // PData
  pName: string,
  ProductExpirationDate: string,
  toSignTId: string,
  signedPdata: string,

}
