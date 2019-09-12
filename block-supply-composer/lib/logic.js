/**
 * New script file
 */

/**
 *
 * @param {org.block.supply.GenerateProduct} movementDeparture - model instance
 * @transaction
 */
async function generateProduct(newProductRequest) {  // eslint-disable-line no-unused-vars
  const factory = getFactory();
  const NS = 'org.block.supply';
  console.log('Generating a new block with ID' + newProductRequest.pId);

  newProduct = factory.newResource(NS, 'Product', newProductRequest.pId);
  newProduct.pId = newProductRequest.pId;
  newProduct.height = 1;
  newProduct.fee = newProductRequest.fee;
  newProduct.time = newProductRequest.time;
  newProduct.previousHash = "";
  // Data Block
  newProduct.sourceOrganization = newProductRequest.sourceOrganization;
  newProduct.destinationOrganization = newProductRequest.sourceOrganization;
  newProduct.readCount = 0;
  // PData
  newProduct.pName = newProductRequest.pName;
  newProduct.ProductExpirationDate = newProductRequest.ProductExpirationDate;
  newProduct.toSignTId = newProductRequest.toSignTId;
  newProduct.signedPdata = newProductRequest.signedPdata;

  const productRegistry = await getAssetRegistry(NS + '.Product');
  await productRegistry.add(newProduct);
}

/**
 *
 * @param {org.block.supply.BeginShippingProduct} beginShippingProduct - model instance
 * @transaction
 */
async function beginShippingProduct(beginShippingProduct) {  // eslint-disable-line no-unused-vars

  beginShippingProduct.product.sourceOrganization = beginShippingProduct.sourceOrganization;
  beginShippingProduct.product.destinationOrganization = beginShippingProduct.destinationOrganization;
  beginShippingProduct.product.readCount += beginShippingProduct.additionalReads
  beginShippingProduct.product.height = beginShippingProduct.product.height + 1;
  const ar = await getAssetRegistry('org.block.supply.Product');
  await ar.update(beginShippingProduct.product);
}