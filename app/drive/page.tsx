import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drive & Earn',
  description: 'Become a Hamba Rides driver in Gauteng. Keep 85% of every fare. Flexible hours, weekly payouts.',
};

export default function Drive() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-3xl font-bold text-gray-900">
              Hamba<span className="text-green-600">Rides</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">For Riders</Link>
              <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 font-medium">How It Works</Link>
              <Link href="/faq" className="text-gray-600 hover:text-gray-900 font-medium">FAQ</Link>
            </div>
            <a href="#apply" className="px-6 py-2.5 bg-green-600 text-white rounded-full hover:bg-green-700 font-semibold transition shadow-sm">
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-green-600/20 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                🚗 Now recruiting drivers across Gauteng
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Drive on your<br />
                <span className="text-green-400">own schedule</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Keep <strong className="text-white">85% of every fare</strong>. No shifts. No bosses. Work whenever you want — mornings, evenings, weekends. Your car, your rules.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#apply" className="px-8 py-4 bg-green-500 text-white rounded-full text-lg font-semibold hover:bg-green-400 transition shadow-lg text-center">
                  Start Application
                </a>
                <a href="#requirements" className="px-8 py-4 bg-white/10 text-white rounded-full text-lg font-semibold hover:bg-white/20 transition border border-white/20 text-center">
                  View Requirements
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '85%', label: 'Of every fare you keep' },
                { value: 'Weekly', label: 'Payout to your bank' },
                { value: '24/7', label: 'In-app driver support' },
                { value: '2-3 days', label: 'Approval turnaround' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-400 mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What could you earn?</h2>
            <p className="text-gray-600 text-lg">Based on typical driver activity in Gauteng</p>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-gray-50 rounded-2xl">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Part-Time</div>
                <div className="text-4xl font-bold text-gray-900 mb-1">R4 800</div>
                <div className="text-gray-500 text-sm">~15 hrs/week</div>
                <div className="mt-4 text-sm text-green-600 font-medium">~3 rides per day</div>
              </div>
              <div className="p-6 bg-green-600 rounded-2xl text-white relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                <div className="text-sm font-semibold text-green-200 uppercase tracking-wide mb-2">Full-Time</div>
                <div className="text-4xl font-bold mb-1">R14 500</div>
                <div className="text-green-200 text-sm">~40 hrs/week</div>
                <div className="mt-4 text-sm text-green-100 font-medium">~8 rides per day</div>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Top Earner</div>
                <div className="text-4xl font-bold text-gray-900 mb-1">R22 000+</div>
                <div className="text-gray-500 text-sm">~50+ hrs/week</div>
                <div className="mt-4 text-sm text-green-600 font-medium">Peak hours + bonuses</div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-8">* Estimates based on average fares. Actual earnings vary by hours, location, and demand.</p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Requirements</h2>
            <p className="text-gray-600 text-lg">Make sure you meet these before applying</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">👤</div>
              <h3 className="text-xl font-bold mb-4">Personal Requirements</h3>
              <ul className="space-y-3">
                {[
                  'Age 21 or older',
                  'Valid South African ID or permit',
                  'Clean criminal record (police clearance)',
                  'Smartphone (Android 8+ or iOS 14+)',
                  'South African bank account',
                ].map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span className="text-gray-600 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🚗</div>
              <h3 className="text-xl font-bold mb-4">Vehicle Requirements</h3>
              <ul className="space-y-3">
                {[
                  '2015 model year or newer',
                  '4-door sedan, SUV, or hatchback',
                  'Valid roadworthy certificate',
                  'Valid licence disk',
                  'Commercial insurance cover',
                  'Clean interior and exterior',
                ].map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span className="text-gray-600 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center text-3xl mb-6">📄</div>
              <h3 className="text-xl font-bold mb-4">Documents Required</h3>
              <ul className="space-y-3">
                {[
                  "Valid driver's licence (code 08+)",
                  'Professional Driving Permit (PrDP)',
                  'Vehicle registration papers',
                  'Commercial vehicle insurance',
                  'Police clearance certificate',
                  'Proof of bank account',
                ].map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span className="text-gray-600 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works for drivers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">How to get started</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', icon: '📱', title: 'Download the Driver App', desc: 'Get the Hamba Driver app from the App Store or Google Play and create your account.' },
              { step: '02', icon: '📄', title: 'Submit Your Documents', desc: 'Upload your licence, PrDP, vehicle registration, insurance, and police clearance in the app.' },
              { step: '03', icon: '✅', title: 'Get Verified', desc: 'Our team reviews your documents and completes a background check. Approval takes 2–3 business days.' },
              { step: '04', icon: '💰', title: 'Start Earning', desc: 'Go online, accept rides, and watch the money roll in. Weekly payouts directly to your bank account.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-8xl font-black text-gray-100 absolute -top-4 -left-2 select-none">{item.step}</div>
                <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Why drive with Hamba?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: 'Keep 85% of every fare', desc: 'The highest driver share in South Africa. No weekly fees or rental costs.' },
              { icon: '⏰', title: 'Work when you want', desc: 'No minimum hours. Drive mornings, evenings, weekends — your schedule, your choice.' },
              { icon: '📊', title: 'Transparent earnings', desc: 'See your earnings in real-time. Full breakdown of fares, tips, and weekly totals.' },
              { icon: '🏦', title: 'Weekly bank payouts', desc: 'Your earnings land in your account every week. No waiting, no hassle.' },
              { icon: '📱', title: 'Simple driver app', desc: 'Easy-to-use app with GPS navigation, ride management, and earnings dashboard.' },
              { icon: '🛡️', title: '24/7 driver support', desc: 'Our support team is always available via in-app chat to help resolve any issues.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-2xl hover:bg-gray-50 transition">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="py-20 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start earning?</h2>
          <p className="text-xl text-gray-300 mb-10">Download the Hamba Driver app and complete your application in minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold hover:bg-gray-100 transition">
              <span className="text-2xl">🍎</span>
              <div className="text-left">
                <div className="text-xs text-gray-500">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </a>
            <a href="#" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold hover:bg-gray-100 transition">
              <span className="text-2xl">▶️</span>
              <div className="text-left">
                <div className="text-xs text-gray-500">Get it on</div>
                <div className="font-bold">Google Play</div>
              </div>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Have questions? Read our <Link href="/faq" className="text-green-400 hover:underline">Driver FAQ</Link> or{' '}
            <Link href="/contact" className="text-green-400 hover:underline">contact support</Link>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-3">Hamba<span className="text-green-500">Rides</span></div>
              <p className="text-gray-400 text-sm">Your trusted ride partner in Gauteng</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Drivers</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/drive" className="hover:text-white">Drive &amp; Earn</Link></li>
                <li><Link href="/driver-terms" className="hover:text-white">Driver Agreement</Link></li>
                <li><Link href="/faq" className="hover:text-white">Driver FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Riders</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link href="/safety" className="hover:text-white">Safety</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Hamba Rides (Pty) Ltd. Registered in South Africa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
