export const getProductsList = (tag: string, products: any) => {
  if (tag == 'All') {
    return products;
  } else {
    let productsList = products.filter((product: any) => product.tags.includes(tag)
    );
    return productsList;
  }
};
