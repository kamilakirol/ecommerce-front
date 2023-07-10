import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export async function getData() {
  const featuredProductId = "64957bc8e2de4f09b04704ab";
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return JSON.parse(JSON.stringify(product));
}

export default async function Home() {
  const product = await getData();
  return (
    <div>
      <Header />
      <Featured product={product} />
    </div>
  );
}
