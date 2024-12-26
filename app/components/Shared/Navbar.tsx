// app/components/Shared/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-blue-600 font-bold text-xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5l-8 8 3.5 3.5L12 7.5l4.5 4.5L20 12l-8-8z"
              />
            </svg>
            Ramanujan Math Club
        </Link>
        {/* Links */}
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/events" className="hover:text-blue-600">Events
          </Link>
          <Link href="/team" className="hover:text-blue-600">Team
          </Link>
          <Link href="/contact" className="hover:text-blue-600">Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
