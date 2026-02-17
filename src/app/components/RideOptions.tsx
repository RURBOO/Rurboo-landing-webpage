import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { JoinWaitlist } from './JoinWaitlist';

export function RideOptions() {
  const rides = [
    {
      type: "Bike Rides",
      icon: "🏍️",
      description: "Quick and affordable rides for 1 person",
      features: ["Solo travel", "Fast commute", "Budget-friendly"],
      price: "Starting ₹40",
      image: "https://images.unsplash.com/photo-1558980394-a3099ed53abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwYmlrZSUyMHJpZGVyfGVufDF8fHx8MTc2NjQwMjgzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "blue"
    },
    {
      type: "Auto Rides",
      icon: "🛺",
      description: "Comfortable rides for 2-3 people with luggage",
      features: ["Group travel", "More space", "Local favorite"],
      price: "Starting ₹80",
      image: "https://images.unsplash.com/photo-1626491058156-2daaeea7f578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmlja3NoYXclMjBpbmRpYXxlbnwxfHx8fDE3NjYzNjg4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "yellow"
    },
    {
      type: "Car Rides",
      icon: "🚗",
      description: "Premium comfort for families and longer trips",
      features: ["Family travel", "AC comfort", "Safe & spacious"],
      price: "Starting ₹150",
      image: "https://images.unsplash.com/photo-1739065679554-21786d6f126b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMHRvd24lMjBpbmRpYSUyMHN0cmVldHxlbnwxfHx8fDE3NjY0Njc0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "green"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <span>🚀 Choose Your Ride</span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Rides for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're traveling solo or with family, we have the perfect ride option for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {rides.map((ride, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={ride.image}
                  alt={ride.type}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-2xl">{ride.icon}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl text-gray-900 mb-2">{ride.type}</h3>
                <p className="text-gray-600 mb-4">{ride.description}</p>

                <ul className="space-y-2 mb-6">
                  {ride.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="h-1.5 w-1.5 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-sm text-gray-500">Price</div>
                    <div className="text-xl text-blue-600">{ride.price}</div>
                  </div>
                  <JoinWaitlist variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Book Now
                  </JoinWaitlist>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}