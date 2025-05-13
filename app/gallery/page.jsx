"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React, { useState } from "react";

function Gallery() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="w-full">
      <Navbar isOpen={isOpen} setisOpen={setisOpen} />
      <Sidebar isOpen={isOpen} />
      <div className="w-full p-2 pt-12">
        <p className="text-2xl text-blue-500 font-bold">Gallery </p>
        <p className="text-slate-700 py-6 text-lg lg:w-[50%]">
          Our gallery section, showcase our projects completed, work in progress
          and best quality services delivery to our customers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 space-y-4 py-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="images in gallery"
              width={2000}
              height={2000}
              className="w-full h-350px rounded"
            />
          ))}
        </div>
      </div>
      <div className="mt-30">
        <Footer />
      </div>
    </div>
  );
}

export default Gallery;

const images = [
  "/kaikaita/kaikaita1.jpg",
  "/kaikaita/kaikaita60.jpg",
  "/kaikaita/kaikaita59.jpg",
  "/kaikaita/kaikaita58.jpg",
  "/kaikaita/kaikaita57.jpg",
  "/kaikaita/kaikaita56.jpg",
  "/kaikaita/kaikaita55.jpg",
  "/kaikaita/kaikaita54.jpg",
  "/kaikaita/kaikaita53.jpg",
  "/kaikaita/kaikaita52.jpg",
  "/kaikaita/kaikaita51.jpg",
  "/kaikaita/kaikaita50.jpg",
  "/kaikaita/kaikaita2.jpg",
  "/kaikaita/kaikaita3.jpg",
  "/kaikaita/kaikaita4.jpg",
  "/kaikaita/kaikaita5.jpg",
  "/kaikaita/kaikaita6.jpg",
  "/kaikaita/kaikaita7.jpg",
  "/kaikaita/kaikaita8.jpg",
  "/kaikaita/kaikaita9.jpg",
  "/kaikaita/kaikaita10.jpg",
  "/kaikaita/kaikaita49.jpg",
  "/kaikaita/kaikaita48.jpg",
  "/kaikaita/kaikaita47.jpg",
  "/kaikaita/kaikaita46.jpg",
  "/kaikaita/kaikaita45.jpg",
  "/kaikaita/kaikaita44.jpg",
  "/kaikaita/kaikaita43.jpg",
  "/kaikaita/kaikaita42.jpg",
  "/kaikaita/kaikaita41.jpg",
  "/kaikaita/kaikaita40.jpg",
  "/kaikaita/kaikaita11.jpg",
  "/kaikaita/kaikaita12.jpg",
  "/kaikaita/kaikaita13.jpg",
  "/kaikaita/kaikaita14.jpg",
  "/kaikaita/kaikaita15.jpg",
  "/kaikaita/kaikaita16.jpg",
  "/kaikaita/kaikaita17.jpg",
  "/kaikaita/kaikaita18.jpg",
  "/kaikaita/kaikaita19.jpg",
  "/kaikaita/kaikaita20.jpg",
  "/kaikaita/kaikaita21.jpg",
  "/kaikaita/kaikaita22.jpg",
  "/kaikaita/kaikaita23.jpg",
  "/kaikaita/kaikaita24.jpg",
  "/kaikaita/kaikaita25.jpg",
  "/kaikaita/kaikaita26.jpg",
  "/kaikaita/kaikaita27.jpg",
  "/kaikaita/kaikaita28.jpg",
  "/kaikaita/kaikaita29.jpg",
  "/kaikaita/kaikaita30.jpg",
  "/kaikaita/kaikaita31.jpg",
  "/kaikaita/kaikaita32.jpg",
  "/kaikaita/kaikaita33.jpg",
  "/kaikaita/kaikaita34.jpg",
  "/kaikaita/kaikaita35.jpg",
  "/kaikaita/kaikaita36.jpg",
  "/kaikaita/kaikaita37.jpg",
  "/kaikaita/kaikaita38.jpg",
  "/kaikaita/kaikaita39.jpg",
  "/kaikaita/kaikaita61.jpg",
  "/kaikaita/kaikaita62.jpg",
  "/kaikaita/kaikaita67.jpg",
  "/kaikaita/kaikaita68.jpg",
  "/kaikaita/kaikaita69.jpg",
  "/kaikaita/kaikaita70.jpg",
  "/kaikaita/kaikaita71.jpg",
  "/kaikaita/kaikaita72.jpg",
  "/kaikaita/kaikaita73.jpg",
];
