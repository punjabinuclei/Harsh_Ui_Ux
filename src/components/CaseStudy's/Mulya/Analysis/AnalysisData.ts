import paypal_logo from "../../../../assets/CaseStudy/Mulya/paypal_logo.svg";
import razorpay_logo from "../../../../assets/CaseStudy/Mulya/razorpay_logo.svg";
import payoneer_logo from "../../../../assets/CaseStudy/Mulya/payoneer_logo.svg";

export const paymentGateways = [
  {
    logo: paypal_logo,
    head: "Paypal",
    description:
      "Paypal is one of the most widely recognized and established global payment gateways. It allows users to send and receive payments online, supporting transactions in various currencies and countries.",
    pros: [
      "Established global presence and widespread recognition.",
      "Wide range of supported currencies and countries.",
      "Offers various payment options like credit cards and e-wallets.",
    ],
    cons: [
      "High Forex Markup fees for international transactions.",
      "Limited transparency in fee structures.",
      "Sometimes experiences delays in transaction processing",
    ],
  },
  {
    logo: razorpay_logo,
    head: "Razorpay (Local Competitor)",
    description:
      "Razorpay is a payment gateway focused on serving Indian merchants and businesses. It offers a wide range of payment options, including credit cards, debit cards, UPI, and wallets, with a strong emphasis on providing advanced analytics and insights for businesses.",
    pros: [
      "Offers diverse payment options, including credit cards, debit cards, UPI, and wallets.",
      "Strong focus on Indian merchants and businesses.",
      "Provides advanced analytics and insights for businesses.",
    ],
    cons: [
      "Higher transaction fees for international payments.",
      "Not as specialized in zero Forex Markup for international transactions.",
      "Limited global reach compared to international payment gateways.",
    ],
  },
  {
    logo: payoneer_logo,
    head: "Payoneer",
    description:
      "Payoneer is a popular payment gateway known for its fast and reliable international money transfer services. It supports transactions in multiple currencies and is widely used by freelancers and businesses worldwide.",
    pros: [
      "Known for fast and reliable international money transfers.",
      "Multi-currency support with competitive exchange rates.",
      "User-friendly interface and straightforward registration process.",
    ],
    cons: [
      "Higher fees compared to some competitors.",
      "Limited presence in certain countries.",
      "Restricted services for specific industries or professions.",
    ],
  },
  // Add more platforms here
];
