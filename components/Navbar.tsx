import Link from "next/link";
export default function Navbar() {
  return (
    <div className="lg:w-[70%] md:w-[90%] sm:w-[90%] responsive-nav flex justify-evenly items-center mt-6 mx-auto rounded-3xl px-2 border border-dotted border-[#686868]">
      <Link
        href="/"
        className="w-[7rem] rounded-3xl p-2 flex items-center justify-center hover:bg-black hover:text-[#ece2d0] transition-all"
      >
        HOME
      </Link>
      <Link
        href="/product"
        className="w-[7rem] rounded-3xl p-2 flex items-center justify-center hover:bg-black hover:text-[#ece2d0] transition-all"
      >
        PRODUCT
      </Link>
      <div className="w-[7rem] p-2 flex items-center justify-center text-5xl cursor-default">
        &#8460;
      </div>
      <Link
        href="/about"
        className="w-[7rem] rounded-3xl p-2 flex items-center justify-center hover:bg-black hover:text-[#ece2d0] transition-all"
      >
        ABOUT
      </Link>
      <Link
        href="/contact"
        className="w-[7rem] rounded-3xl p-2 flex items-center justify-center hover:bg-black hover:text-[#ece2d0] transition-all"
      >
        CONTACT
      </Link>
    </div>
  );
}
