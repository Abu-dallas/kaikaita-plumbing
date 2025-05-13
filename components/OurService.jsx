import Image from "next/image";
import React from "react";

function OurService() {
  return (
    <div className="pt-12 mb-12">
      <p className="text-slate-700 border-l-6 border-l-amber-400 text-2xl font-bold pl-1 mx-8 my-8">
        We Provide Services
      </p>
      <div className="grid grid-cols-1 pt-4 gap-2 md:grid-cols-2">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-3 bg-slate-50 p-4"
          >
            <Image
              src={item.image}
              alt="image construction"
              width={500}
              height={500}
              className="w-20 h-20"
            />
            <span className="flex flex-col gap-3">
              <p className="text-lg font-bold text-slate-700">{item.title}</p>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurService;

const services = [
  {
    title: "Plumbing Repairs & Install",
    image: "/plumbing1.png",
    desc: "Pipes and fittings are expertly installed and maintained, ensuring smooth water flow and reliable performance for every part of the home.",
  },
  {
    title: "Drain & Leak Fixing",
    image: "/plumbing7.png",
    desc: "Leaks and clogs are swiftly resolved with precision, preventing water damage and keeping your system running cleanly and efficiently.",
  },
  {
    title: "Water Treatment & Tank Washing",
    image: "/plumbing3.png",
    desc: "Clean water is essential—our services purify and maintain your tanks, ensuring safe, fresh water flows throughout your property.",
  },
  {
    title: "Toilet Repairs",
    image: "/plumbing4.png",
    desc: "From faulty flushes to full replacements, toilets are restored to optimal function, combining comfort, cleanliness, and reliability.",
  },
  {
    title: "Borehold",
    image: "/plumbing2.png",
    desc: "Deep drilling and setup deliver independent water access, ensuring long-term supply through expert borehole construction and care.",
  },
  {
    title: "Pumping Machine",
    image: "/screw1.png",
    desc: "Efficient and reliable, pumping systems are installed and serviced to ensure seamless water movement where and when it’s needed.",
  },
];
