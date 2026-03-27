import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acceptable Use Policy',
  description: 'Hamba Rides Acceptable Use Policy – rules governing how the platform may be used by riders, drivers, and visitors.',
};

export default function AcceptableUse() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Hamba<span className="text-green-600">Rides</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-gray-900">Terms</Link>
              <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-900">Privacy</Link>
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 font-medium">← Home</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-10 py-10">
            <div className="text-blue-300 text-sm font-semibold mb-2 uppercase tracking-wider">Legal Document</div>
            <h1 className="text-4xl font-bold mb-3">Acceptable Use Policy</h1>
            <p className="text-blue-200">Last Updated: 1 March 2026 &nbsp;|&nbsp; Effective Date: 1 March 2026</p>
          </div>

          <div className="px-10 py-10 space-y-10 text-gray-700 leading-relaxed">

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Purpose</h2>
              <p>This Acceptable Use Policy ("AUP") sets out the rules and standards governing acceptable behaviour on the Hamba Rides platform, including the mobile applications, website, and any related services (collectively, the "Platform"). It applies to all users — riders, drivers, and website visitors alike.</p>
              <p className="mt-4">This AUP is incorporated into our <Link href="/terms-of-service" className="text-green-600 hover:underline">Terms of Service</Link> and must be read together with it. Violations of this AUP may result in account suspension, permanent deactivation, or referral to law enforcement authorities.</p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Prohibited Uses</h2>
              <p>You may not use the Hamba Rides Platform for any of the following purposes:</p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2.1 Illegal Activity</h3>
              <ul className="space-y-2 list-none">
                {[
                  'Transporting controlled substances, illegal weapons, or contraband',
                  'Using the Platform to facilitate any criminal offence under South African law',
                  'Impersonating another person, organisation, or official',
                  'Committing fraud, identity theft, or financial deception',
                  'Money laundering or engaging in transactions designed to conceal illicit funds',
                  'Breaching any export control, sanctions, or trade restriction laws',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1 flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2.2 Harassment &amp; Abuse</h3>
              <ul className="space-y-2 list-none">
                {[
                  'Threatening, intimidating, or harassing other users in any way',
                  'Using abusive, discriminatory, racist, sexist, or hateful language',
                  'Unwanted physical contact with drivers or riders',
                  'Stalking, following, or monitoring another user outside the Platform',
                  'Requesting personal contact details from drivers or riders for purposes outside the ride',
                  'Retaliatory or fraudulent negative ratings designed to harm another user',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1 flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2.3 Platform Integrity</h3>
              <ul className="space-y-2 list-none">
                {[
                  'Creating fake accounts, duplicate accounts, or accounts using false information',
                  'Manipulating GPS signals or location data to falsify trips',
                  'Colluding with another user to generate fraudulent fares or earnings',
                  'Using bots, scripts, or automated tools to interact with the Platform',
                  'Attempting to reverse-engineer, decompile, or extract source code from the Hamba Rides apps',
                  'Bypassing, disabling, or circumventing any security, access control, or fraud detection feature',
                  'Sharing login credentials or account access with others',
                  'Creating accounts for the purpose of testing, scraping data, or competitive intelligence',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1 flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2.4 Privacy Violations</h3>
              <ul className="space-y-2 list-none">
                {[
                  'Recording audio, video, or photographs of other users without their explicit consent',
                  'Sharing or publishing another user\'s personal information without authorisation ("doxxing")',
                  'Using rider or driver data obtained through the Platform for any purpose other than completing the ride',
                  'Harvesting, collecting, or compiling personal data from other Platform users',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1 flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2.5 Content &amp; Communications</h3>
              <ul className="space-y-2 list-none">
                {[
                  'Sending unsolicited marketing, spam, or bulk messages through in-app chat',
                  'Posting offensive, pornographic, or harmful content in any Platform feature that accepts user input',
                  'Spreading misinformation about Hamba Rides, its drivers, or its services',
                  'Using in-app communication channels for purposes unrelated to the active ride',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1 flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Acceptable Standards of Conduct</h2>
              <p>All Platform users are expected to:</p>
              <ul className="mt-4 space-y-2 list-none">
                {[
                  'Treat all other users with respect and dignity at all times',
                  'Provide accurate information during registration and when making ride requests',
                  'Arrive punctually at pickup points and communicate delays promptly',
                  'Use the in-app communication features appropriately and professionally',
                  'Report safety concerns, incidents, or suspected policy violations to Hamba Rides support immediately',
                  'Cooperate with any investigation by Hamba Rides into suspected misconduct',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p>All content on the Hamba Rides Platform — including logos, trademarks, app designs, copy, images, and software — is the intellectual property of Hamba Rides (Pty) Ltd or its licensors. You may not:</p>
              <ul className="mt-4 space-y-2 list-none">
                {[
                  'Use the Hamba Rides name, logo, or branding without written permission',
                  'Copy, reproduce, or distribute any part of the Platform or its content',
                  'Create derivative works based on Platform content or design',
                  'Use Hamba Rides\' trademarks in a way that suggests endorsement or affiliation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1 flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Security</h2>
              <p>You must not attempt to compromise the security or integrity of the Hamba Rides Platform. Prohibited actions include:</p>
              <ul className="mt-4 space-y-2 list-none">
                {[
                  'Probing, scanning, or testing the vulnerability of any Hamba Rides system or network',
                  'Accessing data not intended for you or logging into an account you are not authorised to access',
                  'Attempting to interfere with service availability through denial-of-service attacks',
                  'Introducing malware, viruses, or malicious code into the Platform',
                  'Intercepting or monitoring data transmitted to or from the Platform',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1 flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">If you discover a genuine security vulnerability, please report it responsibly to <a href="mailto:security@hambarides.co.za" className="text-green-600 hover:underline">security@hambarides.co.za</a>. We have a responsible disclosure programme and will work with you in good faith.</p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Consequences of Violation</h2>
              <p>Hamba Rides reserves the right to take any of the following actions in response to violations of this AUP:</p>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                {[
                  { severity: 'Warning', color: 'yellow', desc: 'Formal written warning issued via in-app notification or email for minor or first-time violations.' },
                  { severity: 'Temporary Suspension', color: 'orange', desc: 'Account access suspended for 24 hours to 30 days pending investigation or as a graduated penalty.' },
                  { severity: 'Permanent Deactivation', color: 'red', desc: 'Irreversible account closure for serious, repeated, or egregious violations.' },
                  { severity: 'Legal Action', color: 'red', desc: 'Referral to South African Police Service (SAPS) or civil litigation for criminal conduct or significant financial harm.' },
                ].map((item) => (
                  <div key={item.severity} className={`p-4 rounded-xl border ${item.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' : item.color === 'orange' ? 'bg-orange-50 border-orange-200' : 'bg-red-50 border-red-200'}`}>
                    <div className={`font-bold mb-1 ${item.color === 'yellow' ? 'text-yellow-800' : item.color === 'orange' ? 'text-orange-800' : 'text-red-800'}`}>{item.severity}</div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4">Where possible, Hamba Rides will notify users of violations and provide an opportunity to respond before taking permanent action. However, in cases involving immediate safety risks or ongoing criminal conduct, accounts may be suspended without prior notice.</p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Reporting Violations</h2>
              <p>If you witness or experience a violation of this AUP, please report it to us immediately. We take all reports seriously and investigate them promptly.</p>
              <div className="mt-4 bg-gray-50 rounded-xl p-6 grid md:grid-cols-2 gap-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">📱 In-App Reporting</div>
                  <p className="text-sm text-gray-600">Use the &quot;Report an issue&quot; option in the trip history or Help Centre section of the app.</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">📧 Email</div>
                  <p className="text-sm text-gray-600"><a href="mailto:safety@hambarides.co.za" className="text-green-600 hover:underline">safety@hambarides.co.za</a> for safety-related concerns.</p>
                </div>
              </div>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p>We may update this Acceptable Use Policy periodically to reflect changes in our services, legal requirements, or community standards. We will notify you of material changes via in-app notification and/or email at least 14 days before they take effect. Your continued use of the Platform after the effective date constitutes your acceptance of the revised policy.</p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
              <p>For questions about this policy or to report a concern:</p>
              <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="space-y-2 text-sm">
                  <div>📧 General: <a href="mailto:info@hambarides.co.za" className="text-green-600 hover:underline">info@hambarides.co.za</a></div>
                  <div>🔒 Security: <a href="mailto:security@hambarides.co.za" className="text-green-600 hover:underline">security@hambarides.co.za</a></div>
                  <div>🛡️ Safety: <a href="mailto:safety@hambarides.co.za" className="text-green-600 hover:underline">safety@hambarides.co.za</a></div>
                  <div>🏢 Hamba Rides (Pty) Ltd, Johannesburg, Gauteng, South Africa</div>
                </div>
              </div>
            </section>

          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-4 gap-4">
          {[
            { href: '/terms-of-service', label: 'Terms of Service' },
            { href: '/privacy-policy', label: 'Privacy Policy' },
            { href: '/driver-terms', label: 'Driver Agreement' },
            { href: '/rider-terms', label: 'Rider Agreement' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 hover:shadow-md transition group text-center">
              <div className="font-semibold text-gray-900 group-hover:text-green-600 transition text-sm">{link.label}</div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold">Hamba<span className="text-green-500">Rides</span></div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400 justify-center">
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms</Link>
            <Link href="/driver-terms" className="hover:text-white">Driver Terms</Link>
            <Link href="/rider-terms" className="hover:text-white">Rider Terms</Link>
            <Link href="/cookie-policy" className="hover:text-white">Cookies</Link>
          </div>
          <div className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Hamba Rides (Pty) Ltd</div>
        </div>
      </footer>
    </div>
  );
}
