import { Check } from 'lucide-react';

export function WhyDifferent() {
  const differences = [
    {
      feature: "Rural-First Focus",
      rurboo: "Built specifically for villages and small towns",
      others: "Only major cities and urban areas"
    },
    {
      feature: "Pricing",
      rurboo: "Transparent, affordable fares starting ₹30",
      others: "High surge pricing, unpredictable costs"
    },
    {
      feature: "Local Drivers",
      rurboo: "Empowers local drivers from your community",
      others: "Outside drivers, no local connection"
    },
    {
      feature: "Vehicle Options",
      rurboo: "Bike, auto, car - perfect for rural needs",
      others: "Limited options in small towns"
    },
    {
      feature: "Language Support",
      rurboo: "Regional languages supported",
      others: "Primarily English/Hindi"
    },
    {
      feature: "Offline Mode",
      rurboo: "Works with low internet connectivity",
      others: "Requires strong internet connection"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full mb-4">
            <span>✨ What Makes Us Different</span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            RURBOO vs Traditional Ride Apps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another Ola or Uber. We're built from the ground up for rural India.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-blue-600 text-white">
              <div className="text-lg">Feature</div>
              <div className="text-lg text-center">RURBOO</div>
              <div className="text-lg text-center">Ola / Uber</div>
            </div>
            
            {/* Rows */}
            {differences.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 gap-4 p-6 items-center ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="text-gray-900">{item.feature}</div>
                <div className="text-center">
                  <div className="inline-flex items-start gap-2 text-left">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item.rurboo}</span>
                  </div>
                </div>
                <div className="text-center text-gray-500 text-sm">
                  {item.others}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
