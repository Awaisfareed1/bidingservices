import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 border-t border-[#1f1f1f] mt-20">

      <div className="xl:max-w-7xl lg:max-w-4xl md:max-w-2xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-white">
            Biding<span className="text-purple-500">Services</span>
          </h2>
          <p className="text-sm mt-3 text-gray-400">
            We help you land more interviews by applying to jobs on your behalf
            across multiple platforms.
          </p>
        </div>

        {/* NAV LINKS */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog/page/1" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>

          <Link
            href="mailto:admin@bidingservices.com"
            className="text-sm text-purple-400 hover:text-purple-300 transition"
          >
            admin@bidingservices.com
          </Link>

          <p className="text-xs text-gray-500 mt-3">
            Usually responds within 24 hours
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#1f1f1f] text-center text-sm text-gray-500 py-5">
        © {new Date().getFullYear()} BidingServices. All rights reserved.
      </div>

    </footer>
  );
}