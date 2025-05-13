import { Menu, X } from "lucide-react";
import Image from "next/image";

function Navbar({ isOpen, setisOpen }) {
  return (
    <div className="flex sticky top-0 z-10 bg-blue-600 items-center justify-between p-4">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={50}
        height={50}
        className="w-8 h-8 object-cover rounded-full"
      />

      <span className="flex items-center justify-center">
        <p className={`${isOpen ? "hidden" : "text-white text-xl"}`}>Menu</p>
        {isOpen ? (
          <X
            onClick={() => setisOpen(false)}
            className="text-white"
            size={40}
          />
        ) : (
          <Menu
            onClick={() => setisOpen(true)}
            className="text-white"
            size={40}
          />
        )}
      </span>
    </div>
  );
}

export default Navbar;
