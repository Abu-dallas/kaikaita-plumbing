import Image from "next/image";
import React from "react";

function WhyUsCards() {
  return (
    <div className="mx-4 mt-12">
      <p className="text-amber-400 text-3xl font-bold p-4 mb-4">Why Us?</p>
      <div className="grid grid-cols-2 gap-6 content-center justify-center">
        {Cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center gap-2 flex-col bg-slate-100 p-4 rounded-2xl"
          >
            <Image
              src={card.icon}
              alt="cards"
              height={2000}
              width={2000}
              className="w-24 h-24"
            />
            <p className="text-slate-700 text-center justify-center text-lg font-bold">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUsCards;

const Cards = [
  {
    title: "Value for Investment",
    icon: "/why5.jpg",
  },
  {
    title: "Experienced & Certified",
    icon: "/why2.jpg",
  },
  {
    title: "High-Quality Material",
    icon: "/why3.jpg",
  },

  {
    title: "Affordable Pricing",
    icon: "/why6.jpg",
  },
];
