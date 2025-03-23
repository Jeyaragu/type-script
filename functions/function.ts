// Its a Named function and its returns string, that we annote in the function
function intro1(
  productName: string,
  cost: number,
  isAvailable?: string
): string {
  return isAvailable
    ? `The ${productName} price is ${cost} and its ${isAvailable}`
    : `The ${productName} price is ${cost}`;
}
// Function Expression
const intro2 = function (productName: string, cost: number): string {
  return `The ${productName} price is ${cost}`;
};
// Arrow Function
const intro3 = (productName: string, cost: number): string => {
  return `The ${productName} price is ${cost}`;
};

enum ProductAvailablity {
  Yes = "Yes",
  No = "No",
}
type Product = {
  productName: string;
  cost: number;
  isAvailable: ProductAvailablity;
  status?: boolean;
};
const product: Product = {
  productName: "hathway",
  cost: 8000000,
  isAvailable: ProductAvailablity.Yes,
};

const productDetails = (product: Product): Product => {
  if (product.isAvailable == ProductAvailablity.Yes) {
    product.status = true;
  } else {
    product.status = false;
  }
  return product;
};

// Parameter Destructuring
type MenObject = {
  displayName: string;
  status: boolean;
  id: number;
};

const men: MenObject = {
  displayName: "Men",
  status: true,
  id: 1,
};

function parameterDestructuring({
  displayName,
  status,
  id,
}: MenObject): string {
  return `${displayName}, ${status}, ${id}`;
}
