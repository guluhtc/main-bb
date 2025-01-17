import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-gray-500 hidden md:block">
        Powered by DecorAI.xyz
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">

      <Link
            href="/terms"
            className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition"
          >
            <div>Terms and Privacy</div>
          </Link>

          <Link
            href="/refund"
            className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition"
          >
            <div>Refund Policy</div>
          </Link>

          <Link
            href="/faq"
            className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition"
          >
            <div>FAQ</div>
          </Link>
        <Link
          href="https://twitter.com/decorai_xyz"
          rel="noopener noreferrer" target="_blank"
          className="group"
          aria-label="TaxPal on Twitter"
        >
          <FaTwitter />
        </Link>

        <Link
          href="https://instagram.com/decorai.xyz"
          rel="noopener noreferrer" target="_blank"
          className="group"
          aria-label="TaxPal on Instagram"
        >
          <FaInstagram />
        </Link>
        <Link
          href="mailto:decorai.xyz@gmail.com"
          className="group"
          aria-label="TaxPal on Email"
        >
          <MdAlternateEmail />
        </Link>
      </div>
    </footer>
  );
}
