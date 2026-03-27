import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-green-600">Hamba Rides</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: March 16, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Hamba Rides (Pty) Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services in Gauteng, South Africa.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By using Hamba Rides, you agree to the collection and use of information in accordance with this policy. This policy complies with the Protection of Personal Information Act (POPIA) of South Africa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.1 Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Full name and surname</li>
              <li>South African ID number (for driver verification)</li>
              <li>Email address and phone number</li>
              <li>Profile photograph</li>
              <li>Payment information (card details processed via Paystack)</li>
              <li>Gender information (for women-only ride feature)</li>
              <li>Emergency contact details</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Location Data</h3>
            <p className="text-gray-700 leading-relaxed">
              We collect precise location data when you use our app to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
              <li>Match you with nearby drivers</li>
              <li>Calculate fares and routes</li>
              <li>Provide navigation services</li>
              <li>Ensure safety during rides</li>
              <li>Share trip progress with emergency contacts (when enabled)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Location data is only collected when the app is in use and with your explicit permission.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.3 Ride Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Pickup and drop-off locations</li>
              <li>Route taken and distance traveled</li>
              <li>Ride duration and fare</li>
              <li>Driver and rider ratings</li>
              <li>In-app messages between riders and drivers</li>
              <li>Trip recordings (audio/video when consent is given)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.4 Device Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Device type and operating system</li>
              <li>Unique device identifiers</li>
              <li>IP address</li>
              <li>Mobile network information</li>
              <li>App usage data and crash reports</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.5 Driver-Specific Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Driver's license details</li>
              <li>Vehicle registration and insurance documents</li>
              <li>Professional Driving Permit (PDP)</li>
              <li>Police clearance certificate</li>
              <li>Bank account details for payouts</li>
              <li>Earnings and trip history</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide and maintain our ride-hailing services</li>
              <li>Process payments and send invoices</li>
              <li>Match riders with drivers efficiently</li>
              <li>Ensure safety and security of all users</li>
              <li>Verify driver qualifications and conduct background checks</li>
              <li>Communicate about rides, promotions, and service updates</li>
              <li>Provide customer support</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal obligations</li>
              <li>Improve our services through analytics</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.1 With Other Users</h3>
            <p className="text-gray-700 leading-relaxed">
              Riders and drivers can see each other's first name, profile photo, and rating. During a ride, drivers can see the rider's pickup and drop-off locations.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.2 With Service Providers</h3>
            <p className="text-gray-700 leading-relaxed mb-2">We share information with trusted third parties:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Paystack:</strong> Payment processing</li>
              <li><strong>Mapbox:</strong> Mapping and navigation services</li>
              <li><strong>Supabase:</strong> Cloud database hosting</li>
              <li><strong>Email service providers:</strong> Sending invoices and notifications</li>
              <li><strong>Background check providers:</strong> Driver verification</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.3 For Legal Reasons</h3>
            <p className="text-gray-700 leading-relaxed">
              We may disclose your information if required by law, court order, or government request, or to protect the rights, property, or safety of Hamba Rides, our users, or others.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.4 Emergency Situations</h3>
            <p className="text-gray-700 leading-relaxed">
              When you use our emergency features, we may share your location and trip details with your designated emergency contacts and, if necessary, emergency services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>End-to-end encryption for sensitive data</li>
              <li>Secure HTTPS connections</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>Secure payment processing via PCI-DSS compliant providers</li>
              <li>Data backup and disaster recovery procedures</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights (POPIA Compliance)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under South Africa's Protection of Personal Information Act, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Object:</strong> Object to processing of your information</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
              <li><strong>Lodge a Complaint:</strong> File a complaint with the Information Regulator</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@HambaRides.co.za" className="text-green-600 hover:underline">privacy@HambaRides.co.za</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your information for as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Account information: Until account deletion + 7 years (tax purposes)</li>
              <li>Ride history: 7 years (legal and tax compliance)</li>
              <li>Payment records: 7 years (financial regulations)</li>
              <li>Location data: 90 days after ride completion</li>
              <li>In-app messages: 90 days</li>
              <li>Trip recordings: 30 days (unless part of a safety incident)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for users under 18 years of age. We do not knowingly collect information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar technologies to improve your experience. See our <Link href="/cookie-policy" className="text-green-600 hover:underline">Cookie Policy</Link> for details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your data is primarily stored in South Africa. Some service providers may process data outside South Africa. We ensure adequate safeguards are in place for such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes via email or in-app notification. Continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Hamba Rides (Pty) Ltd</strong><br />
                Information Officer: [Your Name]<br />
                Email: <a href="mailto:privacy@HambaRides.co.za" className="text-green-600 hover:underline">privacy@HambaRides.co.za</a><br />
                Phone: +27 XX XXX XXXX<br />
                Address: [Your Physical Address], Gauteng, South Africa
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Information Regulator (South Africa):</strong><br />
                Website: <a href="https://www.justice.gov.za/inforeg/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">www.justice.gov.za/inforeg</a><br />
                Email: inforeg@justice.gov.za
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-green-600 hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
