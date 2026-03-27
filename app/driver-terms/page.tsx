import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Driver Agreement',
  description: 'Hamba Rides Driver Agreement – terms and conditions for drivers operating on the Hamba Rides platform.',
};

export default function DriverTerms() {
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
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-10 py-10">
            <div className="text-green-400 text-sm font-semibold mb-2 uppercase tracking-wider">Legal Document</div>
            <h1 className="text-4xl font-bold mb-3">Driver Agreement</h1>
            <p className="text-gray-300">Last Updated: 1 March 2026 &nbsp;|&nbsp; Effective Date: 1 March 2026</p>
          </div>

          <div className="px-10 py-10 space-y-10 text-gray-700 leading-relaxed">

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 text-sm text-yellow-900">
              <strong>Important:</strong> By activating your driver account and using the Hamba Rides Driver application, you agree to be bound by this Driver Agreement. Please read it carefully before proceeding.
            </div>

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Parties and Relationship</h2>
              <p>This Driver Agreement ("Agreement") is entered into between you ("Driver") and Hamba Rides (Pty) Ltd, a company registered in the Republic of South Africa ("Hamba Rides", "we", "us").</p>
              <p className="mt-4">You are an <strong>independent contractor</strong>, not an employee, agent, or partner of Hamba Rides. Nothing in this Agreement creates a labour relationship, joint venture, or franchise arrangement. You are solely responsible for determining how, when, and where to provide transportation services using the Hamba Rides platform.</p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility Requirements</h2>
              <p>To register and remain active as a driver on the platform, you must at all times:</p>
              <ul className="mt-4 space-y-2 list-none">
                {[
                  'Be at least 21 years of age',
                  'Hold a valid South African driver\'s licence (Code B/EB or higher)',
                  'Hold a valid Professional Driving Permit (PrDP) for passengers',
                  'Own or have lawful use of a motor vehicle manufactured in 2015 or later',
                  'Maintain valid roadworthy certification for your vehicle',
                  'Maintain valid commercial passenger insurance covering your vehicle',
                  'Have a clean criminal record — provide a current (within 6 months) police clearance certificate',
                  'Hold a valid South African bank account in your name',
                  'Maintain a smartphone capable of running the Hamba Driver application',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">Hamba Rides reserves the right to reverify your eligibility at any time and to suspend or terminate your account if you fail to maintain any of the above requirements.</p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Platform Licence</h2>
              <p>Subject to your compliance with this Agreement, Hamba Rides grants you a limited, non-exclusive, non-transferable, revocable licence to use the Hamba Driver application solely to receive and complete trip requests from riders.</p>
              <p className="mt-4">You may not sublicense, resell, or transfer access to the platform. You may not use the platform for any purpose other than providing passenger transportation services to riders matched through the Hamba Rides system.</p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Fares, Fees &amp; Payouts</h2>
              <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">4.1 Fare Calculation</h3>
              <p>Fares are calculated by the Hamba Rides system based on base fare, distance (per kilometre), time (per minute), and any applicable tolls or surcharges. Fares are displayed to riders as estimates before booking and confirmed at trip completion.</p>

              <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">4.2 Driver Earnings Share</h3>
              <p>You are entitled to receive <strong>85% of the net fare</strong> collected from each completed trip. Hamba Rides retains a <strong>15% service fee</strong> for platform provision, payment processing, insurance facilitation, and support services.</p>

              <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">4.3 Payouts</h3>
              <p>Earnings are paid weekly every Friday to the bank account registered in your driver profile. A minimum balance of R50 is required to trigger a payout. You are responsible for ensuring your banking details are current and accurate.</p>

              <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">4.4 Cancellation Fees</h3>
              <p>A cancellation fee may apply when a rider cancels after the driver has already accepted and commenced travel to the pickup point. The fee amount is determined by Hamba Rides and displayed in the driver app at the time of cancellation.</p>

              <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">4.5 Taxes</h3>
              <p>You are solely responsible for all income tax, VAT (if applicable), and other tax obligations arising from your earnings on the platform. Hamba Rides will provide earnings summaries upon request to assist with your tax filings.</p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Driver Obligations</h2>
              <p>You agree to:</p>
              <ul className="mt-4 space-y-2 list-none">
                {[
                  'Provide transportation services in a safe, professional, and courteous manner at all times',
                  'Follow all applicable South African traffic laws and regulations',
                  'Accept and complete trip requests honestly — not cancel excessively or discriminate against riders',
                  'Maintain your vehicle in a clean, safe, and roadworthy condition',
                  'Not carry more passengers than your vehicle\'s seating capacity',
                  'Not use a mobile phone without a hands-free device while driving',
                  'Not drive while under the influence of alcohol, drugs, or any substance that impairs judgment',
                  'Verify rider identity using the in-app confirmation PIN before commencing each trip',
                  'Not solicit tips or additional payments outside the app',
                  'Treat all riders with dignity and respect regardless of race, gender, religion, disability, or any other characteristic',
                  'Report any accidents, incidents, or complaints promptly through the app or to support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Conduct</h2>
              <p>You must not:</p>
              <ul className="mt-4 space-y-2 list-none">
                {[
                  'Allow any other person to use your driver account or access your driver app',
                  'Accept cash-only bookings outside the Hamba Rides platform to avoid fees',
                  'Physically or verbally abuse, threaten, or harass any rider or Hamba Rides employee',
                  'Record riders without their consent',
                  'Share rider personal data with third parties',
                  'Engage in any fraudulent activity including GPS manipulation or fake trip completion',
                  'Use deceptive or misleading information in your application or driver profile',
                  'Operate in areas or at times your licence does not authorise',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1 flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">Violation of any of the above may result in immediate account suspension and, where applicable, reporting to law enforcement authorities.</p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Ratings &amp; Quality Standards</h2>
              <p>Hamba Rides operates a two-way ratings system. Riders rate drivers after each trip, and you may rate riders. Ratings are used to maintain quality on the platform.</p>
              <p className="mt-4">Drivers with an average rating below <strong>4.2 stars</strong> (measured over the preceding 50 trips) may receive a performance warning. Drivers who fail to improve within a 30-day period may have their accounts deactivated. You will be notified and given the opportunity to appeal.</p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Insurance</h2>
              <p>You are required to maintain <strong>commercial passenger insurance</strong> that covers your vehicle for transportation of paying passengers at all times while using the platform. Hamba Rides does not provide vehicle insurance to drivers.</p>
              <p className="mt-4">Hamba Rides maintains a supplemental liability policy that may provide limited coverage in specific circumstances. This supplemental cover does not replace your own vehicle insurance obligation.</p>
              <p className="mt-4">You indemnify Hamba Rides from all claims arising from accidents, personal injury, or property damage that occur during or in connection with your provision of transportation services.</p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Deactivation &amp; Termination</h2>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">9.1 Voluntary Deactivation</h3>
              <p>You may deactivate your account at any time by contacting support. Outstanding earnings will be paid within 14 business days of deactivation.</p>

              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">9.2 Deactivation by Hamba Rides</h3>
              <p>Hamba Rides may suspend or permanently deactivate your account for any of the following:</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside text-gray-600">
                <li>Failure to maintain eligibility requirements</li>
                <li>Sustained low ratings after warnings</li>
                <li>Repeated cancellations or unacceptable acceptance rates</li>
                <li>Fraud, dishonesty, or misrepresentation</li>
                <li>Safety violations or rider complaints of a serious nature</li>
                <li>Criminal convictions relevant to the provision of transportation services</li>
                <li>Any breach of this Agreement</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">9.3 Appeals</h3>
              <p>You may appeal a deactivation decision by contacting <a href="mailto:drivers@hambarides.co.za" className="text-green-600 hover:underline">drivers@hambarides.co.za</a> within 14 days of receiving notice. Hamba Rides will review appeals within 10 business days.</p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Data &amp; Privacy</h2>
              <p>Hamba Rides collects and processes your personal data in accordance with our <Link href="/privacy-policy" className="text-green-600 hover:underline">Privacy Policy</Link> and the Protection of Personal Information Act (POPIA). Your location data is collected while the driver app is active to facilitate ride matching and safety features.</p>
              <p className="mt-4">Rider personal information must not be retained, shared, or used outside the Hamba Rides platform for any purpose.</p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
              <p>To the fullest extent permitted by applicable South African law, Hamba Rides is not liable for any indirect, incidental, punitive, or consequential damages arising from your use of the platform, including but not limited to loss of earnings, vehicle damage, or personal injury not caused directly by Hamba Rides' gross negligence.</p>
              <p className="mt-4">Hamba Rides' total liability to you under this Agreement shall not exceed the total service fees paid to Hamba Rides in the three-month period immediately preceding the event giving rise to the claim.</p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law &amp; Dispute Resolution</h2>
              <p>This Agreement is governed by the laws of the Republic of South Africa. Any disputes arising under this Agreement shall first be submitted to mediation. If mediation fails, disputes shall be resolved by arbitration in accordance with the Rules of the Arbitration Foundation of Southern Africa (AFSA), seated in Johannesburg, Gauteng.</p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Amendments</h2>
              <p>Hamba Rides may update this Agreement from time to time. You will be notified via the driver app at least 14 days before material changes take effect. Continued use of the platform after the effective date constitutes acceptance of the revised Agreement.</p>
            </section>

            {/* Contact */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Driver Support</h3>
              <p className="text-sm text-gray-600">Questions about this agreement? Contact our driver support team:</p>
              <div className="mt-3 space-y-1 text-sm">
                <div>📧 <a href="mailto:drivers@hambarides.co.za" className="text-green-600 hover:underline">drivers@hambarides.co.za</a></div>
                <div>📱 In-app support chat (available 24/7)</div>
              </div>
            </div>

          </div>
        </div>

        {/* Related links */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { href: '/terms-of-service', label: 'Terms of Service', desc: 'General platform terms' },
            { href: '/privacy-policy', label: 'Privacy Policy', desc: 'How we handle your data' },
            { href: '/acceptable-use', label: 'Acceptable Use', desc: 'Platform usage rules' },
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
            <Link href="/cookie-policy" className="hover:text-white">Cookies</Link>
            <Link href="/acceptable-use" className="hover:text-white">Acceptable Use</Link>
          </div>
          <div className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Hamba Rides (Pty) Ltd</div>
        </div>
      </footer>
    </div>
  );
}
