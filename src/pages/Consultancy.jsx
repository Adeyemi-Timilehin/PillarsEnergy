import React from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  TrendingUp, 
  FileText, 
  Search, 
  Settings, 
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Zap
} from 'lucide-react'

export function Consultancy() {
  const services = [
    {
      icon: Search,
      title: 'Energy Audits',
      description: 'Comprehensive analysis of your current energy usage and identification of efficiency opportunities.',
      features: ['Detailed consumption analysis', 'Efficiency recommendations', 'Cost-benefit analysis', 'Implementation roadmap'],
      duration: '2-3 days',
      price: 'From $500'
    },
    {
      icon: TrendingUp,
      title: 'Energy Management Plans',
      description: 'Strategic planning to optimize energy consumption and reduce operational costs.',
      features: ['Custom energy strategy', 'Performance monitoring', 'Savings projections', 'ROI analysis'],
      duration: '1-2 weeks',
      price: 'From $1,500'
    },
    {
      icon: FileText,
      title: 'Feasibility Studies',
      description: 'In-depth analysis of renewable energy potential for your specific location and needs.',
      features: ['Site assessment', 'Technology evaluation', 'Financial modeling', 'Risk analysis'],
      duration: '2-4 weeks',
      price: 'From $2,500'
    },
    {
      icon: Settings,
      title: 'System Optimization',
      description: 'Ongoing optimization of existing energy systems for maximum efficiency and performance.',
      features: ['Performance analysis', 'System tuning', 'Maintenance planning', 'Upgrade recommendations'],
      duration: 'Ongoing',
      price: 'From $200/month'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your energy goals, current challenges, and specific requirements.'
    },
    {
      step: '02',
      title: 'Site Assessment',
      description: 'Our experts conduct a thorough on-site evaluation of your property and energy systems.'
    },
    {
      step: '03',
      title: 'Analysis & Planning',
      description: 'We analyze data and develop customized recommendations and implementation strategies.'
    },
    {
      step: '04',
      title: 'Report Delivery',
      description: 'You receive a comprehensive report with actionable insights and next steps.'
    },
    {
      step: '05',
      title: 'Implementation Support',
      description: 'We provide ongoing support to help you implement our recommendations successfully.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Energy Consultancy Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert guidance to optimize your energy consumption, reduce costs, and 
              transition to sustainable energy solutions.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive energy solutions tailored to your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </div>
                      <div className="flex items-center text-sm font-medium text-green-600">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to delivering exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Consultancy?
              </h2>
              <ul className="space-y-4">
                {[
                  'Expert analysis by certified energy professionals',
                  'Customized solutions for your specific needs',
                  'Proven track record of successful implementations',
                  'Comprehensive reports with actionable insights',
                  'Ongoing support throughout implementation',
                  'Guaranteed ROI on recommended improvements'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-200 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="text-center">
                <Zap className="h-16 w-16 mx-auto mb-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Average Results</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">25%</div>
                    <div className="text-gray-600">Energy Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">18 months</div>
                    <div className="text-gray-600">Payback Period</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Optimize Your Energy?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get started with a free initial consultation to discuss your energy goals 
            and learn how we can help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline">
              Download Service Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

