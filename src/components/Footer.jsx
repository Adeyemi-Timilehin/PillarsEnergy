import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { getYear } from 'date-fns'

export function Footer() {
 const year = getYear(new Date());

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">PillarsEnergy</span>
                <span className="text-sm text-gray-400 block">Solutions</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading provider of renewable energy solutions, dedicated to helping individuals, 
              businesses, and communities transition to a more sustainable energy future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors" >About Us</Link></li>
              <li><Link to="/consultancy" className="text-gray-400 hover:text-white transition-colors">Consultancy</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/calculator" className="text-gray-400 hover:text-white transition-colors">Calculator</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-600" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-600" />
                <span className="text-gray-400">info@pillarsenergy.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-600 mt-1" />
                <span className="text-gray-400">123 Green Energy Blvd<br />Sustainable City, SC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {year} PillarsEnergy Solutions. All rights reserved. | 
            <Link to="/privacy" className="hover:text-white ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-white ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

