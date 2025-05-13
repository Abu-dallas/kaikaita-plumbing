import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <div>
      <p className="text-2xl font-bold text-slate-600 mx-6 mt-18">
        Recent Projects
      </p>
      <div className="grid grid-cols-1 gap-6 mt-6 content-center justify-center md:grid-cols-3">
        {Works.map((work, index) => (
          <div key={index} className="p-4">
            <Image
              src={work.image}
              alt="works"
              width={2000}
              height={2000}
              className="w-full h-72"
            />
            <p className="text-center pt-4 text-3xl text-slate-700 font-bold">
              {work.title}
            </p>
            <div className="w-full text-center p-2 flex items-center justify-center gap-2">
              <MapPin size={20} fill="blue" color="white" />
              <Link href="#" className="text-sm text-center underline">
                {work.location}
              </Link>
            </div>
            <p className="text-lg  text-center text-slate-500">{work.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

const Works = [
  {
    title: "Tank Washing/Water Treatment",
    location: "Gombe state, Nigeria",
    desc: "Toilet Installation We provide professional toilet installation services that ensure proper alignment, secure fittings, and efficient water usage. Our team handles everything from positioning to sealing, delivering functionality, hygiene, and comfort in every setup",
    image: "/kaikaita/kaikaita58.jpg",
  },
  {
    title: "Borehold",
    location: "Gombe state, Nigeria",
    desc: "Boreholes offer a sustainable solution for accessing clean underground water. Expert drilling ensures precise depth and location for optimal water yield. High-quality materials are used to guarantee long-lasting performance.",
    image: "/kaikaita/kaikaita57.jpg",
  },
  {
    title: "Piping",
    location: "Gombe state, Nigeria",
    desc: "Our piping services are designed for long-term reliability, using high-quality materials to prevent leaks and corrosion. We lay out precise pipe networks for both hot and cold water systems, tailored to your building’s needs.",
    image: "/kaikaita/kaikaita72.jpg",
  },
  {
    title: "Toilet",
    location: "Gombe state, Nigeria",
    desc: "Toilet Installation We provide professional toilet installation services that ensure proper alignment, secure fittings, and efficient water usage. Our team handles everything from positioning to sealing, delivering functionality, hygiene, and comfort in every setup",
    image: "/kaikaita/kaikaita54.jpg",
  },
];
