import ProductsPage from "@/components/ProductsPage";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export async function getData() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });

  return {
    products: JSON.parse(JSON.stringify(products)),
  };
}

const Products = async () => {
  const { products } = await getData();
  return <ProductsPage products={products} />;
};

export default Products;
