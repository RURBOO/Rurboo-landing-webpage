import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import ruralImage from '../../assets/rural.jpeg';
import { JoinWaitlist } from './JoinWaitlist';

export function Hero() {
  const driverUrl = "https://rurboo-admin.web.app";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full mb-6">
              <span>🚀 Launching Soon in Rural India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-gray-900 font-bold leading-tight">
              Affordable Rides for{' '}
              <span className="text-blue-600">Rural India</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Book bike, auto, and car rides in your village and small towns.
              Fair pricing, trusted local drivers, and safe journeys for everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <JoinWaitlist
                variant="default"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg h-auto"
              >
                Join Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </JoinWaitlist>

              <a href={driverUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg w-full sm:w-auto"
                >
                  Become a Driver
                </Button>
              </a>
            </div>

            {/* STATS */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-semibold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Villages Ready</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Drivers Joined</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-blue-600">₹40</div>
                <div className="text-sm text-gray-600">Starting Fare</div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={ruralImage}
                alt="Rural India road"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-5 border-l-4 border-yellow-400">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <span className="text-2xl">🛵</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">
                    Your ride is 2 min away
                  </div>
                  <div className="text-lg font-medium text-gray-900">
                    Connecting to nearest driver…
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
