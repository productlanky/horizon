import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { amount, currency } = await request.json();

    if (!amount || isNaN(amount)) {
      return NextResponse.json({ error: "Invalid donation amount" }, { status: 400 });
    }

    const apiKey = process.env.NOWPAYMENTS_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Payment gateway misconfigured" }, { status: 500 });
    }

    // Call NOWPayments Invoice endpoint for production
    const response = await fetch("https://api.nowpayments.io/v1/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        price_amount: Number(amount),
        price_currency: currency.toLowerCase(),
        pay_currency: "usdttrc20", // Default or let user choose on the hosted page
        ipn_callback_url: `${process.env.SITE_URL || "https://horizon-relief.org"}/api/ipn`,
        order_id: `horizon-relief-${Date.now()}`,
        order_description: "Humanitarian Relief Donation — Horizon",
        success_url: `${process.env.SITE_URL || "https://horizon-relief.org"}/success`,
        cancel_url: `${process.env.SITE_URL || "https://horizon-relief.org"}/cancel`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create NOWPayments invoice");
    }

    return NextResponse.json({ invoiceUrl: data.invoice_url });
  } catch (error: any) {
    console.error("NOWPayments Production Error:", error.message);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}