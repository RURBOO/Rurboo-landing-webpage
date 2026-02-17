import { useState } from 'react';
import { Button } from './ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// Assuming firebase is initialized in strict mode in main.tsx, but we might need to import db from a config file
// If no config file exists, we'll assume standard firebase usage or need to create one.
// Checking previous file imports... I don't see a firebase config import.
// I will assume standard initialization or create a db instance if needed.
// Actually, I should check existing files for firebase init.
// For now, I'll mock the DB call or just use window.firebase if available, 
// BUT to be "Production Ready" I need a real firebase config file.
// I'll create a simple one if missing.

import { db } from '../../firebase'; // I'll ensure this exists

interface JoinWaitlistProps {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    className?: string;
    children?: React.ReactNode;
}

export function JoinWaitlist({ variant = "default", className, children }: JoinWaitlistProps) {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (!email) return;

            await addDoc(collection(db, 'waitlist'), {
                email,
                createdAt: serverTimestamp(),
                source: 'landing_page'
            });

            setSuccess(true);
            setTimeout(() => {
                setOpen(false);
                setSuccess(false);
                setEmail('');
            }, 2000);
        } catch (error) {
            console.error("Error adding to waitlist", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={variant} className={className}>
                    {children || "Join Waitlist"}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Join the Rurboo Waitlist</DialogTitle>
                    <DialogDescription>
                        Be the first to know when we launch in your village.
                    </DialogDescription>
                </DialogHeader>

                {success ? (
                    <div className="flex flex-col items-center justify-center py-6 text-green-600">
                        <div className="text-4xl mb-2">🎉</div>
                        <p className="font-semibold">You're on the list!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-4">
                        <Input
                            id="email"
                            placeholder="Enter your email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Button type="submit" disabled={loading}>
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                            Join Now
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}
