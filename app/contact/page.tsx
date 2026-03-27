import Link from 'next/link';

export default function Contact() {
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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">We're here to help. Reach out anytime.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mr-4">📧</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">General: <a href="mailto:info@hambarides.co.za" className="text-green-600 hover:underline">info@hambarides.co.za</a></p>
                    <p className="text-gray-600">Support: <a href="mailto:info@hambarides.co.za" className="text-green-600 hover:underline">info@hambarides.co.za</a></p>
                    <p className="text-gray-600">Safety: <a href="mailto:info@hambarides.co.za" className="text-green-600 hover:underline">info@hambarides.co.za</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mr-4">📞</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">Support: +27 63 025 1274</p>
                    <p className="text-gray-600">Emergency: +27 63 025 1274 (24/7)</p>
                    <p className="text-gray-600 text-sm mt-2">Available: Mon-Sun, 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mr-4">📍</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office</h3>
                    <p className="text-gray-600">123 Business Street<br />Sandton, Johannesburg<br />Gauteng, 2196<br />South Africa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mr-4">💬</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Social Media</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600"><a href="#" className="text-green-600 hover:underline">Facebook</a></p>
                      <p className="text-gray-600"><a href="#" className="text-green-600 hover:underline">Twitter</a></p>
                      <p className="text-gray-600"><a href="#" className="text-green-600 hover:underline">Instagram</a></p>
                      <p className="text-gray-600"><a href="#" className="text-green-600 hover:underline">LinkedIn</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Rider Support</option>
                    <option>Driver Support</option>
                    <option>Safety Concern</option>
                    <option>Partnership</option>
                    <option>Media Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking for Quick Answers?</h2>
          <p className="text-xl text-gray-600 mb-8">Check out our FAQ page for answers to common questions</p>
          <Link href="/faq" className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition inline-block">View FAQ</Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div><h3 className="text-xl font-bold mb-4">HambaRides</h3><p className="text-gray-400">Your trusted ride partner</p></div>
            <div><h4 className="font-semibold mb-4">Company</h4><ul className="space-y-2 text-gray-400"><li><Link href="/about" className="hover:text-white">About</Link></li><li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Services</h4><ul className="space-y-2 text-gray-400"><li><Link href="/features" className="hover:text-white">Features</Link></li><li><Link href="/pricing" className="hover:text-white">Pricing</Link></li><li><Link href="/safety" className="hover:text-white">Safety</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Legal</h4><ul className="space-y-2 text-gray-400"><li><Link href="/privacy-policy" className="hover:text-white">Privacy</Link></li><li><Link href="/terms-of-service" className="hover:text-white">Terms</Link></li><li><Link href="/faq" className="hover:text-white">FAQ</Link></li></ul></div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"><p>&copy; 2026 Hamba Rides (Pty) Ltd. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  );
}
