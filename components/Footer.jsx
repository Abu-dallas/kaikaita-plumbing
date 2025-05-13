import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div>
        <div className="my-12 -mb-45 h-72 mt-24">
          <div className="w-full h-[350px]"></div>
          <div className="w-full flex flex-col gap-3 items-center justify-center  pt-6 pb-6 h-[250px]  bg-blue-600">
            <div className="bg-white rounded-full">
              <Image
                src={"/globe.svg"}
                width={2000}
                height={2000}
                alt="footer logo"
                className="w-14 h-14"
              />
            </div>
            <div className="flex items-center mt-4 text-white gap-3">
              <Link href="/coming-soon">Home</Link>
              <Link href="/coming-soon">Gallery</Link>
              <Link href="/coming-soon">Service</Link>
              <Link href="/coming-soon">About Us</Link>
              <Link href="/coming-soon">Contact</Link>
            </div>
            <div className="flex items-center text-white gap-6">
              <Link href="/coming-soon">
                <Facebook />
              </Link>
              <Link href="/coming-soon">
                <Twitter />
              </Link>
              <Link href="/coming-soon">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
