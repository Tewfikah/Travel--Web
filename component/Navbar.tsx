import Image from "next/image"; // 17.7K (gzipped: 6.4K)
import Link from "next/link"; // 40.5K (gzipped: 11.9K)

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-md border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-8 h-16">
          <Link href={"/"} className="flex items-center">
            <Image src={"/logo.jpeg"} alt={"logo"} width={50} height={50} />
            <span className="text-2xl font-bold text-gray-800">
              {/* " " */}
              EthioTravel
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href={"/trips"} className="text-slate-900 hover:text-sky-500">
              My Trips
            </Link>
            <Link href={"/globe"} className="text-slate-900 hover:text-sky-500">
              Globe
            </Link>

            <button>
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}