import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rider Agreement',
  description: 'Hamba Rides Rider Agreement – your rights and responsibilities as a rider on the Hamba Rides platform.',
};

export default function RiderTerms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Hamba<span className="text-green-600">Rides</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</Link>
              <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</Link>
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 font-medium">← Home</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-700 to-green-600 text-white px-10 py-10">
            <div className="text-green-200 text-sm font-semibold mb-2 uppercase tracking-wider">Legal Document</div>
            <h1 className="text-4xl font-bold mb-3">Rider Agreement</h1>
            <p className="text-green-100">Last Updated: 1 March 2026 &nbsp;|&nbsp; Effective Date: 1 March 2026</p>
          </div>

          <div className="px-10 py-10 space-y-10 text-gray-700 leading-relaxed">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-900">
              <strong>Please read this agreement carefully.</strong> By creating an account and requesting rides through the Hamba Rides application, you agree to the terms set out below.
            </div>

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>This Rider Agreement ("Agreement") governs your use of the Hamba Rides mobile application and transportation services as a passenger. It is entered into between you ("Rider") and Hamba Rides (Pty) Ltd, a company registered in the Republic of South Africa ("Hamba Rides").</p>
              <p className="mt-4">This Agreement should be read together with our <Link href="/terms-of-service" className="text-green-600 hover:underline">Terms of Service</Link> and <Link href="/privacy-policy" className="text-green-600 hover:underline">Privacy Policy</Link>, which are incorporated by reference.</p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility &amp; Account</h2>
              <ul className="space-y-3 list-none">
                {[
                  'You must be at least 18 years old to create a Hamba Rides account. If you are between 13 and 17, you may only use the service with the express consent and supervision of a parent or legal guardian who accepts this Agreement on your behalf.',
                  'You must provide accurate, truthful, and complete registration information including your full name, phone number, and email address.',
                  'You are responsible for maintaining the security of your account credentials. Do not share your password or allow others to use your account.',
                  'You may only hold one active rider account. Creating multiple accounts to circumvent ratings, bans, or policies is prohibited.',
                  'Hamba Rides reserves the right to verify your identity and to suspend or terminate accounts that violate these requirements.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Booking a Ride</h2>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">3.1 Requesting a Ride</h3>
              <p>When you submit a ride request through the app, Hamba Rides will attempt to match you with a nearby verified driver. You will be shown an estimated fare and estimated arrival time before confirming your booking. By confirming, you agree to pay the fare upon completion of the trip.</p>

              <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">3.2 Fare Estimates</h3>
              <p>Fare estimates are provided for informational purposes. The final fare may differ from the estimate due to route changes, traffic delays, additional stops, or waiting time. Fares are calculated in South African Rand (ZAR) inclusive of applicable taxes.</p>

              <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">3.3 Cancellations</h3>
              <p>You may cancel a ride request at any time before the driver arrives. Cancellations made after the driver has been en route for more than 2 minutes may attract a cancellation fee of up to R15, which will be charged to your registered payment method. The applicable cancellation fee will be disclosed in the app before your cancellation is confirmed.</p>

              <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">3.4 No-Shows</h3>
              <p>If you do not board the vehicle within a reasonable wait time (typically 5 minutes after the driver arrives and notifies you), the driver may mark the trip as a no-show. A no-show fee may apply. Excessive no-shows may result in account restrictions.</p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment</h2>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">4.1 Payment Methods</h3>
              <p>Hamba Rides accepts the following payment methods:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-gray-600">
                <li>Cash paid directly to the driver at the end of the trip</li>
                <li>Credit or debit card (Visa, Mastercard) processed via Paystack</li>
                <li>Saved payment methods on your account</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">4.2 Receipts</h3>
              <p>A digital receipt will be sent to your registered email address after each completed trip, detailing the route taken, distance, time, and fare breakdown.</p>

              <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">4.3 Disputes</h3>
              <p>If you believe you have been incorrectly charged, please contact support within 7 days of the trip via the in-app help centre. We will investigate and, where appropriate, issue a refund or fare adjustment within 5–10 business days.</p>

              <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">4.4 Tips</h3>
              <p>You may leave a tip for your driver through the app after a trip. Tips go entirely to the driver. Tips are optional and non-refundable once submitted.</p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Rider Conduct</h2>
              <p>You agree to behave responsibly and lawfully during your rides. You must not:</p>
              <ul className="mt-4 space-y-2 list-none">
                {[
                  'Be verbally or physically abusive, threatening, or disrespectful toward drivers',
                  'Cause damage to the driver\'s vehicle — you will be liable for repair costs',
                  'Consume alcohol or illegal substances in the vehicle',
                  'Request transportation of illegal items or substances',
                  'Ask the driver to violate traffic laws (speeding, illegal stops, etc.)',
                  'Smoke in the vehicle',
                  'Bring animals aboard without the driver\'s consent (registered service animals are exempt)',
                  'Travel with more passengers than the vehicle\'s stated capacity',
                  'Attempt to solicit personal information from drivers outside the app',
                  'Record the driver without their consent',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1 flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">Hamba Rides reserves the right to permanently deactivate accounts for serious misconduct and to pass on damage claims to riders where applicable.</p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Safety Features</h2>
              <p>Hamba Rides provides the following safety features for your protection:</p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  { icon: '🆔', text: 'Driver verification – all drivers undergo identity, licence, and criminal background checks before activation' },
                  { icon: '📍', text: 'Live trip sharing – share your real-time location with emergency contacts during any trip' },
                  { icon: '🚨', text: 'Emergency button – one-tap SOS alert that notifies emergency contacts and our safety team' },
                  { icon: '📞', text: 'Anonymised calling – contact your driver without revealing your personal phone number' },
                  { icon: '⭐', text: 'Two-way ratings – rate your driver and flag safety concerns after every trip' },
                  { icon: '♀️', text: 'Women-only rides – female riders may request female-only driver matching for additional comfort' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Ratings &amp; Reviews</h2>
              <p>After each completed trip, you will be prompted to rate your driver on a scale of 1 to 5 stars. Ratings are anonymous and used to maintain service quality. You may optionally leave a written review.</p>
              <p className="mt-4">You also receive a rider rating which drivers can see before accepting your request. Riders with consistently poor ratings (below 4.0) may experience reduced driver availability. Ratings reflect real experiences and must be given honestly.</p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p>Transportation services are provided by independent driver partners, not by Hamba Rides. Hamba Rides is a technology platform that facilitates the connection between riders and drivers.</p>
              <p className="mt-4">Hamba Rides is not liable for the acts or omissions of drivers, delays, accidents, personal injury, or property loss that occur during a ride, except where such liability arises from our own gross negligence or wilful misconduct.</p>
              <p className="mt-4">To the maximum extent permitted by South African law, Hamba Rides' total liability to you shall not exceed the total fares paid by you in the three months preceding the event giving rise to the claim.</p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy &amp; Data</h2>
              <p>Hamba Rides collects and processes your personal information in accordance with our <Link href="/privacy-policy" className="text-green-600 hover:underline">Privacy Policy</Link> and the Protection of Personal Information Act (POPIA). Your location data is used to match you with nearby drivers and to provide real-time trip tracking.</p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Complaints &amp; Support</h2>
              <p>We take your experience seriously. If you have a complaint about a ride, a driver, or any aspect of our service, please contact us:</p>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                {[
                  { icon: '📱', method: 'In-app Help Centre', detail: 'Available in the app menu 24/7' },
                  { icon: '📧', method: 'Email Support', detail: 'info@hambarides.co.za' },
                ].map((c) => (
                  <div key={c.method} className="bg-gray-50 rounded-xl p-4">
                    <div className="text-2xl mb-2">{c.icon}</div>
                    <div className="font-semibold text-gray-900">{c.method}</div>
                    <div className="text-sm text-gray-500">{c.detail}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4">We aim to acknowledge all complaints within 24 hours and resolve them within 5 business days.</p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p>This Agreement is governed by the laws of the Republic of South Africa. Any disputes that cannot be resolved through our internal complaints process shall be referred to arbitration under the Rules of the Arbitration Foundation of Southern Africa (AFSA), seated in Johannesburg, Gauteng.</p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Agreement</h2>
              <p>Hamba Rides may update this Rider Agreement at any time. We will notify you of material changes via the app and/or email at least 14 days before they take effect. Your continued use of the service after the effective date constitutes acceptance of the updated terms.</p>
            </section>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Rider Support</h3>
              <p className="text-sm text-gray-600">Need help? We&apos;re always available:</p>
              <div className="mt-3 space-y-1 text-sm">
                <div>📧 <a href="mailto:info@hambarides.co.za" className="text-green-600 hover:underline">info@hambarides.co.za</a></div>
                <div>📱 In-app Help Centre (24/7)</div>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { href: '/terms-of-service', label: 'Terms of Service', desc: 'General platform terms' },
            { href: '/privacy-policy', label: 'Privacy Policy', desc: 'How we use your data' },
            { href: '/acceptable-use', label: 'Acceptable Use', desc: 'Platform rules of conduct' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-green-300 hover:shadow-md transition group">
              <div className="font-semibold text-gray-900 group-hover:text-green-600 transition mb-1">{link.label}</div>
              <div className="text-sm text-gray-500">{link.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold">Hamba<span className="text-green-500">Rides</span></div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms</Link>
            <Link href="/driver-terms" className="hover:text-white">Driver Terms</Link>
            <Link href="/acceptable-use" className="hover:text-white">Acceptable Use</Link>
          </div>
          <div className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Hamba Rides (Pty) Ltd</div>
        </div>
      </footer>
    </div>
  );
}
