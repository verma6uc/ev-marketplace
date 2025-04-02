
import { Link } from 'react-router-dom'
import { Battery, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <Battery className="w-8 h-8 text-energy-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">V</span>
                </div>
              </div>
              <span className="font-display text-xl font-bold">
                <span className="text-primary-400">Volt</span>
                <span className="text-energy-400">Voyage</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              Transforming the way people buy and sell pre-owned electric vehicles with transparency,
              expertise, and community trust.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-display font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-primary-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/browse" className="text-slate-400 hover:text-primary-300 transition-colors">Browse EVs</Link>
              </li>
              <li>
                <Link to="/battery-certification" className="text-slate-400 hover:text-primary-300 transition-colors">Battery Health</Link>
              </li>
              <li>
                <Link to="/learning-hub" className="text-slate-400 hover:text-primary-300 transition-colors">Learning Hub</Link>
              </li>
              <li>
                <Link to="/seller-dashboard" className="text-slate-400 hover:text-primary-300 transition-colors">Seller Dashboard</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-primary-300 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-display font-medium text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/ev-guides" className="text-slate-400 hover:text-primary-300 transition-colors">EV Buyer Guides</Link>
              </li>
              <li>
                <Link to="/cost-calculator" className="text-slate-400 hover:text-primary-300 transition-colors">EV Cost Calculator</Link>
              </li>
              <li>
                <Link to="/charging-map" className="text-slate-400 hover:text-primary-300 transition-colors">Charging Station Map</Link>
              </li>
              <li>
                <Link to="/battery-health-explainer" className="text-slate-400 hover:text-primary-300 transition-colors">Battery Health Explained</Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-primary-300 transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-primary-300 transition-colors">EV Market Blog</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-display font-medium text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-400 mr-2 shrink-0" />
                <span className="text-slate-400">123 EV Drive, Sustainable City, EC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-400 mr-2 shrink-0" />
                <span className="text-slate-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-400 mr-2 shrink-0" />
                <a href="mailto:info@voltvoyage.com" className="text-slate-400 hover:text-primary-300 transition-colors">
                  info@voltvoyage.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500">
          <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              &copy; {new Date().getFullYear()} VoltVoyage. All rights reserved.
            </div>
            <div className="flex justify-center md:justify-end space-x-6">
              <Link to="/privacy" className="hover:text-primary-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary-300 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-primary-300 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
  