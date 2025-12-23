import { Shield, UserCheck, MapPinned, Phone, Star, Lock } from 'lucide-react';

export function TrustSafety() {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified Drivers",
      description: "All drivers go through background checks and vehicle verification"
    },
    {
      icon: <MapPinned className="h-8 w-8" />,
      title: "Live Tracking",
      description: "Track your ride in real-time and share with family"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock helpline in your local language"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Rating System",
      description: "Rate drivers and riders to maintain quality"
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Local Drivers",
      description: "Drivers from your own community for trusted service"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Secure Payments",
      description: "Safe digital payments with multiple options"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Shield className="h-5 w-5" />
            <span>Your Safety First</span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Trust & Safety at Every Step
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your safety is our priority. We've built RURBOO with multiple layers of protection.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
              <div className="bg-blue-600 text-white p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Trust badges */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl mb-4">
              Built with Trust. Powered by Community.
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              RURBOO partners with local communities, police departments, and village councils 
              to ensure the highest standards of safety and reliability.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl mb-2">100%</div>
                <div className="text-blue-100">Verified Drivers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl mb-2">4.8★</div>
                <div className="text-blue-100">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl mb-2">0</div>
                <div className="text-blue-100">Safety Issues</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
