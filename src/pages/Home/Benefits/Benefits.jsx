import React from "react";
import logo1 from "../../../assets/live-tracking.png";
import logo2 from "../../../assets/safe-delivery.png";
import logo3 from "../../../assets/tiny-deliveryman.png";
import BenefitsCard from "./BenefitsCard";

const data = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: logo1,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: logo2,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: logo3,
  },
];
const Benefits = () => {
  return (
    <div className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="flex flex-col gap-6">
          {data.map((benefits) => (
            <BenefitsCard key={benefits.id} benefits={benefits}></BenefitsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
