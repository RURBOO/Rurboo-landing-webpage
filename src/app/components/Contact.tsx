import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Contact info */}
            <div>
              <h2 className="text-3xl sm:text-4xl text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Have questions? Want to partner with us? We'd love to hear from you.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Email Us</div>
                    <a href="mailto:adarshpandey@rurboo.com" className="text-blue-600 hover:underline">
                      adarshpandey@rurboo.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Call Us</div>
                    <a href="tel:+918810220691" className="text-blue-600 hover:underline">
                      +91 8810220691
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Office</div>
                    <div className="text-gray-600">
                      Unnao, Uttar Pradesh<br />
                      India
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social media */}
              <div>
                <div className="text-gray-900 mb-4">Follow Us</div>
                <div className="flex gap-4">
                  <a href="#" className="bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-700 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-blue-400 p-3 rounded-lg text-white hover:bg-blue-500 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-pink-600 p-3 rounded-lg text-white hover:bg-pink-700 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-blue-700 p-3 rounded-lg text-white hover:bg-blue-800 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right side - Quick links */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl text-gray-900 mb-6">Quick Links</h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-900 mb-3">For Riders</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li><a href="#" className="hover:text-blue-600">How to Book</a></li>
                      <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                      <li><a href="#" className="hover:text-blue-600">Safety Tips</a></li>
                      <li><a href="#" className="hover:text-blue-600">FAQs</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-900 mb-3">For Drivers</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li><a href="#" className="hover:text-blue-600">Join as Driver</a></li>
                      <li><a href="#" className="hover:text-blue-600">Earnings</a></li>
                      <li><a href="#" className="hover:text-blue-600">Requirements</a></li>
                      <li><a href="#" className="hover:text-blue-600">Support</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-900 mb-3">Company</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                      <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                      <li><a href="#" className="hover:text-blue-600">Press</a></li>
                      <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-900 mb-3">Legal</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
                      <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                      <li><a href="#" className="hover:text-blue-600">Refund Policy</a></li>
                    </ul>
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