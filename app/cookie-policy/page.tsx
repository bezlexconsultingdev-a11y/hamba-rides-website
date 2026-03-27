import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-green-600">Hamba Rides</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: March 16, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website or use our mobile application. They help us provide you with a better experience by remembering your preferences and understanding how you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Hamba Rides uses cookies for the following purposes:</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.1 Essential Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-2">These cookies are necessary for the website to function:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Authentication and session management</li>
              <li>Security and fraud prevention</li>
              <li>Load balancing</li>
              <li>Remembering your login status</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Performance Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-2">These help us understand how visitors use our website:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Page load times and performance metrics</li>
              <li>Error tracking and debugging</li>
              <li>Traffic analysis</li>
              <li>Popular features and pages</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.3 Functional Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-2">These enhance your experience:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Language preferences</li>
              <li>Location settings</li>
              <li>Saved favorite locations</li>
              <li>Display preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.4 Analytics Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-2">We use analytics to improve our services:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Google Analytics (anonymized)</li>
              <li>User behavior patterns</li>
              <li>Feature usage statistics</li>
              <li>Conversion tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use services from trusted third parties that may set cookies:</p>
            
            <div className="bg-gray-100 rounded-lg p-6 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Mapbox</h4>
                <p className="text-gray-700 text-sm">Maps and location services</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Paystack</h4>
                <p className="text-gray-700 text-sm">Payment processing</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Google Analytics</h4>
                <p className="text-gray-700 text-sm">Website analytics (anonymized)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Supabase</h4>
                <p className="text-gray-700 text-sm">Database and authentication</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Managing Cookies</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.1 Browser Settings</h3>
            <p className="text-gray-700 leading-relaxed mb-4">You can control cookies through your browser settings:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
              <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.2 Mobile App Settings</h3>
            <p className="text-gray-700 leading-relaxed">
              In our mobile app, you can manage tracking preferences in Settings → Privacy → Tracking Preferences.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.3 Opt-Out Links</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Google Analytics Opt-out</a></li>
              <li><a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Your Online Choices (EU)</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookie Duration</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.1 Session Cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              Temporary cookies that expire when you close your browser. Used for authentication and session management.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.2 Persistent Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Remain on your device for a set period:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Authentication tokens: 30 days</li>
              <li>Preferences: 1 year</li>
              <li>Analytics: 2 years</li>
              <li>Marketing: 90 days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Mobile App Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Our mobile apps use similar tracking technologies:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Device identifiers (IDFA on iOS, Advertising ID on Android)</li>
              <li>Local storage for preferences</li>
              <li>Analytics SDKs</li>
              <li>Crash reporting tools</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can limit tracking through your device settings (iOS: Settings → Privacy → Tracking; Android: Settings → Google → Ads).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Do Not Track</h2>
            <p className="text-gray-700 leading-relaxed">
              We respect Do Not Track (DNT) browser signals. When DNT is enabled, we will not set non-essential cookies or tracking technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time. We will notify you of significant changes via email or in-app notification. The "Last Updated" date at the top indicates when this policy was last revised.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                If you have questions about our use of cookies:<br /><br />
                <strong>Hamba Rides (Pty) Ltd</strong><br />
                Email: <a href="mailto:privacy@HambaRides.co.za" className="text-green-600 hover:underline">privacy@HambaRides.co.za</a><br />
                Phone: +27 XX XXX XXXX
              </p>
            </div>
          </section>

          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Consent</h3>
            <p className="text-gray-700 leading-relaxed">
              By using our website and mobile applications, you consent to our use of cookies as described in this policy. You can withdraw consent at any time by adjusting your browser or device settings.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex gap-4">
          <Link href="/" className="text-green-600 hover:underline">← Back to Home</Link>
          <Link href="/privacy-policy" className="text-green-600 hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
