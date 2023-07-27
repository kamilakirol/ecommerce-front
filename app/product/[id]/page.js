import ProductPageContent from "@/components/ProductPageContent";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export async function getData(id) {
  await mongooseConnect();
  const product = await Product.findById(id);

  return { product: JSON.parse(JSON.stringify(product)) };
}

const ProductPage = async ({ params }) => {
  const { product } = await getData(params.id);

  return <ProductPageContent product={product} />;
};

export default ProductPage;
