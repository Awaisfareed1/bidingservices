import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-lg font-bold">MySite</h2>
          <p className="text-sm mt-2">
            Providing high-quality digital services.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Links</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Home</li>
            <li>Blogs</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>
          <Link href="mailto:admin@bidingservices.com" className="text-sm mt-2">
            admin@bidingservices.com
          </Link>
        </div>
      </div>

      <div className="text-center text-sm border-t border-gray-700 py-4">
        © 2026 MySite. All rights reserved.
      </div>
    </footer>
  );
}