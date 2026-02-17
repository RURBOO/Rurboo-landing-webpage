import { Button } from './ui/button';

interface JoinWaitlistProps {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    className?: string;
    children?: React.ReactNode;
}

export function JoinWaitlist({ variant = "default", className, children }: JoinWaitlistProps) {
    return (
        <Button
            variant={variant}
            className={className}
            asChild
        >
            <a href="#join">
                {children || "Join Waitlist"}
            </a>
        </Button>
    );
}
