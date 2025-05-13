import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="py-4">
      <div className="overflow-x-auto flex items-center justify-center ml-2 gap-2">
        {ImageSlide.map((image, index) => (
          <Image
            src={image}
            alt="image slide"
            width={2000}
            height={2000}
            className="w-44 h-72 rounded-2xl object-cover"
            key={index}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="border-1 border-slate-200 pl-4 p-4 rounded-3xl mx-4 mt-6">
          <p className="text-slate-700 text-xl font-bold p-2">
            About{" "}
            <span className="text-amber-400">Kikaita Plumbing Services</span>
          </p>
          <p className="text-md text-slate-500">
            Kikaita Plumbing Services was founded over 10 years with a passion
            for delivering high-quality Plumbing services. Starting as a small
            team of dedicated of plumbers, we have grown into a trusted name in
            the industry, handling residential, commercial, and industrial
            projects. Over the years, we have built a reputation for excellence,
            innovation, and customer satisfaction.
          </p>
        </div>

        <div className="border-1 border-slate-200 pl-4 p-4 rounded-3xl mx-4 mt-6">
          <p className="text-slate-700 text-2xl font-bold">Mission</p>
          <p className="text-md text-slate-500">
            Our mission is to provide top-notch Plumbing solutions that meet the
            highest standards of quality, safety, and efficiency. We strive to
            turn our clients’ visions into reality through skilled
            craftsmanship, sustainable practices, and a commitment to
            excellence.
          </p>
        </div>
        <div className="border-1 border-slate-200 pl-4 p-4 rounded-3xl mx-4 mt-6">
          <p className="text-slate-700 text-2xl font-bold">Vision</p>
          <p className="text-md text-slate-500">
            To be a leading Plumbing company known for reliability, innovation,
            and superior craftsmanship, transforming spaces and creating lasting
            structures that stand the test of time.
          </p>
        </div>
      </div>
      <div className="px-4 mt-4">
        <button className="bg-blue-600 text-white text-lg font-semibold p-2 rounded-3xl w-60">
          Read More
        </button>
      </div>
    </div>
  );
}

export default AboutUs;

const ImageSlide = [
  "/kaikaita/kaikaita1.jpg",
  "/kaikaita/kaikaita2.jpg",
  "/kaikaita/kaikaita3.jpg",
  "/kaikaita/kaikaita4.jpg",
  "/kaikaita/kaikaita5.jpg",
  "/kaikaita/kaikaita6.jpg",
  "/kaikaita/kaikaita7.jpg",
];
