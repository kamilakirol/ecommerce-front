import Featured from "@/components/Featured";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export async function getData() {
  const featuredProductId = "64957bc8e2de4f09b04704ab";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });

  return {
    featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    newProducts: JSON.parse(JSON.stringify(newProducts)),
  };
}

export default async function Home() {
  const { featuredProduct, newProducts } = await getData();
  return (
    <div>
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
    </div>
  );
}
