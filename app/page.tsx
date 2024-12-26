// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Discover the beauty of mathematics
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Join our community of mathematical enthusiasts at SRM Chennai and
            explore the fascinating world of numbers, patterns, and mathematical
            concepts.
          </p>
          <div className="space-x-4">
            <Link href="/events" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                Explore Events
            </Link>
            <Link href="/about" className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200">
                Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Upcoming Events */}
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 mx-auto"
                >
                  <path d="M6 2a1 1 0 00-1 1v1H3a2 2 0 00-2 2v2h22V6a2 2 0 00-2-2h-2V3a1 1 0 00-1-1H6zM1 10v8a2 2 0 002 2h18a2 2 0 002-2v-8H1zm7.5 4a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
              <p className="text-gray-600 mb-4">
                Discover our exciting lineup of events happening soon.
              </p>
              <Link href="/events" className="text-blue-600 hover:underline">Learn More →
              </Link>
            </div>

            {/* Card 2: About the Team */}
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 mx-auto"
                >
                  <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">About the Team</h3>
              <p className="text-gray-600 mb-4">
                Meet the people behind the success of our club.
              </p>
              <Link href="/team" className="text-blue-600 hover:underline">Meet the Team →
              </Link>
            </div>

            {/* Card 3: Gallery */}
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition">
              <div className="text-purple-600 text-4xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 mx-auto"
                >
                  <path d="M8.5 10.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-5.5A2.5 2.5 0 106 8 2.5 2.5 0 008.5 5zM14.5 14.5h-10l3-4 2 2.5 3-4zm6.5 4h-10v2H21z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Gallery</h3>
              <p className="text-gray-600 mb-4">
                Explore moments from our past events and activities.
              </p>
              <Link href="/gallery" className="text-blue-600 hover:underline">View Gallery →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
