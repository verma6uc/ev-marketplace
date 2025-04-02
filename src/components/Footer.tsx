
import { Link } from 'react-router-dom';
import { Battery, Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo and description */}
          <div className="md:col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white">
                <Battery className="h-4 w-4 rotate-90" />
              </div>
              <span className="font-display text-xl font-bold">
                <span className="text-primary">Volt</span>
                <span className="text-secondary">Voyage</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-slate-600">
              VoltVoyage transforms the intimidating process of buying a used electric vehicle into a journey of
              confidence and excitement, connecting buyers with sellers in a trusted marketplace.
            </p>
            
            {/* Social media */}
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-slate-400 transition hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 transition hover:text-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 transition hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 transition hover:text-primary" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">Site</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-slate-600 hover:text-primary">Home</Link></li>
              <li><Link to="/vehicles" className="text-slate-600 hover:text-primary">Browse EVs</Link></li>
              <li><Link to="/battery-certification" className="text-slate-600 hover:text-primary">Battery Certification</Link></li>
              <li><Link to="/learning-hub" className="text-slate-600 hover:text-primary">Learning Hub</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-primary">About Us</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/guides" className="text-slate-600 hover:text-primary">EV Buying Guides</Link></li>
              <li><Link to="/calculator" className="text-slate-600 hover:text-primary">Cost Calculator</Link></li>
              <li><Link to="/charging-map" className="text-slate-600 hover:text-primary">Charging Station Map</Link></li>
              <li><Link to="/battery-101" className="text-slate-600 hover:text-primary">Battery Health 101</Link></li>
              <li><Link to="/faqs" className="text-slate-600 hover:text-primary">FAQs</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@voltvoyage.com" className="flex items-center text-slate-600 hover:text-primary"><Mail className="mr-2 h-4 w-4" /> info@voltvoyage.com</a></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-primary">Contact Form</Link></li>
              <li><Link to="/support" className="text-slate-600 hover:text-primary">Support</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} VoltVoyage. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs">
              <Link to="/privacy" className="text-slate-500 hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="text-slate-500 hover:text-primary">Terms of Service</Link>
              <Link to="/cookies" className="text-slate-500 hover:text-primary">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
