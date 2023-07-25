import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
const stripe = require("stripe")(process.env.STRIPE_SK);

export async function POST(req) {
  await mongooseConnect();
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.ENDPOINT_SECRET
    );
  } catch (err) {
    return new Response(`Webhook Error: ${err.message} `, {
      status: 400,
    });
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const paymentIntentSucceeded = event.data.object;
      const orderId = paymentIntentSucceeded.metadata.orderId;
      const paid = paymentIntentSucceeded.payment_status === "paid";

      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, { paid: true });
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response("ok", { status: 200 });
}
