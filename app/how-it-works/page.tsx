import Link from 'next/link';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-3xl font-bold text-gray-900">
              Hamba<span className="text-green-600">Rides</span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">← Back to Home</Link>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">How It Works</h1>
          <p className="text-xl text-gray-600">Simple, fast, and reliable rides in just a few taps</p>
        </div>
      </section>

      {/* For Riders */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">For Riders</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">📱</div>
              <div className="text-green-600 font-bold text-lg mb-3">Step 1</div>
              <h3 className="text-xl font-bold mb-3">Download the App</h3>
              <p className="text-gray-600">Get Hamba Rides from the App Store or Google Play. Sign up with your phone number and email.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">📍</div>
              <div className="text-green-600 font-bold text-lg mb-3">Step 2</div>
              <h3 className="text-xl font-bold mb-3">Request a Ride</h3>
              <p className="text-gray-600">Enter your destination, choose your ride type, and request. See the fare estimate before confirming.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">🚗</div>
              <div className="text-green-600 font-bold text-lg mb-3">Step 3</div>
              <h3 className="text-xl font-bold mb-3">Get Matched</h3>
              <p className="text-gray-600">A nearby driver accepts your request. Track their arrival in real-time and see driver details.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">💳</div>
              <div className="text-green-600 font-bold text-lg mb-3">Step 4</div>
              <h3 className="text-xl font-bold mb-3">Ride & Pay</h3>
              <p className="text-gray-600">Enjoy your ride! Pay with cash or card. Rate your driver and receive a digital receipt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Drivers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">For Drivers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-4">📝</div>
              <div className="text-green-600 font-bold mb-2">Step 1</div>
              <h3 className="text-lg font-bold mb-3">Apply Online</h3>
              <p className="text-gray-600">Submit your application with driver's license, PDP, vehicle registration, and insurance documents.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-4">✅</div>
              <div className="text-green-600 font-bold mb-2">Step 2</div>
              <h3 className="text-lg font-bold mb-3">Get Verified</h3>
              <p className="text-gray-600">We verify your documents, conduct background checks, and inspect your vehicle. Takes 2-3 business days.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-4">🟢</div>
              <div className="text-green-600 font-bold mb-2">Step 3</div>
              <h3 className="text-lg font-bold mb-3">Go Online</h3>
              <p className="text-gray-600">Download the driver app, complete orientation, and go online whenever you want to start earning.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-4">💰</div>
              <div className="text-green-600 font-bold mb-2">Step 4</div>
              <h3 className="text-lg font-bold mb-3">Start Earning</h3>
              <p className="text-gray-600">Accept ride requests, complete trips, and keep 85% of every fare. Get paid weekly to your bank account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Fast Matching</h3>
              <p className="text-gray-600">Get matched with nearby drivers in seconds. Average wait time under 3 minutes.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">See fare estimates before booking. No surge pricing surprises. What you see is what you pay.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Safety First</h3>
              <p className="text-gray-600">All drivers verified with background checks. Share trips with emergency contacts in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8">Join thousands of riders and drivers across Gauteng</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition">Download Rider App</Link>
            <Link href="/drive" className="px-8 py-4 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition">Become a Driver</Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div><h3 className="text-xl font-bold mb-4">HambaRides</h3><p className="text-gray-400">Your trusted ride partner in Gauteng</p></div>
            <div><h4 className="font-semibold mb-4">Company</h4><ul className="space-y-2 text-gray-400"><li><Link href="/about" className="hover:text-white">About Us</Link></li><li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li><li><Link href="/contact" className="hover:text-white">Contact</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Services</h4><ul className="space-y-2 text-gray-400"><li><Link href="/features" className="hover:text-white">Features</Link></li><li><Link href="/pricing" className="hover:text-white">Pricing</Link></li><li><Link href="/safety" className="hover:text-white">Safety</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Legal</h4><ul className="space-y-2 text-gray-400"><li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li><li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li><li><Link href="/faq" className="hover:text-white">FAQ</Link></li></ul></div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"><p>&copy; 2026 Hamba Rides (Pty) Ltd. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  );
}
