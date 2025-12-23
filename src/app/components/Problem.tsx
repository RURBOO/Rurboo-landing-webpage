import { XCircle } from 'lucide-react';

export function Problem() {
  const problems = [
    {
      icon: "🚫",
      title: "No Reliable Transport",
      description: "Limited options for daily commute in villages and small towns"
    },
    {
      icon: "💸",
      title: "Unfair Pricing",
      description: "Local transport charges unpredictable and often too high"
    },
    {
      icon: "⏰",
      title: "Long Wait Times",
      description: "Hours wasted waiting for rides, especially during peak times"
    },
    {
      icon: "🔒",
      title: "Safety Concerns",
      description: "Unknown drivers and vehicles with no tracking or accountability"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
            <XCircle className="h-5 w-5" />
            <span>The Challenge in Rural India</span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Why Rural India Needs Better Mobility
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Millions in rural and semi-urban areas struggle with basic transportation. RURBOO changes that.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
