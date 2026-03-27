'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Pricing() {
  const [distance, setDistance] = useState(10);
  const [duration, setDuration] = useState(15);
  const [rideType, setRideType] = useState<'economy' | 'standard'>('economy');

  const pricing = {
    economy: { baseFare: 5, perKm: 8.5, perMin: 0.6, minFare: 25 },
    standard: { baseFare: 7, perKm: 9.7, perMin: 1.0, minFare: 30 },
  };

  const current = pricing[rideType];
  const subtotal = current.baseFare + (distance * current.perKm) + (duration * current.perMin);
  const bookingFee = subtotal * 0.02;
  const totalFare = Math.max(current.minFare, subtotal + bookingFee);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-3xl font-bold text-gray-900">Hamba<span className="text-green-600">Rides</span></Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">← Back to Home</Link>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-gray-600">No hidden fees. No surge pricing. What you see is what you pay.</p>
        </div>
      </section>

      {/* Fare Calculator */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Fare Calculator</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Select Ride Type</label>
              <div className="flex gap-4">
                <button
                  onClick={() => setRideType('economy')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${
                    rideType === 'economy'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-600'
                  }`}
                >
                  Economy
                </button>
                <button
                  onClick={() => setRideType('standard')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${
                    rideType === 'standard'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-600'
                  }`}
                >
                  Standard
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Distance (km): {distance}</label>
                <input type="range" min="1" max="50" value={distance} onChange={(e) => setDistance(Number(e.target.value))} className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Duration (minutes): {duration}</label>
                <input type="range" min="5" max="60" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-300">
              <div className="space-y-3 text-lg">
                <div className="flex justify-between"><span className="text-gray-700">Base Fare</span><span className="font-semibold">R {current.baseFare.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Distance ({distance} km × R{current.perKm.toFixed(2)})</span><span className="font-semibold">R {(distance * current.perKm).toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Time ({duration} min × R{current.perMin.toFixed(2)})</span><span className="font-semibold">R {(duration * current.perMin).toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Booking Fee (2%)</span><span className="font-semibold">R {bookingFee.toFixed(2)}</span></div>
                <div className="flex justify-between text-2xl font-bold text-green-600 pt-4 border-t border-gray-300"><span>Estimated Total</span><span>R {totalFare.toFixed(2)}</span></div>
              </div>
              <p className="text-sm text-gray-500 mt-4">*Peak hour surcharge (1.2-1.5%) applies weekdays 6-9am & 4:30-6:30pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Ride Types & Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-green-600">
              <h3 className="text-2xl font-bold mb-2">Economy</h3>
              <p className="text-gray-600 mb-4">Affordable rides for everyday travel</p>
              <div className="space-y-3">
                <div className="flex justify-between pb-2 border-b"><span className="text-gray-700">Minimum Fare</span><span className="font-bold text-lg">R 25.00</span></div>
                <div className="flex justify-between pb-2 border-b"><span className="text-gray-700">Base Fare</span><span className="font-bold text-lg">R 5.00</span></div>
                <div className="flex justify-between pb-2 border-b"><span className="text-gray-700">Per Kilometer</span><span className="font-bold text-lg">R 8.50</span></div>
                <div className="flex justify-between pb-2 border-b"><span className="text-gray-700">Per Minute</span><span className="font-bold text-lg">R 0.60</span></div>
                <div className="flex justify-between pb-2 border-b"><span className="text-gray-700">Booking Fee</span><span className="font-bold text-lg">2%</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Peak Surcharge</span><span className="font-bold text-lg">1.2%</span></div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-blue-600">
              <h3 className="text-2xl font-bold mb-2">Standard</h3>
              <p className="text-gray-600 mb-4">Comfortable rides with premium service</p>
              <div className="space-y-3">
                <div className="flex justify-between pb-2 border-b"><span className="text-gray-700">Minimum Fare</span><span className="font-bold text-lg">R 30.00</span></div>
                <div className="flex justify-between pb-2 border-b"><span className="text-gray-700">Base Fare</span><span className="font-bold text-lg">R 7.00</span></div>
                <div className="flex justify-between pb-2 border-b"><span className="text-gray-700">Per Kilometer</span><span className="font-bold text-lg">R 9.70</span></div>
                <div className="flex justify-between pb-2 border-b"><span className="text-gray-700">Per Minute</span><span className="font-bold text-lg">R 1.00</span></div>
                <div className="flex justify-between pb-2 border-b"><span className="text-gray-700">Booking Fee</span><span className="font-bold text-lg">2%</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Peak Surcharge</span><span className="font-bold text-lg">1.5%</span></div>
              </div>
            </div>
          </div>
          <div className="bg-pink-50 p-6 rounded-2xl border-2 border-pink-300">
            <h3 className="text-xl font-bold mb-2 text-pink-900">👩 Women-Only Rides Available</h3>
            <p className="text-gray-700">Both Economy Women and Standard Women options available with female drivers only. Same pricing as regular rides.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Example Fares (Economy)</h3>
              <div className="space-y-4">
                <div><div className="font-semibold mb-1">Sandton to Rosebank (8km, 12min)</div><div className="text-2xl font-bold text-green-600">R 80.56</div></div>
                <div className="pt-3 border-t"><div className="font-semibold mb-1">Pretoria CBD to Centurion (15km, 20min)</div><div className="text-2xl font-bold text-green-600">R 145.35</div></div>
                <div className="pt-3 border-t"><div className="font-semibold mb-1">OR Tambo to Sandton (25km, 30min)</div><div className="text-2xl font-bold text-green-600">R 234.60</div></div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Cancellation Policy</h3>
              <div className="space-y-4">
                <div className="pb-3 border-b"><div className="font-semibold mb-1">Free Cancellation</div><div className="text-gray-700">Within 2 minutes of booking</div><div className="text-2xl font-bold text-green-600">R 0.00</div></div>
                <div className="pb-3 border-b"><div className="font-semibold mb-1">After Driver Accepts</div><div className="text-gray-700">Driver is on the way</div><div className="text-2xl font-bold text-orange-600">R 15.00</div></div>
                <div><div className="font-semibold mb-1">After Driver Arrives</div><div className="text-gray-700">Driver is waiting at pickup</div><div className="text-2xl font-bold text-red-600">R 25.00</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No Hidden Fees */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Transparent Pricing Guarantee</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-xl"><div className="text-4xl mb-3">✓</div><h3 className="font-bold mb-2">Upfront Estimates</h3><p className="text-gray-700">See your exact fare before you book</p></div>
            <div className="bg-green-50 p-6 rounded-xl"><div className="text-4xl mb-3">✓</div><h3 className="font-bold mb-2">Fair Cancellation</h3><p className="text-gray-700">Free cancellation within 2 minutes</p></div>
            <div className="bg-green-50 p-6 rounded-xl"><div className="text-4xl mb-3">✓</div><h3 className="font-bold mb-2">Driver-Friendly</h3><p className="text-gray-700">79% of fare goes to drivers</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ride?</h2>
          <p className="text-xl text-green-100 mb-8">Download the app and get your first ride</p>
          <Link href="/" className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition inline-block">Download App</Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div><h3 className="text-xl font-bold mb-4">HambaRides</h3><p className="text-gray-400">Your trusted ride partner</p></div>
            <div><h4 className="font-semibold mb-4">Company</h4><ul className="space-y-2 text-gray-400"><li><Link href="/about" className="hover:text-white">About</Link></li><li><Link href="/contact" className="hover:text-white">Contact</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Services</h4><ul className="space-y-2 text-gray-400"><li><Link href="/features" className="hover:text-white">Features</Link></li><li><Link href="/safety" className="hover:text-white">Safety</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Legal</h4><ul className="space-y-2 text-gray-400"><li><Link href="/privacy-policy" className="hover:text-white">Privacy</Link></li><li><Link href="/faq" className="hover:text-white">FAQ</Link></li></ul></div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"><p>&copy; 2026 Hamba Rides (Pty) Ltd.</p></div>
        </div>
      </footer>
    </div>
  );
}
