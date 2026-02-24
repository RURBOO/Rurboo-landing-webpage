import { useState } from 'react';
import { ArrowLeft, Mail, Phone, MessageSquare, ChevronDown, ChevronUp, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';

const FAQ_DATA = [
    {
        category: "For Riders (RURBOO - SAATHI)",
        faqs: [
            { q: "How do I book a ride?", a: "Open RURBOO - SAATHI, allow location access, set your destination on the map, choose a vehicle type (Bike, Auto, or Car), and tap 'Book Ride'. The nearest available driver will be assigned." },
            { q: "What payment methods are accepted?", a: "We accept Cash payments and online payments via Razorpay (UPI, credit/debit cards). You can select your preferred method before confirming the ride." },
            { q: "How do I save favourite locations?", a: "In the search screen, tap the bookmark icon next to any search result to save it as Home, Work, or a Favourite. Your saved locations appear at the top of the search screen for quick access." },
            { q: "Can I cancel a ride?", a: "Yes. You can cancel before a driver is assigned at no charge. After assignment, a cancellation fee may apply. Please be considerate of your driver's time." },
            { q: "What ride types are available?", a: "RURBOO offers Bike rides, Auto rides, and Car rides. Fares vary by vehicle type and distance. All fares are shown upfront before you confirm the booking." },
            { q: "What is the maximum ride distance?", a: "RURBOO supports local and outstation rides up to 100 km. For longer distances, please contact us directly." },
        ]
    },
    {
        category: "For Drivers (RURBOO - HERO)",
        faqs: [
            { q: "How do I register as a driver?", a: "Download RURBOO - HERO, register with your phone number (OTP verification), upload your Driving Licence and Vehicle RC in 'My Documents', and fill in your vehicle details. Our team will verify your documents and activate your account." },
            { q: "How does the commission work?", a: "RURBOO deducts a daily commission from your earnings. The commission amount is communicated at the time of onboarding and is always visible in your app dashboard." },
            { q: "Why does the app need background location?", a: "When you are Online, the app uses background location to receive nearby ride requests instantly, even when you are not actively looking at the screen. You can stop this by going Offline in the app." },
            { q: "How do I go online to accept rides?", a: "On the main screen of RURBOO - HERO, tap the large Online/Offline toggle. When Online, you will start receiving ride requests from nearby riders." },
            { q: "When do I receive notifications for rides?", a: "New ride requests are sent via push notifications. Make sure notifications are enabled for RURBOO - HERO in your phone settings. You have a limited window to accept each request." },
            { q: "What documents do I need to upload?", a: "You need to upload your Driving Licence and your Vehicle Registration Certificate (RC). Make sure documents are clear and valid. Expired documents will result in account deactivation." },
        ]
    },
    {
        category: "General",
        faqs: [
            { q: "Is RURBOO available in my area?", a: "RURBOO is currently expanding in Unnao, Uttar Pradesh and surrounding rural areas. If your area is not yet covered, join our waitlist and we'll notify you when we launch near you." },
            { q: "How do I delete my account?", a: "To delete your account, email us at adarshpandey@rurboo.com with your registered phone number. We will process your deletion request within 7 working days." },
            { q: "What languages does RURBOO support?", a: "RURBOO currently supports English and Hindi. We plan to add more regional languages soon." },
        ]
    }
];

export function Support() {
    const [openFaq, setOpenFaq] = useState<string | null>(null);
    const [form, setForm] = useState({ name: '', phone: '', issue: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await addDoc(collection(db, 'support_requests'), {
                ...form,
                createdAt: serverTimestamp(),
                resolved: false,
            });
            setStatus('success');
            setForm({ name: '', phone: '', issue: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="bg-yellow-400 rounded-2xl px-8 py-10 mb-8">
                    <Link to="/" className="inline-flex items-center text-yellow-900 hover:text-yellow-800 mb-6 transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">Support Centre</h1>
                    <p className="mt-2 text-yellow-800">Get help for RURBOO - SAATHI (Rider App) & RURBOO - HERO (Driver App)</p>
                </div>

                {/* Quick Contact */}
                <div className="grid sm:grid-cols-3 gap-4 mb-10">
                    <a href="mailto:adarshpandey@rurboo.com" className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex items-center gap-3 hover:border-blue-400 transition-colors">
                        <div className="bg-blue-100 p-3 rounded-lg"><Mail className="h-5 w-5 text-blue-600" /></div>
                        <div>
                            <div className="text-xs text-gray-500 mb-0.5">Email Support</div>
                            <div className="text-sm font-medium text-gray-900">adarshpandey@rurboo.com</div>
                        </div>
                    </a>
                    <a href="tel:+918810220691" className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex items-center gap-3 hover:border-blue-400 transition-colors">
                        <div className="bg-green-100 p-3 rounded-lg"><Phone className="h-5 w-5 text-green-600" /></div>
                        <div>
                            <div className="text-xs text-gray-500 mb-0.5">Call Us</div>
                            <div className="text-sm font-medium text-gray-900">+91 8810220691</div>
                        </div>
                    </a>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex items-center gap-3">
                        <div className="bg-purple-100 p-3 rounded-lg"><MessageSquare className="h-5 w-5 text-purple-600" /></div>
                        <div>
                            <div className="text-xs text-gray-500 mb-0.5">Office</div>
                            <div className="text-sm font-medium text-gray-900">Unnao, Uttar Pradesh</div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-10 overflow-hidden">
                    <div className="px-8 py-6 border-b border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {FAQ_DATA.map((cat) => (
                            <div key={cat.category}>
                                <div className="px-8 py-4 bg-gray-50">
                                    <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">{cat.category}</h3>
                                </div>
                                {cat.faqs.map((faq, i) => {
                                    const key = `${cat.category}-${i}`;
                                    const isOpen = openFaq === key;
                                    return (
                                        <div key={key} className="border-t border-gray-100">
                                            <button
                                                className="w-full px-8 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                                onClick={() => setOpenFaq(isOpen ? null : key)}
                                            >
                                                <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                                                {isOpen ? <ChevronUp className="h-4 w-4 text-gray-400 shrink-0" /> : <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />}
                                            </button>
                                            {isOpen && (
                                                <div className="px-8 pb-5 text-gray-600 text-sm leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form - Firestore backed */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-8 py-6 border-b border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-900">Still need help?</h2>
                        <p className="text-gray-500 mt-1 text-sm">Submit a support request and we'll get back to you within 24 hours.</p>
                    </div>
                    <div className="px-8 py-8">
                        {status === 'success' ? (
                            <div className="text-center py-8">
                                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Request Submitted!</h3>
                                <p className="text-gray-500">We'll reach out to you within 24 hours on your phone number.</p>
                                <button onClick={() => setStatus('idle')} className="mt-4 text-blue-600 hover:underline text-sm">Submit another request</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                                        <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                            placeholder="Enter your full name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                        <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                                            placeholder="+91 Enter phone number"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Issue Type *</label>
                                    <select required value={form.issue} onChange={e => setForm({ ...form, issue: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="">Select an issue...</option>
                                        <option value="ride_problem">Problem with a Ride</option>
                                        <option value="payment_issue">Payment / Refund Issue</option>
                                        <option value="driver_registration">Driver Registration / Documents</option>
                                        <option value="account_issue">Account / Login Issue</option>
                                        <option value="app_crash">App Crash or Technical Bug</option>
                                        <option value="location_issue">Location / Map Issue</option>
                                        <option value="notification_issue">Notification Not Working</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Describe your issue *</label>
                                    <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                        rows={4} placeholder="Please describe what happened in detail..."
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                                </div>
                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-md">
                                        <AlertCircle className="h-4 w-4 shrink-0" />
                                        <span>Something went wrong. Please try emailing us at adarshpandey@rurboo.com</span>
                                    </div>
                                )}
                                <button type="submit" disabled={status === 'loading'}
                                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 rounded-md transition-colors text-sm">
                                    {status === 'loading' ? 'Submitting...' : 'Submit Support Request →'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Legal links */}
                <div className="flex gap-4 justify-center mt-8 text-sm text-gray-500">
                    <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                    <span>·</span>
                    <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
                    <span>·</span>
                    <span>© 2026 RURBOO</span>
                </div>
            </div>
        </div>
    );
}
