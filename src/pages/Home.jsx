import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { 
  Zap, 
  Sun, 
  Battery, 
  TrendingUp, 
  Shield, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Leaf,
  Star,
  Phone,
  Mail,
  DollarSign
} from 'lucide-react'

export function Home() {
  const services = [
    {
      icon: Sun,
      title: 'Solar Energy Solutions',
      description: 'Transform your property with cutting-edge solar technology. From design to installation, we deliver systems that maximize your energy independence.',
      link: '/solutions',
      highlight: 'Most Popular'
    },
    {
      icon: TrendingUp,
      title: 'Energy Efficiency Consulting',
      description: 'Unlock hidden savings with our comprehensive energy audits. Our experts identify opportunities to reduce consumption and costs.',
      link: '/consultancy',
      highlight: 'Expert Analysis'
    },
    {
      icon: Battery,
      title: 'Energy Storage Solutions',
      description: 'Store the power of tomorrow today. Our advanced battery systems ensure you have clean energy when you need it most.',
      link: '/solutions',
      highlight: 'Future-Ready'
    },
    {
      icon: Zap,
      title: 'Smart Energy Management',
      description: 'Take control with intelligent monitoring systems that optimize your energy usage in real-time, maximizing efficiency and savings.',
      link: '/solutions',
      highlight: 'AI-Powered'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed', subtext: 'Across residential & commercial' },
    { number: '50MW+', label: 'Clean Energy Generated', subtext: 'Powering thousands of homes' },
    { number: '1000+', label: 'Satisfied Customers', subtext: 'Join our growing community' },
    { number: '25%', label: 'Average Savings', subtext: 'On monthly energy bills' }
  ]

  const benefits = [
    { text: 'Reduce electricity bills by up to 90%', icon: DollarSign },
    { text: 'Increase your property value significantly', icon: TrendingUp },
    { text: 'Dramatically reduce your carbon footprint', icon: Leaf },
    { text: 'Achieve true energy independence', icon: Shield },
    { text: '25-year warranty on all solar panels', icon: Award },
    { text: 'Professional installation and ongoing support', icon: Users }
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Austin, TX',
      text: 'PillarsEnergy transformed our home into an energy-efficient powerhouse. Our bills dropped by 85% in the first year!',
      rating: 5,
      savings: '$2,400/year'
    },
    {
      name: 'David Chen',
      location: 'San Francisco, CA',
      text: 'The team was incredibly professional and the installation was seamless. Best investment we\'ve ever made.',
      rating: 5,
      savings: '$3,200/year'
    },
    {
      name: 'Maria Rodriguez',
      location: 'Phoenix, AZ',
      text: 'From consultation to completion, PillarsEnergy exceeded our expectations. Highly recommend!',
      rating: 5,
      savings: '$2,800/year'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  <Leaf className="w-4 h-4 mr-2" />
                  Leading the Clean Energy Revolution
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Building {' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                   a Greener
                  </span>{' '}
                  Tomorrow, Today.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We're not just an energy company—we're your partners in creating a sustainable future. 
                  From innovative solar solutions to smart energy management, we help individuals, 
                  businesses, and communities transition to clean, renewable energy that saves money 
                  and protects our planet.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/contact" className="flex items-center">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Link to="/calculator" className="flex items-center">
                    Calculate Your Savings
                    <TrendingUp className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  No upfront costs available
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  25-year warranty
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Expert installation
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Our Impact So Far</h3>
                  <p className="text-green-100">Making a difference, one installation at a time</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-4xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                      <div className="text-green-100 font-medium">{stat.label}</div>
                      <div className="text-xs text-green-200 mt-1">{stat.subtext}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating elements for visual appeal */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every home and business is unique. That's why we offer a complete suite of renewable 
              energy solutions tailored to your specific needs, budget, and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="relative">
                  {service.highlight && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-400 to-red-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {service.highlight}
                    </div>
                  )}
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="ghost" className="w-full group-hover:bg-green-50 group-hover:text-green-600">
                    <Link to={service.link} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Solar Energy?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Solar energy isn't just good for the environment—it's great for your wallet too. 
                Discover the compelling benefits that make solar the smart choice for your home or business.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Environmental Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-2xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">2.5 tons</div>
                    <div className="text-sm text-gray-600">CO₂ saved per year</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50 trees</div>
                    <div className="text-sm text-gray-600">Equivalent planted</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white text-center">
                  <div className="text-lg font-semibold">Your solar system = A cleaner planet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what real customers have to say about their 
              experience with PillarsEnergy Solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-sm font-semibold text-green-600">{testimonial.savings}</div>
                  </div>
                  <CardDescription className="text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Go Solar?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who have made the switch to clean, renewable energy. 
              Get your free consultation today and discover how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 shadow-lg">
                <Link to="/contact" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <Link to="/calculator" className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Calculate Your Savings
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-green-100">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Free consultation
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                No obligation quote
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Expert guidance
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

