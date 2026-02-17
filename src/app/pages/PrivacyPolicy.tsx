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
                    <p className="mt-2 text-blue-100">Last updated: February 17, 2026</p>
                </div>

                {/* Content */}
                <div className="px-8 py-12 space-y-8 text-gray-700 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                        <p>
                            Welcome to <strong>Rurboo</strong> ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our products and services (collectively, "Services"). This policy outlines our practices regarding the collection, use, and disclosure of your information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-4">
                            <h3 className="font-semibold text-blue-900 mb-2">For Riders (Users)</h3>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li><strong>Personal Identity:</strong> Name, phone number, email address.</li>
                                <li><strong>Location Data:</strong> Real-time GPS data to facilitate pickups and tracking.</li>
                                <li><strong>Interaction Data:</strong> App usage details, ride history, and feedback.</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                            <h3 className="font-semibold text-green-900 mb-2">For Drivers (Partners)</h3>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li><strong>Identity & Verification:</strong> Driving license, vehicle registration (RC), Aadhar card.</li>
                                <li><strong>Vehicle Details:</strong> Make, model, insurance status.</li>
                                <li><strong>Background Location:</strong> To allocate rides efficiently even when the app is minimized.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Data</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Service Provision:</strong> To connect riders with drivers and facilitate payments.</li>
                            <li><strong>Safety & Security:</strong> To verify identities, track rides for safety, and prevent fraud.</li>
                            <li><strong>Improvements:</strong> To analyze usage trends and improve our app's performance in rural areas.</li>
                            <li><strong>Communication:</strong> To send ride updates, promotions, and security alerts.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing & Disclosure</h2>
                        <p>We do not sell your personal data. We only share information in the following circumstances:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                            <li><strong>With Partners:</strong> Riders' basic details (name, pickup location) are shared with the assigned driver.</li>
                            <li><strong>Legal Requirements:</strong> If required by law enforcement or government authorities.</li>
                            <li><strong>Emergency Services:</strong> In case of an emergency during an active ride.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Rights</h2>
                        <p>You have the right to access, correct, or delete your personal data. You can manage your profile settings within the Rurboo app or contact our support team for assistance.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <address className="not-italic bg-gray-100 p-6 rounded-lg border border-gray-200">
                            <strong>Rurboo Technologies Pvt Ltd.</strong><br />
                            Email: support@rurboo.com<br />
                            Address: Tech Park, Sector 62, Noida, India
                        </address>
                    </section>

                </div>

                {/* Footer of Policy */}
                <div className="bg-gray-50 px-8 py-6 border-t border-gray-200 flex justify-between items-center">
                    <p className="text-sm text-gray-500">© 2026 Rurboo Technologies</p>
                    <Button variant="outline" asChild>
                        <Link to="/terms">View Terms of Service</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
