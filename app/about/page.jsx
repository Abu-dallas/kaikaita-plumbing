"use client";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";

function AboutPage() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="w-full ">
      <Navbar setisOpen={setisOpen} />
      <Sidebar isOpen={isOpen} setisOpen={setisOpen} />
      <div className="w-full lg:flex lg:items-center lg:justify-center lg:flex-col py-6 pt-20">
        <div className="w-full lg:w-[80%] max-md:px-4">
          <p className="text-3xl text-slate-900 font-bold">
            About Kaikaita Plumbing Services
          </p>
          <p className="text-slate-700 mt-6 mb-6 lg:w-[75%]">
            Tripple 's' International Limited, established in 2018, is a leading
            fruits and vegetable export company based in Nigeria. Specializing
            in the sourcing, packaging, and export of fresh, high-quality
            produce, the company connects Nigerian farmers to global markets
            across Europe, the Middle East, and North America. With a commitment
            to international standards, Triples International ensures that all
            products are handled with care and meet stringent quality
            requirements. Backed by a dedicated team and strategic partnerships,
            the company has earned a reputation for reliability, sustainability,
            and promoting agricultural growth within local communities.
          </p>
        </div>

        <div className="px-2 w-full lg:w-[70%]">
          <div className="w-full flex flex-col gap-4 items-center justify-center mt-20  py-5 rounded-xl px-1">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-center border border-slate-200 py-4 rounded"
              >
                <p className="text-xl font-bold px-6 mb-1.5 text-slate-900">
                  {stat.title}
                </p>
                <p className="text-slate-700 text-sm px-6">{stat.text}</p>
              </div>
            ))}
          </div>
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
      </div>
      <ContactForm />
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.629687284966!2d11.16100627376823!3d10.291391667955553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10ffd080027c87d5%3A0xbed4c65ea86cccf3!2sModibbo%20Tukur%20Rd%2C%20Gombe%20760252%2C%20Gombe!5e0!3m2!1sen!2sng!4v1746962667489!5m2!1sen!2sng"
          width="100%"
          height="800"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;

const stats = [
  {
    title: "Trusted Company",
    text: "Trusted by more than thousands satisfied customers from different parts of the world. We focus on building long-term business relationships based on integrity, consistency, and unmatched quality.quality",
  },
  {
    title: "High Quality services",
    text: "Over years we have been delivering services of different kind, which includes piping, borehold drilling, tank washing, toilet installation and repairs etc. Our logistics partners are reliable, helping us maintain a track record of efficiency.",
  },
  {
    title: "Client Friendly",
    text: "We engage with our clients to make sure that we are inline with client's project goals, that ensure greater satisfaction and reliability.",
  },
  {
    title: "Good Estimation",
    text: "Due to our status and time spent in the industry our competent engineers are able estimate the cost of production, what client is expented to spend throughout the project life span.",
  },
];

const images = [
  "/kaikaita/kaikaita60.jpg",
  "/kaikaita/kaikaita59.jpg",
  "/kaikaita/kaikaita58.jpg",
  "/kaikaita/kaikaita54.jpg",
  "/kaikaita/kaikaita71.jpg",
  "/kaikaita/kaikaita72.jpg",
  "/kaikaita/kaikaita73.jpg",
];
