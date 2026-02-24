import { useState } from 'react';
import { SimpleModal } from './SimpleModal';
import { Button } from './ui/button';

interface BecomeDriverProps {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    className?: string;
    children?: React.ReactNode;
    size?: "default" | "sm" | "lg" | "icon";
    onClick?: () => void;
}

export function BecomeDriver({ variant = "outline", className, children, size, onClick }: BecomeDriverProps) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const driverEmail = 'adarshpandey@rurboo.com';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent('Driver Registration Interest - RURBOO');
        const body = encodeURIComponent(
            `Hello RURBOO Team,\n\nI am interested in becoming a driver partner.\n\nName: ${name}\nPhone: ${phone}\nCity/Village: ${city}\n\nPlease contact me with further details.\n\nThank you!`
        );
        window.open(`mailto:${driverEmail}?subject=${subject}&body=${body}`, '_blank');
        setSubmitted(true);
    };

    return (
        <>
            <Button variant={variant} size={size} className={className} onClick={() => { setOpen(true); onClick?.(); }}>
                {children || 'Become a Driver'}
            </Button>

            <SimpleModal
                isOpen={open}
                onClose={() => { setOpen(false); setSubmitted(false); }}
                title="🚗 Become a RURBOO Driver"
                description="Register your interest and our team will reach out to you soon."
            >
                {submitted ? (
                    <div className="text-center py-6">
                        <div className="text-4xl mb-3">✅</div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Thank You!</h4>
                        <p className="text-sm text-gray-500">Your email app has opened. Please send the email to complete your registration.</p>
                        <p className="text-xs text-blue-600 mt-2 font-medium">{driverEmail}</p>
                        <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setOpen(false)}>
                            Done
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                            <input
                                required
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Enter your full name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                            <input
                                required
                                type="tel"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder="+91 Enter phone number"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">City / Village *</label>
                            <input
                                required
                                type="text"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                                placeholder="Where do you want to drive?"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="pt-1">
                            <p className="text-xs text-gray-400 mb-3">
                                Clicking "Send Application" will open your email app with a pre-filled message to <span className="text-blue-600 font-medium">{driverEmail}</span>
                            </p>
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Send Application →
                            </Button>
                        </div>
                    </form>
                )}
            </SimpleModal>
        </>
    );
}
