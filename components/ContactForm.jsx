import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

function ContactForm() {
  return (
    <div>
      <div className="my-12 h-72 mt-24 relative">
        <Image
          src="/bg2.jpg"
          width={2000}
          height={2000}
          alt="contact image"
          className="w-full h-[520px]"
        />
        <div className="w-full absolute top-0 pt-6 pb-12 h-[520px]  bg-blue-600">
          <div className="p-4 text-center">
            <p className="text-slate-100 p-6 text-2xl font-bold">CONTACT US</p>
            <p className="text-lg text-slate-200">
              If you are interested in finding more about our service, please
              feel free to send us a message and we will get you in touch.
            </p>
            <p className="text-lg text-slate-200">
              Altenatively, you can reach out to us via the following:
            </p>
          </div>
          <div className="p-6">
            <span className="flex my-3 gap-4">
              <Phone size={20} color="white" />
              <p className="text-lg underline underline-offset-2 text-slate-200">
                123456789
              </p>
            </span>
            <span className="flex mt-3 gap-4">
              <Mail size={20} color="white" />
              <p className="text-lg underline underline-offset-2 text-slate-200">
                kaikaita@gmail.com
              </p>
            </span>
            <span className="flex mt-3 gap-4">
              <MapPin size={25} color="white" />
              <p className="text-lg underline underline-offset-2 text-slate-200">
                jekada fari gadan mai alewa
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
