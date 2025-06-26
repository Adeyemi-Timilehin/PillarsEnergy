import React from 'react'
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
  Leaf
} from 'lucide-react'

export function Home() {
  const services = [
    {
      icon: Sun,
      title: 'Solar Energy Solutions',
      description: 'Design, installation, and maintenance of solar PV systems for residential and commercial use.',
      link: '/solutions'
    },
    {
      icon: TrendingUp,
      title: 'Energy Efficiency Consulting',
      description: 'Energy audits, management plans, and efficiency upgrades to optimize consumption.',
      link: '/consultancy'
    },
    {
      icon: Battery,
      title: 'Energy Storage Solutions',
      description: 'Advanced battery storage systems for enhanced energy independence and reliability.',
      link: '/solutions'
    },
    {
      icon: Zap,
      title: 'Smart Energy Management',
      description: 'Intelligent systems for real-time monitoring and energy optimization.',
      link: '/solutions'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50MW+', label: 'Energy Generated' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '25%', label: 'Average Savings' }
  ]

  const benefits = [
    'Reduce electricity bills by up to 90%',
    'Increase property value',
    'Reduce carbon footprint',
    'Energy independence',
    '25-year warranty on solar panels',
    'Professional installation and support'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Powering a{' '}
                <span className="text-green-600">Greener</span>{' '}
                Tomorrow
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Leading provider of renewable energy solutions, helping individuals, 
                businesses, and communities transition to sustainable energy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" >
                  <Link to="/calculator">Calculate Savings</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold">{stat.number}</div>
                      <div className="text-green-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive renewable energy solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {service.description}
                  </CardDescription>
                  <Link 
                    to={service.link} 
                    className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Solar Energy?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Solar energy offers numerous benefits for your home or business, 
                from significant cost savings to environmental impact.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <Leaf className="h-16 w-16 mx-auto mb-6 text-green-200" />
                <h3 className="text-2xl font-bold mb-4">Environmental Impact</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">2.5 tons</div>
                    <div className="text-green-200">CO2 saved per year</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50 trees</div>
                    <div className="text-green-200">Equivalent planted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made the switch to clean, 
            renewable energy. Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-green-600">
              <Link to="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

