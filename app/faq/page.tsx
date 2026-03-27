import Link from 'next/link';

export default function FAQ() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I book a ride?",
          a: "Download the Hamba Rides app, create an account, enter your destination, and request a ride. A nearby driver will be matched with you in seconds."
        },
        {
          q: "What areas does Hamba Rides cover?",
          a: "We currently operate across Gauteng Province, including Johannesburg, Pretoria, Sandton, Centurion, Midrand, Soweto, and surrounding areas."
        },
        {
          q: "Do I need to create an account?",
          a: "Yes, you need to create an account with your phone number and email to use Hamba Rides. This helps ensure safety and security for all users."
        }
      ]
    },
    {
      category: "Payments & Pricing",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept cash, credit/debit cards via Paystack, and you can save payment methods in the app for faster checkout."
        },
        {
          q: "How is the fare calculated?",
          a: "Fares are calculated based on: Base fare (R25) + Distance (per km) + Time (per minute) + Additional stops (R5 each). You'll see an estimate before confirming your ride."
        },
        {
          q: "Are there any hidden fees?",
          a: "No hidden fees! The price you see is what you pay. Additional charges may apply for tolls, parking, or if you add extra stops during the ride."
        },
        {
          q: "Can I get a receipt?",
          a: "Yes! After each ride, you'll receive a digital receipt via email and in the app with full trip details and fare breakdown."
        },
        {
          q: "What is the cancellation fee?",
          a: "Free cancellation within 2 minutes of booking. After 2 minutes: R10 fee. No-show after driver arrives: R25 fee."
        }
      ]
    },
    {
      category: "Safety & Security",
      questions: [
        {
          q: "How do you verify drivers?",
          a: "All drivers undergo background checks, police clearance verification, Professional Driving Permit (PDP) validation, vehicle inspections, and insurance verification."
        },
        {
          q: "What are women-only rides?",
          a: "Women-only rides allow female passengers to request rides exclusively from verified female drivers for enhanced safety and comfort."
        },
        {
          q: "Can I share my trip with someone?",
          a: "Yes! You can share your live trip details with emergency contacts. They'll see your route, driver details, and estimated arrival time in real-time."
        },
        {
          q: "What if I feel unsafe during a ride?",
          a: "Use the in-app emergency button to alert our support team and your emergency contacts immediately. You can also call emergency services directly."
        },
        {
          q: "Are rides recorded?",
          a: "With your consent, rides can be recorded for safety purposes. Recordings are stored securely for 30 days unless part of a safety incident."
        }
      ]
    },
    {
      category: "Rides & Features",
      questions: [
        {
          q: "Can I schedule a ride in advance?",
          a: "Yes! You can schedule rides up to 90 days in advance for airport transfers, meetings, or any occasion requiring punctuality."
        },
        {
          q: "What are multi-stop rides?",
          a: "Add multiple destinations to your journey for just R5 per additional stop. Perfect for running errands or picking up friends."
        },
        {
          q: "Can I request a specific driver?",
          a: "Currently, drivers are automatically matched based on proximity and availability. However, you can rate drivers to help improve the service."
        },
        {
          q: "What if my driver cancels?",
          a: "If a driver cancels, we'll automatically match you with another nearby driver at no extra cost. Excessive driver cancellations are monitored."
        },
        {
          q: "Can I bring pets?",
          a: "Pets are allowed with driver consent. Please inform your driver before the ride. Service animals are always welcome."
        }
      ]
    },
    {
      category: "For Drivers",
      questions: [
        {
          q: "How do I become a driver?",
          a: "You must be 21+, have a valid SA driver's license (2+ years), Professional Driving Permit (PDP), comprehensive insurance, and pass background checks."
        },
        {
          q: "How much can I earn?",
          a: "Drivers keep 85% of every fare. Earnings vary based on hours worked, location, and demand. Many drivers earn R3,000-R8,000 per week."
        },
        {
          q: "When do I get paid?",
          a: "Earnings are transferred to your bank account weekly, every Monday, for rides completed the previous week."
        },
        {
          q: "Can I drive part-time?",
          a: "Absolutely! Set your own schedule and work as much or as little as you want. Many drivers work part-time around other commitments."
        },
        {
          q: "What vehicles are accepted?",
          a: "Vehicles must be 2015 or newer, have 4 doors, pass safety inspection, and have comprehensive insurance. Sedans, hatchbacks, and SUVs are accepted."
        }
      ]
    },
    {
      category: "Account & Support",
      questions: [
        {
          q: "I forgot my password. What do I do?",
          a: "Use the 'Forgot Password' link on the login screen. We'll send a reset link to your registered email address."
        },
        {
          q: "How do I update my payment method?",
          a: "Go to Settings → Payment Methods in the app. You can add, remove, or set a default payment method anytime."
        },
        {
          q: "Can I delete my account?",
          a: "Yes, go to Settings → Account → Delete Account. Note that this action is permanent and cannot be undone."
        },
        {
          q: "How do I contact support?",
          a: "Use the in-app Help section, email info@hambarides.co.za, or call our support line. We respond within 24 hours."
        },
        {
          q: "What if I left something in the car?",
          a: "Contact the driver through the app immediately. If you can't reach them, contact support with your trip details and item description."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-3xl font-bold text-gray-900">
              Hamba<span className="text-green-600">Rides</span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Hamba Rides
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, idx) => (
            <div key={idx} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-green-600">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((item, qIdx) => (
                  <div key={qIdx} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.q}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-green-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Our support team is here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition">
              Contact Support
            </Link>
            <a href="mailto:info@hambarides.co.za" className="px-8 py-4 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HambaRides</h3>
              <p className="text-gray-400">Your trusted ride partner in Gauteng</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/safety" className="hover:text-white">Safety</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/refund-policy" className="hover:text-white">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Hamba Rides (Pty) Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
