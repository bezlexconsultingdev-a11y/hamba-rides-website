import Link from 'next/link';

export default function Safety() {
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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Your Safety is Our Priority</h1>
          <p className="text-xl text-gray-600">Comprehensive safety features built into every ride</p>
        </div>
      </section>

      {/* Driver Verification */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Verified Drivers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Background Checks</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><span className="text-green-600 text-2xl mr-3">✓</span><div><strong>Police Clearance:</strong> All drivers must provide recent police clearance certificates</div></li>
                <li className="flex items-start"><span className="text-green-600 text-2xl mr-3">✓</span><div><strong>Criminal Record Check:</strong> Comprehensive background screening for safety violations</div></li>
                <li className="flex items-start"><span className="text-green-600 text-2xl mr-3">✓</span><div><strong>Identity Verification:</strong> ID verification and address confirmation</div></li>
                <li className="flex items-start"><span className="text-green-600 text-2xl mr-3">✓</span><div><strong>Continuous Monitoring:</strong> Ongoing performance and safety reviews</div></li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Driver Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><span className="text-green-600 text-2xl mr-3">✓</span><div><strong>Professional Driving Permit (PDP):</strong> Valid PDP required for all drivers</div></li>
                <li className="flex items-start"><span className="text-green-600 text-2xl mr-3">✓</span><div><strong>Driving Experience:</strong> Minimum 2 years licensed driving experience</div></li>
                <li className="flex items-start"><span className="text-green-600 text-2xl mr-3">✓</span><div><strong>Vehicle Inspection:</strong> Regular safety inspections and maintenance checks</div></li>
                <li className="flex items-start"><span className="text-green-600 text-2xl mr-3">✓</span><div><strong>Insurance:</strong> Comprehensive insurance coverage verified</div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">In-App Safety Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl"><div className="text-5xl mb-4">📱</div><h3 className="text-xl font-bold mb-3">Live Trip Sharing</h3><p className="text-gray-700">Share your real-time location and trip details with up to 5 emergency contacts. They can track your journey from start to finish.</p></div>
            <div className="bg-white p-8 rounded-2xl"><div className="text-5xl mb-4">🚨</div><h3 className="text-xl font-bold mb-3">Emergency Button</h3><p className="text-gray-700">One-tap emergency alert instantly notifies our support team and your emergency contacts with your exact location.</p></div>
            <div className="bg-white p-8 rounded-2xl"><div className="text-5xl mb-4">📹</div><h3 className="text-xl font-bold mb-3">Ride Recording</h3><p className="text-gray-700">With consent, rides can be recorded for safety. Recordings stored securely for 30 days unless part of an incident.</p></div>
            <div className="bg-white p-8 rounded-2xl"><div className="text-5xl mb-4">⭐</div><h3 className="text-xl font-bold mb-3">Driver Ratings</h3><p className="text-gray-700">View driver ratings and reviews before accepting a match. Rate your driver after each trip to help maintain quality.</p></div>
            <div className="bg-white p-8 rounded-2xl"><div className="text-5xl mb-4">🔔</div><h3 className="text-xl font-bold mb-3">Real-Time Tracking</h3><p className="text-gray-700">Track your driver's arrival and your journey in real-time. Get notifications when your driver is nearby.</p></div>
            <div className="bg-white p-8 rounded-2xl"><div className="text-5xl mb-4">💬</div><h3 className="text-xl font-bold mb-3">In-App Chat</h3><p className="text-gray-700">Communicate with your driver without sharing phone numbers. All messages are monitored for safety.</p></div>
          </div>
        </div>
      </section>

      {/* Women-Only Rides */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Women-Only Rides</h2>
              <p className="text-xl text-gray-700 mb-6">Female passengers can request rides exclusively from verified female drivers for enhanced safety and comfort.</p>
              <ul className="space-y-4">
                <li className="flex items-start"><span className="text-green-600 text-2xl mr-3">✓</span><div><strong>Verified Female Drivers:</strong> All female drivers undergo additional verification</div></li>
                <li className="flex items-start"><span className="text-green-600 text-2xl mr-3">✓</span><div><strong>Optional Feature:</strong> Enable in settings for all future rides</div></li>
                <li className="flex items-start"><span className="text-green-600 text-2xl mr-3">✓</span><div><strong>Same Pricing:</strong> No additional cost for women-only rides</div></li>
                <li className="flex items-start"><span className="text-green-600 text-2xl mr-3">✓</span><div><strong>Privacy Protected:</strong> Your preference is kept confidential</div></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-12 text-center">
              <div className="text-8xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900">Enhanced Safety</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">24/7 Support Team</h2>
          <p className="text-xl text-gray-700 mb-8">Our dedicated safety team is available around the clock to assist with any concerns or emergencies.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl"><div className="text-4xl mb-3">📞</div><h3 className="font-bold mb-2">Phone Support</h3><p className="text-gray-700">Call us anytime at +27 XX XXX XXXX</p></div>
            <div className="bg-white p-6 rounded-xl"><div className="text-4xl mb-3">💬</div><h3 className="font-bold mb-2">In-App Chat</h3><p className="text-gray-700">Instant messaging with support team</p></div>
            <div className="bg-white p-6 rounded-xl"><div className="text-4xl mb-3">📧</div><h3 className="font-bold mb-2">Email Support</h3><p className="text-gray-700">safety@HambaRides.co.za</p></div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Safety Tips</h2>
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-xl"><h3 className="font-bold text-lg mb-2">✓ Verify Your Driver</h3><p className="text-gray-700">Always check the driver's photo, name, vehicle make/model, and license plate before getting in.</p></div>
            <div className="bg-green-50 p-6 rounded-xl"><h3 className="font-bold text-lg mb-2">✓ Share Your Trip</h3><p className="text-gray-700">Use the trip sharing feature to let friends or family track your journey in real-time.</p></div>
            <div className="bg-green-50 p-6 rounded-xl"><h3 className="font-bold text-lg mb-2">✓ Sit in the Back</h3><p className="text-gray-700">For added personal space and safety, sit in the back seat of the vehicle.</p></div>
            <div className="bg-green-50 p-6 rounded-xl"><h3 className="font-bold text-lg mb-2">✓ Trust Your Instincts</h3><p className="text-gray-700">If something doesn't feel right, use the emergency button or ask the driver to end the trip.</p></div>
            <div className="bg-green-50 p-6 rounded-xl"><h3 className="font-bold text-lg mb-2">✓ Keep Valuables Secure</h3><p className="text-gray-700">Keep your phone, wallet, and other valuables secure and within reach at all times.</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ride with Confidence</h2>
          <p className="text-xl text-green-100 mb-8">Download Hamba Rides and experience safe, reliable transportation</p>
          <Link href="/" className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition inline-block">Download App</Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div><h3 className="text-xl font-bold mb-4">HambaRides</h3><p className="text-gray-400">Your trusted ride partner</p></div>
            <div><h4 className="font-semibold mb-4">Company</h4><ul className="space-y-2 text-gray-400"><li><Link href="/about" className="hover:text-white">About</Link></li><li><Link href="/contact" className="hover:text-white">Contact</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Services</h4><ul className="space-y-2 text-gray-400"><li><Link href="/features" className="hover:text-white">Features</Link></li><li><Link href="/pricing" className="hover:text-white">Pricing</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Legal</h4><ul className="space-y-2 text-gray-400"><li><Link href="/privacy-policy" className="hover:text-white">Privacy</Link></li><li><Link href="/faq" className="hover:text-white">FAQ</Link></li></ul></div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"><p>&copy; 2026 Hamba Rides (Pty) Ltd.</p></div>
        </div>
      </footer>
    </div>
  );
}
