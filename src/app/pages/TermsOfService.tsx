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
                    <p className="mt-2 text-gray-400">Last updated: February 17, 2026</p>
                </div>

                {/* Content */}
                <div className="px-8 py-12 space-y-8 text-gray-700 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using the Rurboo platform (web, Android, iOS), you agree to be bound by these Terms of Service. If you do not agree, strictly do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
                        <p>
                            Rurboo serves as an aggregator platform connecting users ("Riders") with independent driver-partners ("Drivers") for transportation services in rural and semi-urban areas. Rurboo does not own vehicles or employ drivers directly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials.</li>
                            <li><strong>Accurate Information:</strong> You must provide accurate and up-to-date information during registration.</li>
                            <li><strong>Conduct:</strong> You allow us to suspend your account for rude, abusive, or dangerous behavior towards drivers.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Driver Partnership Terms</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Documents:</strong> Drivers must maintain valid license, RC, insurance, and permits.</li>
                            <li><strong>Service Standards:</strong> Drivers must maintain vehicle cleanliness and professional conduct.</li>
                            <li><strong>Payments:</strong> Commission rates are fixed as per the agreement. Daily/Weekly payouts are subject to bank processing times.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payments & Cancellations</h2>
                        <p>
                            <strong>Fares:</strong> Riders agree to pay the fare shown upfront or calculated based on the ride distance/time.
                            <br />
                            <strong>Cancellations:</strong> Cancellation fees may apply if a ride is cancelled after 5 minutes of booking.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Liability Limitation</h2>
                        <p>
                            Rurboo is a technology platform. We are not liable for direct damages, personal injury, or property damage resulting from the use of our services, except as explicitly required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
                        <p>
                            We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>
                    </section>

                </div>

                {/* Footer of Policy */}
                <div className="bg-gray-50 px-8 py-6 border-t border-gray-200 flex justify-between items-center">
                    <p className="text-sm text-gray-500">© 2026 Rurboo Technologies</p>
                    <Button variant="outline" asChild>
                        <Link to="/privacy">View Privacy Policy</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
