export const plansMap = [
  {
    id: "basic",
    name: "Basic",
    description: "Get started with SpeakEasy!",
    price: "9.99",
    items: ["3 Blog Posts", "3 Transcription"],
    paymentLink: "https://buy.stripe.com/test_eVa15X4ii0Lm48wbII",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1Pw8Kr2Lpw9hSMmtvLWr8hwz"
        : "",
  },
  {
    id: "pro",
    name: "Pro",
    description: "All Blog Posts, let’s go!",
    price: "9.99",
    items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
    paymentLink: "https://buy.stripe.com/test_eVa15X4ii0Lm48wbII",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1Pw8Kr2Lpw9hSMmtvLWr8hwz"
        : "",
  },
];

export const ORIGIN_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://speakeasyai-demo.vercel.app";
