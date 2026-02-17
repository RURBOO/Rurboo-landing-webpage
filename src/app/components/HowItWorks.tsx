import { Smartphone, MapPin, Car, CheckCircle, UserPlus, Clock, Wallet } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function HowItWorks() {
  const riderSteps = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Download App",
      description: "Get RURBOO app on your phone (Coming Soon)"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Set Destination",
      description: "Enter where you want to go"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Choose Ride",
      description: "Select bike, auto, or car"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Enjoy Your Ride",
      description: "Track driver and reach safely"
    }
  ];

  const driverSteps = [
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: "Register Online",
      description: "Sign up with your documents"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Get Verified",
      description: "Quick background check for safety"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Go Online",
      description: "Start accepting ride requests"
    },
    {
      icon: <Wallet className="h-8 w-8" />,
      title: "Earn Daily",
      description: "Get paid directly to your account"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full mb-4">
            <span>📱 Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            How RURBOO Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Easy for riders. Profitable for drivers. Simple for everyone.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="riders" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12 bg-white p-1 rounded-lg">
              <TabsTrigger value="riders" className="text-lg">For Riders</TabsTrigger>
              <TabsTrigger value="drivers" className="text-lg">For Drivers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="riders" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {riderSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">
                        {index + 1}
                      </div>
                      <div className="text-blue-600 mb-4">{step.icon}</div>
                      <h3 className="text-lg text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                    
                    {index < riderSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="drivers" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {driverSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="absolute -top-4 -left-4 bg-yellow-500 text-blue-900 w-10 h-10 rounded-full flex items-center justify-center text-lg">
                        {index + 1}
                      </div>
                      <div className="text-yellow-600 mb-4">{step.icon}</div>
                      <h3 className="text-lg text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                    
                    {index < driverSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-yellow-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
