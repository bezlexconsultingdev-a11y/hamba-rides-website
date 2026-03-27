import Link from 'next/link';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-green-600">Hamba Rides</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund & Cancellation Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: March 16, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Cancellation Policy</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">1.1 Rider Cancellations</h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Free cancellation:</strong> Within 2 minutes of booking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">⚠</span>
                  <span><strong>R10 cancellation fee:</strong> After 2 minutes but before driver arrives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span><strong>R25 no-show fee:</strong> If you don't arrive within 5 minutes of driver's arrival</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">1.2 Driver Cancellations</h3>
            <p className="text-gray-700 leading-relaxed mb-2">Drivers may cancel without penalty if:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Rider is not at pickup location after 5 minutes</li>
              <li>Rider requests illegal activities</li>
              <li>Rider appears intoxicated or threatening</li>
              <li>Safety concerns arise</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Excessive driver cancellations may result in account review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Refund Policy</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.1 Eligible Refunds</h3>
            <p className="text-gray-700 leading-relaxed mb-4">You may be eligible for a refund in the following cases:</p>
            
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Duplicate Charges</h4>
                <p className="text-gray-700 text-sm">If you were charged multiple times for the same ride, we will refund the duplicate charges within 3-5 business days.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Driver No-Show</h4>
                <p className="text-gray-700 text-sm">If your driver cancels after you've been charged, or doesn't arrive within 15 minutes of estimated time, you'll receive a full refund.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Incorrect Fare</h4>
                <p className="text-gray-700 text-sm">If you were charged significantly more than the estimated fare due to a system error (not route changes), we'll refund the difference.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Service Issues</h4>
                <p className="text-gray-700 text-sm">Major service failures (unsafe driving, unprofessional behavior, vehicle issues) may qualify for partial or full refunds.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Non-Refundable Situations</h3>
            <p className="text-gray-700 leading-relaxed mb-2">Refunds will NOT be issued for:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Completed rides (unless service issues occurred)</li>
              <li>Route changes requested by rider</li>
              <li>Traffic delays or road conditions</li>
              <li>Rider-initiated cancellations after 2 minutes</li>
              <li>Tips (these go directly to drivers)</li>
              <li>Tolls or parking fees incurred during the ride</li>
              <li>Personal items left in vehicles</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Refund Process</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.1 How to Request a Refund</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>Open the Hamba Rides app</li>
              <li>Go to "Ride History"</li>
              <li>Select the ride in question</li>
              <li>Tap "Report Issue" or "Request Refund"</li>
              <li>Provide details and submit</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              Alternatively, email <a href="mailto:info@hambarides.co.za" className="text-green-600 hover:underline">info@hambarides.co.za</a> with your ride details.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.2 Refund Timeline</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Review:</strong> 1-2 business days</li>
                <li><strong>Approval:</strong> You'll receive email confirmation</li>
                <li><strong>Processing:</strong> 3-5 business days for card refunds</li>
                <li><strong>Cash refunds:</strong> Credited to your Hamba Rides wallet immediately</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.3 Refund Methods</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Card payments:</strong> Refunded to original payment method</li>
              <li><strong>Cash payments:</strong> Credited to Hamba Rides wallet for future rides</li>
              <li><strong>Wallet credits:</strong> Can be used for any future ride</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your refund request is denied and you disagree with the decision:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Reply to the decision email with additional information</li>
              <li>Request escalation to a senior support agent</li>
              <li>Provide any evidence (screenshots, photos, witness statements)</li>
              <li>We'll review within 3 business days</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              Final decisions will be communicated via email. If still unsatisfied, you may contact the Consumer Goods and Services Ombud.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Promo Codes & Credits</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.1 Promo Code Terms</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Promo codes are non-transferable</li>
              <li>Cannot be exchanged for cash</li>
              <li>Expire as stated in the promotion</li>
              <li>One promo code per ride</li>
              <li>Cannot be combined with other offers</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.2 Wallet Credits</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Valid for 12 months from issue date</li>
              <li>Automatically applied to rides</li>
              <li>Non-refundable to cash</li>
              <li>Transferable only with Hamba Rides approval</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Fare Adjustments</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fares may be adjusted after a ride for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Route corrections:</strong> If GPS tracking shows a significantly different route</li>
              <li><strong>Wait time:</strong> Additional charges for extended wait times</li>
              <li><strong>Tolls:</strong> Added if not included in original estimate</li>
              <li><strong>Additional stops:</strong> R5 per stop not included in booking</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You'll be notified of any fare adjustments via email and in-app notification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Payment Failures</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If a payment fails:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You'll be notified immediately</li>
              <li>Your account may be temporarily suspended until payment is resolved</li>
              <li>You have 7 days to update payment information</li>
              <li>After 7 days, the amount may be sent to collections</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>For refund requests or questions:</strong><br /><br />
                Email: <a href="mailto:info@hambarides.co.za" className="text-green-600 hover:underline">info@hambarides.co.za</a><br />
                Phone: +27 63 025 1274<br />
                In-app: Help → Contact Support<br />
                Response time: Within 24 hours
              </p>
            </div>
          </section>

          <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Note</h3>
            <p className="text-gray-700 leading-relaxed">
              This refund policy is subject to South African consumer protection laws. Your statutory rights are not affected by this policy. We reserve the right to modify this policy with 30 days' notice.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex gap-4">
          <Link href="/" className="text-green-600 hover:underline">← Back to Home</Link>
          <Link href="/terms-of-service" className="text-green-600 hover:underline">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
}
