import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-3xl font-bold text-gray-900">
              Hamba<span className="text-green-600">Rides</span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Hamba Rides
          </h1>
          <p className="text-xl text-gray-600">
            Making Gauteng more accessible, one ride at a time
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Hamba Rides was founded with a simple mission: to make transportation in Gauteng Province safe, affordable, and accessible for everyone. We believe that mobility is a fundamental right, and we're committed to providing reliable ride-hailing services that connect communities across Johannesburg, Pretoria, and beyond.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            We're not just building a ride-hailing app — we're building a movement towards sustainable urban mobility, creating economic opportunities for drivers, and ensuring that every South African can get where they need to go safely and affordably.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4">Safety First</h3>
              <p className="text-gray-700">
                Every driver is thoroughly vetted with background checks, PDP verification, and continuous monitoring. We've built comprehensive safety features including trip sharing, emergency buttons, and 24/7 support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Community Focus</h3>
              <p className="text-gray-700">
                We're committed to serving the communities of Gauteng. From women-only rides to supporting local drivers, we prioritize the needs of South Africans first.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">💚</div>
              <h3 className="text-2xl font-bold mb-4">Fair Earnings</h3>
              <p className="text-gray-700">
                Drivers keep 85% of every fare — one of the highest rates in the industry. We believe in fair compensation for the hardworking drivers who make our service possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Hamba Rides was born from a simple observation: Gauteng needed a ride-hailing service that truly understood and served the needs of South Africans. While international platforms dominated the market, we saw an opportunity to build something better — something local, something that prioritized safety, affordability, and community.
            </p>
            <p>
              Founded in 2025, we started with a small team of passionate technologists, drivers, and community advocates who believed that transportation should be accessible to everyone. We listened to riders who wanted safer options, especially women traveling alone. We talked to drivers who deserved better earnings and support. We engaged with communities that needed reliable, affordable transportation.
            </p>
            <p>
              Today, we're proud to serve thousands of riders and drivers across Gauteng Province. Our innovative features like women-only rides, multi-stop journeys, and transparent pricing have set new standards in the industry. But we're just getting started.
            </p>
            <p>
              As we grow, we remain committed to our founding principles: safety first, fair treatment for drivers, and accessible transportation for all. We're not just moving people from point A to point B — we're building the future of urban mobility in South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Hamba Rides by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-xl text-green-100">Rides Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2,500+</div>
              <div className="text-xl text-green-100">Active Drivers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">85%</div>
              <div className="text-xl text-green-100">Driver Earnings Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.8★</div>
              <div className="text-xl text-green-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Join Our Journey</h2>
          <p className="text-xl text-gray-700 mb-8">
            Whether you're a rider looking for safe, affordable transportation or a driver seeking fair earnings and flexible work, Hamba Rides is here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition">
              Download App
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HambaRides</h3>
              <p className="text-gray-400">Your trusted ride partner in Gauteng</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/safety" className="hover:text-white">Safety</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Hamba Rides (Pty) Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
