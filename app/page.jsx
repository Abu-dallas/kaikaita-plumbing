"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import OurService from "@/components/OurService";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Projects";
import WhyUsCards from "@/components/WhyUsCards";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import Link from "next/link";

export default function ConstructionPage() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <Navbar isOpen={isOpen} setisOpen={setisOpen} />

      <div className="w-full">
        <div className="relative top-0 w-full">
          <div className="transition-all duration-700 ease-in-out">
            <Image
              src="/kaikaita/kaikaita69.jpg"
              alt="image"
              width={2000}
              height={2000}
              className="w-full h-screen object-cover"
              priority
            />
          </div>

          <div className="absolute top-0 w-full h-screen bg-black/65">
            <div className="w-full px-4 -pt-12 h-screen text-center z-10 select-none flex items-center justify-center flex-col">
              <p className="text-white text-2xl">WE ARE</p>
              <p className="text-white text-3xl font-bold">
                specialists in Plumbing and{" "}
                <span className="text-blue-500">Borehole Drilling,</span> Piping
                & Toilet Repairs
              </p>
              {/* <p className=" text-md mt-14 w-[90%] text-slate-300">
                As one of the leading global Plumbiing company proud ourselves
                in setting industry standards through our commitment to
                producing high-quality services cater to the diverse needs of
                our customers.
              </p> */}

              <span className="flex gap-5 mt-24">
                <Link
                  href="/coming-soon"
                  className="text-white w-34 font-semibold bg-blue-600 rounded-xl p-2"
                >
                  Gallery
                </Link>
              </span>
            </div>
          </div>
          <Sidebar isOpen={isOpen} />
        </div>
      </div>

      <div className="">
        <OurService />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <WhyUsCards />
      </div>
      <div>
        <ContactForm />
      </div>
      <div className="mt-30">
        <Footer />
      </div>
    </div>
  );
}
