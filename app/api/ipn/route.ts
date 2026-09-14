import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const text = await request.text();
    const sigHeader = request.headers.get("x-nowpayments-sig");
    const ipnpSecret = process.env.NOWPAYMENTS_IPN_SECRET || "";

    // Verify cryptographic signature from NOWPayments
    const hmac = crypto.createHmac("sha512", ipnpSecret);
    hmac.update(text);
    const signature = hmac.digest("hex");

    if (signature !== sigHeader) {
      return NextResponse.json({ error: "Unauthorized IPN signature" }, { status: 401 });
    }

    const paymentData = JSON.parse(text);

    if (paymentData.payment_status === "finished") {
      // TODO: Log successful donation to your database (MongoDB/Supabase/Firebase)
      console.log(`Donation confirmed: ${paymentData.price_amount} ${paymentData.price_currency}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "IPN processing failed" }, { status: 500 });
  }
}