import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-blue-600 px-8 py-10 text-white">
                    <Link to="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold">Privacy Policy</h1>
                    <p className="mt-2 text-blue-100">Last updated: February 24, 2026</p>
                </div>

                {/* Content */}
                <div className="px-8 py-12 space-y-8 text-gray-700 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                        <p>
                            Welcome to <strong>RURBOO</strong> ("we," "our," or "us"). We operate two applications:
                            <strong> RURBOO - SAATHI</strong> (for riders) and <strong>RURBOO - HERO</strong> (for driver-partners).
                            We are committed to protecting your privacy. This policy explains what personal data we collect,
                            how we use it, and your rights under applicable Indian data protection laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-4">
                            <h3 className="font-semibold text-blue-900 mb-2">For Riders (RURBOO - SAATHI)</h3>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li><strong>Identity:</strong> Name, phone number (used for OTP-based login via Firebase Authentication).</li>
                                <li><strong>Location Data:</strong> Real-time GPS to detect pickup location, suggest destinations, and track your active ride.</li>
                                <li><strong>Ride History:</strong> All completed, cancelled, and ongoing ride records stored in Firestore.</li>
                                <li><strong>Favourite Locations:</strong> Home, Work, and other saved places you add in the app.</li>
                                <li><strong>Payment Info:</strong> Razorpay transaction IDs for cash/online rides (we do not store full card details).</li>
                                <li><strong>Camera / Storage:</strong> Used only when you upload a profile photo.</li>
                                <li><strong>Voice Preferences:</strong> Your TTS (text-to-speech) announcement preference is stored locally on your device.</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                            <h3 className="font-semibold text-green-900 mb-2">For Drivers (RURBOO - HERO)</h3>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li><strong>Identity & Verification:</strong> Name, phone number, age, profile photo, Driving License, Vehicle RC document images.</li>
                                <li><strong>Vehicle Details:</strong> Vehicle make, model, registration number, type (bike/auto/car).</li>
                                <li><strong>Background Location:</strong> Continuous GPS tracking even when the app is minimised, to receive and match nearby ride requests efficiently.</li>
                                <li><strong>Earnings & Commission:</strong> Daily earnings, commission due, ride counts stored per session.</li>
                                <li><strong>FCM Token:</strong> Firebase Cloud Messaging token for push notifications (new ride alerts, status updates).</li>
                                <li><strong>Online/Offline Status:</strong> Your availability status is tracked in real-time in Firestore.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Data</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Ride Matching:</strong> To connect the nearest available RURBOO - HERO driver to the rider's pickup location.</li>
                            <li><strong>Safety & Tracking:</strong> Active ride location is shared between rider and driver for real-time tracking.</li>
                            <li><strong>Payments:</strong> Fare calculation based on distance and vehicle type; processed via Razorpay.</li>
                            <li><strong>Push Notifications:</strong> Ride status updates, new ride requests, and platform announcements.</li>
                            <li><strong>Voice Announcements:</strong> TTS announcements for ride details, fares, and navigation prompts.</li>
                            <li><strong>Document Verification:</strong> Driver-uploaded documents (Licence, RC) are reviewed by administrators via the RURBOO Admin Panel for onboarding approval.</li>
                            <li><strong>Analytics:</strong> Aggregate, anonymised usage data to improve app performance and expand to new rural areas.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Storage & Security</h2>
                        <p>All data is stored on <strong>Google Firebase (Firestore)</strong> infrastructure within secure Google Cloud data centres.
                            Document images are stored in <strong>Firebase Storage</strong>. We use Firebase Security Rules to ensure
                            users can only access their own data. Driver background location data is encrypted in transit and is only
                            used for ride dispatch — it is never sold to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing & Disclosure</h2>
                        <p>We do not sell your personal data. We share data only in these circumstances:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                            <li><strong>Rider ↔ Driver:</strong> Rider's name and pickup location are shared with the assigned driver during an active ride, and vice versa.</li>
                            <li><strong>Razorpay:</strong> Payment metadata shared for transaction processing only.</li>
                            <li><strong>Admin Panel:</strong> Driver documents and status are visible to authorised RURBOO administrators for verification.</li>
                            <li><strong>Legal Requirements:</strong> If required by Indian law enforcement or court orders.</li>
                            <li><strong>Emergency:</strong> Location data may be shared with emergency services during an active ride if required.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Background Location (Drivers)</h2>
                        <p>
                            The <strong>RURBOO - HERO</strong> driver app collects location data in the background while you are
                            marked as "Online." This is <strong>required to receive ride requests</strong> when the app is not
                            in the foreground. You can stop background location collection by going Offline in the app or
                            revoking the permission in your device settings. Background location is never collected when you are
                            marked Offline.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights & Account Deletion</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                            <li>Access or download a copy of your personal data by contacting us.</li>
                            <li>Update your name, phone, or profile photo within the app.</li>
                            <li>Revoke location permission at any time from device settings (note: this will disable core ride booking features).</li>
                        </ul>
                        <div className="bg-red-50 p-6 rounded-lg border border-red-100 mt-6">
                            <h3 className="font-semibold text-red-900 mb-2">Account Deletion Request</h3>
                            <p className="text-red-800 mb-4">
                                You have the right to request the deletion of your account and all associated personal data.
                                To initiate an account deletion request, please click the button below or email us directly at
                                <a href="mailto:adarshpandey@rurboo.com?subject=Account Deletion Request" className="font-semibold underline ml-1">adarshpandey@rurboo.com</a>.
                            </p>
                            <p className="text-sm text-red-700 mb-4 cursor-text">
                                Please include your registered phone number in the email so we can locate your account. Your account and associated data will be permanently deleted within 30 days of your request.
                            </p>
                            <Button variant="destructive" asChild>
                                <a href="mailto:adarshpandey@rurboo.com?subject=Account%20Deletion%20Request&body=Hello RURBOO Team,%0D%0A%0D%0AI would like to request the deletion of my account and all associated data.%0D%0A%0D%0AMy registered phone number is: [ENTER YOUR PHONE NUMBER HERE]%0D%0A%0D%0AThank you.">
                                    Request Account Deletion
                                </a>
                            </Button>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
                        <p className="mb-4">
                            For any privacy-related concerns or data deletion requests, contact us at:
                        </p>
                        <address className="not-italic bg-gray-100 p-6 rounded-lg border border-gray-200">
                            <strong>RURBOO</strong><br />
                            Email: <a href="mailto:adarshpandey@rurboo.com" className="text-blue-600 hover:underline">adarshpandey@rurboo.com</a><br />
                            Phone: <a href="tel:+918810220691" className="text-blue-600 hover:underline">+91 8810220691</a><br />
                            Address: Unnao, Uttar Pradesh, India
                        </address>
                    </section>

                </div>

                {/* Footer of Policy */}
                <div className="bg-gray-50 px-8 py-6 border-t border-gray-200 flex justify-between items-center flex-wrap gap-4">
                    <p className="text-sm text-gray-500">© 2026 RURBOO. All rights reserved.</p>
                    <div className="flex gap-3">
                        <Button variant="outline" asChild>
                            <Link to="/terms">Terms of Service</Link>
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
