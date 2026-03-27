import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-green-600">Hamba Rides</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: March 16, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the Hamba Rides mobile application and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              These terms constitute a legally binding agreement between you and Hamba Rides (Pty) Ltd, a company registered in South Africa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hamba Rides provides a technology platform that connects riders with independent drivers in Gauteng, South Africa. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Ride-hailing and transportation matching</li>
              <li>Payment processing</li>
              <li>Safety features including emergency contacts and trip sharing</li>
              <li>Women-only ride options with verified drivers</li>
              <li>Multi-stop ride functionality</li>
              <li>In-app communication between riders and drivers</li>
              <li>Rating and review system</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Important:</strong> Hamba Rides is a technology platform only. We do not provide transportation services. Drivers are independent contractors, not employees of Hamba Rides.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Eligibility</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.1 Riders</h3>
            <p className="text-gray-700 leading-relaxed mb-2">To use Hamba Rides as a rider, you must:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Be at least 18 years old</li>
              <li>Have a valid South African mobile number</li>
              <li>Provide accurate registration information</li>
              <li>Have a valid payment method</li>
              <li>Comply with all applicable laws</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.2 Drivers</h3>
            <p className="text-gray-700 leading-relaxed mb-2">To drive with Hamba Rides, you must:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Be at least 21 years old</li>
              <li>Hold a valid South African driver's license (minimum 2 years)</li>
              <li>Possess a valid Professional Driving Permit (PDP)</li>
              <li>Have comprehensive vehicle insurance</li>
              <li>Pass a background check including police clearance</li>
              <li>Own or have legal access to a registered vehicle</li>
              <li>Maintain vehicle roadworthiness certification</li>
              <li>For women-only rides: Complete additional verification process</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Account Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information</li>
              <li>Keep your password secure and confidential</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Not share your account with others</li>
              <li>Not create multiple accounts</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We reserve the right to suspend or terminate accounts that violate these terms or provide false information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Pricing and Payment</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.1 Fare Calculation</h3>
            <p className="text-gray-700 leading-relaxed mb-2">Fares are calculated based on:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Base fare: R25</li>
              <li>Distance traveled (per kilometer)</li>
              <li>Time duration</li>
              <li>Additional stops: R5 per stop</li>
              <li>Demand-based surge pricing (when applicable)</li>
              <li>Tolls and parking fees (if applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.2 Payment Methods</h3>
            <p className="text-gray-700 leading-relaxed mb-2">We accept:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Cash (paid directly to driver)</li>
              <li>Credit/Debit cards via Paystack</li>
              <li>Saved payment methods</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.3 Driver Earnings</h3>
            <p className="text-gray-700 leading-relaxed">
              Drivers receive 85% of the fare. Hamba Rides retains a 15% service fee to cover platform costs, payment processing, insurance, and support services.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.4 Cancellation Fees</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Free cancellation within 2 minutes of booking</li>
              <li>R10 cancellation fee after 2 minutes</li>
              <li>R25 no-show fee if rider doesn't arrive within 5 minutes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. User Conduct</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">6.1 Prohibited Activities</h3>
            <p className="text-gray-700 leading-relaxed mb-2">You may not:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use the service for illegal activities</li>
              <li>Harass, abuse, or threaten other users</li>
              <li>Discriminate based on race, gender, religion, or other protected characteristics</li>
              <li>Damage or soil vehicles</li>
              <li>Bring prohibited items (weapons, illegal drugs, etc.)</li>
              <li>Request drivers to break traffic laws</li>
              <li>Manipulate ratings or reviews</li>
              <li>Reverse engineer or copy our technology</li>
              <li>Use automated systems to access the platform</li>
              <li>Impersonate others or provide false information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">6.2 Safety Requirements</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Riders must wear seatbelts</li>
              <li>No smoking in vehicles</li>
              <li>Maximum 4 passengers per standard vehicle</li>
              <li>Children must use appropriate car seats (rider's responsibility)</li>
              <li>Pets allowed only with driver consent</li>
              <li>Report safety concerns immediately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Women-Only Rides</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our women-only ride feature allows female riders to request rides exclusively from verified female drivers. To participate:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Riders must verify their gender through ID document upload</li>
              <li>Drivers must complete enhanced verification including ID and selfie verification</li>
              <li>Misrepresentation of gender will result in immediate account termination</li>
              <li>This feature is optional and available alongside standard rides</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Ratings and Reviews</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Both riders and drivers can rate each other after each trip. Ratings must be:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Honest and based on actual experience</li>
              <li>Free from discrimination or harassment</li>
              <li>Not manipulated or fraudulent</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Consistently low ratings (below 4.0) may result in account review or deactivation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content, features, and functionality of Hamba Rides, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of Hamba Rides (Pty) Ltd and are protected by South African and international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              You may not copy, modify, distribute, sell, or lease any part of our services without explicit written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>To the maximum extent permitted by South African law:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Hamba Rides is not liable for any indirect, incidental, special, or consequential damages</li>
              <li>We are not responsible for the actions of drivers or riders</li>
              <li>We do not guarantee service availability or uninterrupted access</li>
              <li>Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim</li>
              <li>We are not liable for accidents, injuries, or property damage during rides</li>
              <li>Drivers are independent contractors responsible for their own actions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Insurance:</strong> All drivers must maintain comprehensive vehicle insurance. Riders should verify insurance coverage before rides.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless Hamba Rides, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Your use of our services</li>
              <li>Your violation of these terms</li>
              <li>Your violation of any rights of another person</li>
              <li>Your conduct during rides</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may suspend or terminate your account immediately, without prior notice, for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Violation of these terms</li>
              <li>Fraudulent activity</li>
              <li>Safety concerns</li>
              <li>Consistently low ratings</li>
              <li>Abusive behavior</li>
              <li>Non-payment</li>
              <li>Any reason at our sole discretion</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You may terminate your account at any time through the app settings. Outstanding payments remain due after termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">13.1 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed">
              These terms are governed by the laws of the Republic of South Africa. Any disputes shall be subject to the exclusive jurisdiction of the courts of South Africa.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">13.2 Dispute Process</h3>
            <p className="text-gray-700 leading-relaxed mb-2">Before legal action:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Contact our support team at info@hambarides.co.za</li>
              <li>We will attempt to resolve within 14 business days</li>
              <li>If unresolved, disputes may be escalated to mediation</li>
              <li>Legal action may be pursued after exhausting these steps</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify you of significant changes via email or in-app notification at least 7 days before they take effect. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Information</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Hamba Rides (Pty) Ltd</strong><br />
                Registration Number: [Your Company Registration]<br />
                Email: <a href="mailto:legal@HambaRides.co.za" className="text-green-600 hover:underline">legal@HambaRides.co.za</a><br />
                Support: <a href="mailto:info@hambarides.co.za" className="text-green-600 hover:underline">info@hambarides.co.za</a><br />
                Phone: +27 63 025 1274<br />
                Address: [Your Physical Address], Gauteng, South Africa
              </p>
            </div>
          </section>

          <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Important Notice</h2>
            <p className="text-gray-700 leading-relaxed">
              By using Hamba Rides, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-green-600 hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
