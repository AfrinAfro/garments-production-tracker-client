import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-[#071028] text-white">
        <button onClick={() => setOpen(true)}>
          <FiMenu size={24} />
        </button>

        <h1 className="font-bold text-xl">
          GarmentsPro
        </h1>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar drawer */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-full w-72 bg-[#081028] p-6 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar />
      </div>
    </>
  );
};

export default MobileSidebar;