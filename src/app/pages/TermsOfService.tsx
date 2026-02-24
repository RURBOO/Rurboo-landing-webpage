import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TermsOfService() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-gray-900 px-8 py-10 text-white">
                    <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold">Terms of Service</h1>
                    <p className="mt-2 text-gray-400">Last updated: February 24, 2026</p>
                </div>

                {/* Content */}
                <div className="px-8 py-12 space-y-8 text-gray-700 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By downloading or using <strong>RURBOO - SAATHI</strong> (rider app) or <strong>RURBOO - HERO</strong> (driver app),
                            or by accessing <strong>rurboo.com</strong>, you agree to be bound by these Terms of Service.
                            If you do not agree, please uninstall the application and do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. About RURBOO</h2>
                        <p>
                            RURBOO is a technology platform connecting independent driver-partners (<strong>RURBOO - HERO</strong>) with
                            riders (<strong>RURBOO - SAATHI</strong>) for transportation services in rural and semi-urban areas of India,
                            starting from Unnao, Uttar Pradesh. RURBOO does not own vehicles or employ drivers directly.
                            Drivers are independent partners who choose to accept ride requests through our platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Eligibility</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>You must be at least 18 years old to use RURBOO services.</li>
                            <li>You must have a valid Indian phone number for OTP-based registration.</li>
                            <li>Drivers must hold a valid Indian driving licence and vehicle registration (RC).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Rider (RURBOO - SAATHI) Terms</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Booking:</strong> You can book bike, auto, or car rides by setting your pickup and destination on the map.</li>
                            <li><strong>Fare:</strong> The fare is calculated based on distance and vehicle type at the time of booking. The displayed fare is binding.</li>
                            <li><strong>Cancellations:</strong> You may cancel a ride before a driver is assigned for free. After driver assignment, a cancellation fee may apply at RURBOO's discretion.</li>
                            <li><strong>Payment:</strong> Fares are payable via cash or Razorpay online payment. All online transactions are secured by Razorpay.</li>
                            <li><strong>Location:</strong> You must grant location permission for the app to function. RURBOO only accesses foreground location for riders.</li>
                            <li><strong>Conduct:</strong> Abusive, threatening, or disrespectful behaviour toward drivers may result in immediate account suspension.</li>
                            <li><strong>Favourite Locations:</strong> Saved locations (Home, Work, Favourites) are stored in your account and synced across devices.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Driver Partner (RURBOO - HERO) Terms</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Document Upload:</strong> Drivers must upload a valid Driving Licence and Vehicle RC via the "My Documents" section before starting to accept rides. Documents are reviewed by RURBOO administrators.</li>
                            <li><strong>Vehicle Info:</strong> Drivers must enter accurate vehicle details (make, model, registration number, type).</li>
                            <li><strong>Background Location:</strong> The app requires background location access while you are Online to receive ride requests. You consent to this when you mark yourself Online.</li>
                            <li><strong>Commission:</strong> RURBOO deducts a daily commission from driver earnings. The exact amount is communicated at the time of onboarding and visible in the app.</li>
                            <li><strong>Earnings:</strong> Earnings are tracked per ride. Daily commission is settled as per the schedule communicated by RURBOO administration.</li>
                            <li><strong>Service Standards:</strong> Drivers must maintain vehicle cleanliness, courtesy toward riders, and follow all applicable traffic laws.</li>
                            <li><strong>Deactivation:</strong> RURBOO may deactivate a driver account for repeated ride cancellations, document expiry, or policy violations.</li>
                            <li><strong>FCM Notifications:</strong> Accepting ride requests requires push notifications to be enabled. Disabling notifications may result in missed ride opportunities.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Ride Distance Limits</h2>
                        <p>
                            RURBOO currently supports local rides within rural and semi-urban areas. For outstation rides,
                            the maximum supported distance is <strong>100 km</strong> (enforced in-app). Long-distance rides
                            beyond this limit must be pre-arranged directly with the driver outside the platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Prohibited Activities</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Using the platform for any illegal activity or transportation of prohibited goods.</li>
                            <li>Misrepresenting your identity or providing false documents.</li>
                            <li>Attempting to manipulate fare calculations or GPS data.</li>
                            <li>Sharing your account credentials with others.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Liability Limitation</h2>
                        <p>
                            RURBOO is a technology intermediary. We are not liable for personal injury, property damage,
                            or loss arising from the transportation service provided by independent driver-partners, except
                            as required by applicable Indian law. In case of disputes between riders and drivers, RURBOO
                            will review evidence and take appropriate action, but cannot guarantee outcomes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Account Termination</h2>
                        <p>
                            You may delete your account at any time by contacting <a href="mailto:adarshpandey@rurboo.com" className="text-blue-600 hover:underline">adarshpandey@rurboo.com</a>.
                            RURBOO retains the right to suspend or terminate any account for violation of these terms,
                            fraudulent activity, or safety concerns without prior notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
                        <p>
                            These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction
                            of courts in Unnao, Uttar Pradesh, India.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
                        <address className="not-italic bg-gray-100 p-6 rounded-lg border border-gray-200">
                            <strong>RURBOO</strong><br />
                            Email: <a href="mailto:adarshpandey@rurboo.com" className="text-blue-600 hover:underline">adarshpandey@rurboo.com</a><br />
                            Phone: <a href="tel:+918810220691" className="text-blue-600 hover:underline">+91 8810220691</a><br />
                            Address: Unnao, Uttar Pradesh, India
                        </address>
                    </section>

                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-8 py-6 border-t border-gray-200 flex justify-between items-center flex-wrap gap-4">
                    <p className="text-sm text-gray-500">© 2026 RURBOO. All rights reserved.</p>
                    <div className="flex gap-3">
                        <Button variant="outline" asChild>
                            <Link to="/privacy">Privacy Policy</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link to="/support">Support</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
