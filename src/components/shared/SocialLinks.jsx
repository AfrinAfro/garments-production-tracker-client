import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <a
        href="#"
        className="rounded-full bg-white/10 p-3 text-white transition hover:bg-cyan-500"
      >
        <FaFacebookF />
      </a>

      <a
        href="#"
        className="rounded-full bg-white/10 p-3 text-white transition hover:bg-cyan-500"
      >
        <FaInstagram />
      </a>

      <a
        href="#"
        className="rounded-full bg-white/10 p-3 text-white transition hover:bg-cyan-500"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="#"
        className="rounded-full bg-white/10 p-3 text-white transition hover:bg-cyan-500"
      >
        <FaXTwitter />
      </a>
    </div>
  );
};

export default SocialLinks;