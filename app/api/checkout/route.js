import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.formData();

  const formData = Object.fromEntries(body);

  const { name, email, city, postalCode, streetAddress, country, products } =
    formData;

  await mongooseConnect();
  const productsIds = products.split(",");
  const uniqueIds = [...new Set(productsIds)];
  const productsInfos = await Product.find({ _id: uniqueIds });

  let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productsInfos.find(
      (p) => p._id.toString() === productId
    );
    const quantity = productsIds.filter((id) => id === productId)?.length || 0;

    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: "USD",
          product_data: { name: productInfo.name },
          unit_amount: quantity * productInfo.price,
        },
      });
    }
  }

  return NextResponse.json({ line_items });
}
