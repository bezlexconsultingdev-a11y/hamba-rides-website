import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Hamba Rides" width={180} height={50} className="h-12 w-auto" />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 font-medium">How It Works</Link>
              <Link href="/safety" className="text-gray-600 hover:text-gray-900 font-medium">Safety</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</Link>
              <Link href="/drive" className="text-gray-600 hover:text-gray-900 font-medium">Drive &amp; Earn</Link>
              <Link href="/faq" className="text-gray-600 hover:text-gray-900 font-medium">FAQ</Link>
            </div>
            <div className="flex space-x-3">
              <Link href="/contact" className="px-5 py-2.5 text-gray-900 hover:bg-gray-50 rounded-full font-medium transition text-sm">Contact</Link>
              <Link href="/drive" className="px-5 py-2.5 bg-green-600 text-white rounded-full hover:bg-green-700 font-medium transition shadow-sm text-sm">Start Driving</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Riding is the new driving
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                The freedom to go anywhere across Gauteng without paying for parking, fuel, or maintenance. All you need is an app and a destination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl">
                  Download App
                </button>
                <button className="px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-50 transition border-2 border-gray-200">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-96 md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Image 
                  src="/images/rider-app-mockup.png" 
                  alt="Hamba Rides App" 
                  fill 
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our services</h2>
            <p className="text-lg text-gray-600">Everything you need to move around Gauteng</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow cursor-pointer group border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🚗</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition">Rides</h3>
              <p className="text-gray-600 mb-6">Request in seconds, ride in minutes. Safe, affordable rides across Gauteng.</p>
              <Link href="/how-it-works" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">Get started →</Link>
            </div>
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow cursor-pointer group border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-3xl mb-6">♀️</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition">Women-Only Rides</h3>
              <p className="text-gray-600 mb-6">Verified female drivers for enhanced safety and peace of mind.</p>
              <Link href="/safety" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">Learn more →</Link>
            </div>
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow cursor-pointer group border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">📍</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition">Multi-Stop Rides</h3>
              <p className="text-gray-600 mb-6">Add multiple destinations to your journey for just R5 per stop.</p>
              <Link href="/features" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Making cities for people, not cars.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're making Gauteng more accessible, offering better alternatives for every purpose a private car serves — safe rides, flexible payments, and women-only options.
            </p>
            <a href="#" className="text-green-600 font-semibold text-lg hover:text-green-700 inline-flex items-center">
              Our mission →
            </a>
          </div>
        </div>
      </section>

      {/* Driver Earnings Section */}
      <section id="drive" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Earn money with Hamba Rides</h2>
            <p className="text-xl text-gray-300">Join thousands of drivers across Gauteng earning on their own schedule</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[{ value: '85%', label: 'Of every fare you keep' }, { value: 'R14 500', label: 'Avg. full-time monthly' }, { value: 'Weekly', label: 'Bank payouts, no delays' }].map((s) => (
              <div key={s.label} className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-green-400 mb-1">{s.value}</div>
                <div className="text-gray-300 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-3">Drive and earn money</h3>
              <p className="text-gray-300 mb-6">Set your own hours. Keep 85% of every fare. Weekly payouts to your bank.</p>
              <Link href="/drive" className="inline-block px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition">
                Register to drive
              </Link>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">View requirements &amp; earnings</h3>
              <p className="text-gray-300 mb-6">See exactly what you need to qualify and how much you can earn with Hamba.</p>
              <Link href="/drive#requirements" className="inline-block px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
                See requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Your safety is our priority</h2>
              <p className="text-xl text-gray-600 mb-8">We've built comprehensive safety features into every ride</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Verified Drivers</h4>
                    <p className="text-gray-600">Background checks, PDP verification, and continuous monitoring</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Live Trip Sharing</h4>
                    <p className="text-gray-600">Share your ride details with emergency contacts in real-time</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">24/7 Support</h4>
                    <p className="text-gray-600">Our support team is always available to help</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Women-Only Rides</h4>
                    <p className="text-gray-600">Verified female drivers for enhanced safety and comfort</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-96 md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center text-8xl">
                🛡️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Download our apps</h2>
          <p className="text-xl text-green-100 mb-12">Available for iOS and Android devices</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg inline-flex items-center justify-center">
              <span className="mr-2">📱</span> Download on App Store
            </button>
            <button className="px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition shadow-lg inline-flex items-center justify-center">
              <span className="mr-2">📱</span> Get it on Google Play
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-3">Hamba<span className="text-green-500">Rides</span></div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">Safe, affordable rides across Gauteng. Connecting riders with verified drivers 24/7.</p>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-sm transition">f</a>
                <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-sm transition">𝕏</a>
                <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-sm transition">in</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Company</h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
                <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Drivers</h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><Link href="/drive" className="hover:text-white transition">Drive &amp; Earn</Link></li>
                <li><Link href="/driver-terms" className="hover:text-white transition">Driver Agreement</Link></li>
                <li><Link href="/safety" className="hover:text-white transition">Safety</Link></li>
                <li><Link href="/faq" className="hover:text-white transition">Driver FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Legal</h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/cookie-policy" className="hover:text-white transition">Cookie Policy</Link></li>
                <li><Link href="/refund-policy" className="hover:text-white transition">Refund Policy</Link></li>
                <li><Link href="/rider-terms" className="hover:text-white transition">Rider Agreement</Link></li>
                <li><Link href="/driver-terms" className="hover:text-white transition">Driver Agreement</Link></li>
                <li><Link href="/acceptable-use" className="hover:text-white transition">Acceptable Use</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Hamba Rides (Pty) Ltd. Registered in South Africa. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-gray-300 transition">Privacy</Link>
              <Link href="/terms-of-service" className="hover:text-gray-300 transition">Terms</Link>
              <Link href="/acceptable-use" className="hover:text-gray-300 transition">Acceptable Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
