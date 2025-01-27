import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prismadb";
import Stripe from "stripe";
import { buffer } from "micro";
import Cors from "micro-cors";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET || "";

const cors = Cors({
  allowMethods: ["POST", "HEAD"],
});

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"]!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        sig,
        webhookSecret
      );
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      // On error, log and return the error message.
      if (err! instanceof Error) console.log(err);
      console.log(`❌ Error message: ${errorMessage}`);
      res.status(400).send(`Webhook Error: ${errorMessage}`);
      return;
    }

    // Successfully constructed event.
    console.log("✅ Success:", event.id);

    // Cast event data to Stripe object.
    if (
      event.type === "payment_intent.succeeded" ||
      event.type === "checkout.session.completed"
    ) {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(`💰 PaymentIntent: ${JSON.stringify(paymentIntent)}`);

      // @ts-ignore
      const userEmail = paymentIntent.customer_details.email;
      let creditAmount = 0;

      // @ts-ignore
      switch (paymentIntent.amount_subtotal) {
        case 490:
      //  case 990:
          creditAmount = 20;
          break;
        case 790:
          creditAmount = 30;
          break;
        case 1990:
      //  case 2990:
          creditAmount = 100;
          break;
        case 2390:
          creditAmount = 105;
          break;
        case 3490:
      //  case 4990:
          creditAmount = 250;
          break;
        case 7190:
          creditAmount = 350;
        break;
      //  case 7990:
      //  case 9990:
      //   creditAmount = 750;
      //    break;
      }
      await prisma.user.update({
        where: {
          email: userEmail,
        },
        data: {
          credits: {
            increment: creditAmount,
          },
        },
      });

      await prisma.purchase.create({
        data: {
          creditAmount: creditAmount,
          user: {
            connect: {
              email: userEmail,
            },
          },
        },
      });
    } else if (event.type === "payment_intent.payment_failed") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(
        `❌ Payment failed: ${paymentIntent.last_payment_error?.message}`
      );
    } else if (event.type === "charge.succeeded") {
      const charge = event.data.object as Stripe.Charge;
      console.log(`💵 Charge id: ${charge.id}`);
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    // Return a response to acknowledge receipt of the event. Upgraded.
    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default cors(webhookHandler as any);
