import { GalleryVertical, Home, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

function Sidebar({ isOpen }) {
  return (
    <div className={` ${isOpen ? "absolute  top-0 h-screen" : "hidden"}`}>
      <div className="w-[80%] z-10 h-screen bg-blue-800 py-4 transition-all duration-1000 ease-in-out  fixed top-0 left-0">
        <p className="text-center text-2xl border-b py-4 font-semibold text-white">
          Kaikaita Plumbing Services
        </p>
        <div className="flex items-start flex-col mt-12">
          {NavLinks.map((link, index) => (
            <Link
              className="flex w-full gap-6 px-6 py-4 text-lg hover:bg-slate-950 "
              key={index}
              href={link.href}
            >
              {link.icon}
              <p className="text-slate-200 text-xl font-semibold">
                {link.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

const NavLinks = [
  {
    title: "Home",
    href: "/",
    icon: <Home className="text-slate-200" size={30} />,
  },
  {
    title: "Gallery",
    href: "/gallery",
    icon: <GalleryVertical className="text-slate-200" size={30} />,
  },

  {
    title: "About Us",
    href: "/about",
    icon: <Users className="text-slate-200" size={30} />,
  },
];
