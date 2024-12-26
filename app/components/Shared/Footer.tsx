// app/components/Shared/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Club Info */}
          <div>
            <h3 className="font-bold text-lg">Ramanujan Math Club</h3>
            <p className="mt-2 text-sm">Unlocking the Beauty of Mathematics</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/events" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="/team" className="hover:underline">
                  Team
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg">Contact</h3>
            <p className="mt-2 text-sm">
              SRM Institute of Science and Technology
              <br />
              Chennai, Tamil Nadu
              <br />
              Email:{" "}
              <a href="mailto:contact@rmclub.edu" className="text-blue-400">
                contact@rmclub.edu
              </a>
            </p>
            <div className="mt-2 flex justify-center md:justify-start space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="0"
                  className="w-6 h-6"
                >
                  <path d="M7.5 2h9a5.5 5.5 0 015.5 5.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zM4.75 12A7.25 7.25 0 1012 4.75 7.25 7.25 0 004.75 12zm12.375-7.5a1.125 1.125 0 111.125-1.125 1.125 1.125 0 01-1.125 1.125z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="0"
                  className="w-6 h-6"
                >
                  <path d="M22.23 22.23H18.97v-5.44c0-1.3-.47-2.19-1.65-2.19-1.15 0-1.83.76-2.14 1.49-.11.26-.14.62-.14.98v5.16h-3.26s.04-8.38 0-9.26h3.26v1.31l-.02.03h.02v-.03a3.28 3.28 0 012.96-1.64c2.16 0 3.78 1.4 3.78 4.43v5.16zM5.4 8.32a1.88 1.88 0 110-3.75 1.88 1.88 0 010 3.75zM7.12 22.23H3.69V12.97h3.43v9.26zm15.12-20.98H1.76C.79 1.25 0 2.03 0 2.99v18.02c0 .96.79 1.74 1.76 1.74h20.48c.96 0 1.74-.79 1.74-1.76V2.99c0-.96-.78-1.74-1.74-1.74z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm">
          © 2025 Ramanujan Mathematics Club. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  