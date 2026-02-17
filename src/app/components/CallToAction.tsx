import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowRight, Bell } from 'lucide-react';
import { useState } from 'react';

export function CallToAction() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send to backend
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-10 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full mb-6">
            <Bell className="h-5 w-5" />
            <span>Launching Soon!</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Be Part of the Rural Mobility Revolution
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join thousands of early adopters. Get exclusive launch offers and be the first 
            to experience RURBOO in your village.
          </p>
          
          {/* Email signup form */}
          <div className="max-w-xl mx-auto mb-12">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email"
                placeholder="Enter your email or phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-6 text-lg bg-white"
              />
              <Button 
                type="submit"
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 h-14 px-8 whitespace-nowrap"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
            
            {submitted && (
              <div className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg animate-fade-in">
                ✓ Thank you! We'll notify you when we launch.
              </div>
            )}
            
            <p className="text-blue-200 text-sm mt-4">
              🎁 Early members get 3 free rides + special discounts
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-blue-500">
            <div>
              <div className="text-3xl md:text-4xl text-yellow-400 mb-2">5,000+</div>
              <div className="text-blue-100">People on Waitlist</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-yellow-400 mb-2">50+</div>
              <div className="text-blue-100">Villages Ready</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-yellow-400 mb-2">Q1 2025</div>
              <div className="text-blue-100">Expected Launch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
