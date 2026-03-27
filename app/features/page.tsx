import Link from 'next/link';

export default function Features() {
  const features = [
    { icon: "🛡️", title: "Women-Only Rides", desc: "Female riders can request rides exclusively from verified female drivers for enhanced safety and comfort." },
    { icon: "📍", title: "Multi-Stop Rides", desc: "Add up to 5 stops to your journey for just R5 per additional stop. Perfect for errands or picking up friends." },
    { icon: "📱", title: "Live Trip Sharing", desc: "Share your real-time location and trip details with emergency contacts for peace of mind." },
    { icon: "💬", title: "In-App Chat", desc: "Communicate with your driver without sharing phone numbers. Quick replies for common messages." },
    { icon: "🚨", title: "Emergency Button", desc: "One-tap emergency alert sends your location to emergency contacts and our support team instantly." },
    { icon: "💳", title: "Flexible Payments", desc: "Pay with cash, card via Paystack, or save payment methods for faster checkout." },
    { icon: "📅", title: "Scheduled Rides", desc: "Book rides up to 90 days in advance for airport transfers, meetings, or important appointments." },
    { icon: "⭐", title: "Driver Ratings", desc: "Rate drivers after each trip. View driver ratings and reviews before accepting a match." },
    { icon: "🎯", title: "Favorite Locations", desc: "Save frequently visited places like home, work, or gym for one-tap booking." },
    { icon: "💰", title: "Transparent Pricing", desc: "See exact fare estimates before booking. No hidden fees or surprise charges." },
    { icon: "🔔", title: "Real-Time Tracking", desc: "Track your driver's arrival in real-time. Get notifications when they're nearby." },
    { icon: "📧", title: "Digital Receipts", desc: "Automatic email receipts with detailed trip information and fare breakdown after every ride." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-3xl font-bold text-gray-900">Hamba<span className="text-green-600">Rides</span></Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">← Back to Home</Link>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Features</h1>
          <p className="text-xl text-gray-600">Everything you need for safe, convenient rides across Gauteng</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl text-green-100 mb-8">Download Hamba Rides today and enjoy all these features</p>
          <Link href="/" className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition inline-block">Download Now</Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div><h3 className="text-xl font-bold mb-4">HambaRides</h3><p className="text-gray-400">Your trusted ride partner</p></div>
            <div><h4 className="font-semibold mb-4">Company</h4><ul className="space-y-2 text-gray-400"><li><Link href="/about" className="hover:text-white">About</Link></li><li><Link href="/contact" className="hover:text-white">Contact</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Services</h4><ul className="space-y-2 text-gray-400"><li><Link href="/pricing" className="hover:text-white">Pricing</Link></li><li><Link href="/safety" className="hover:text-white">Safety</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Legal</h4><ul className="space-y-2 text-gray-400"><li><Link href="/privacy-policy" className="hover:text-white">Privacy</Link></li><li><Link href="/faq" className="hover:text-white">FAQ</Link></li></ul></div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"><p>&copy; 2026 Hamba Rides (Pty) Ltd.</p></div>
        </div>
      </footer>
    </div>
  );
}
