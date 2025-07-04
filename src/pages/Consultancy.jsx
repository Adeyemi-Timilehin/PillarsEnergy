import { Link } from 'react-router-dom'
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
  Zap,
  Users,
  Award,
  Target,
  BarChart,
  Lightbulb,
  Shield,
  Phone,
  Calendar
} from 'lucide-react'

export function Consultancy() {
  const services = [
    {
      icon: Search,
      title: 'Comprehensive Energy Audits',
      description: 'Discover hidden opportunities to reduce your energy consumption and costs with our detailed analysis of your current energy usage patterns.',
      features: [
        'Detailed consumption analysis and benchmarking',
        'Identification of efficiency opportunities',
        'Cost-benefit analysis for all recommendations',
        'Customized implementation roadmap',
        'Energy modeling and projections'
      ],
      duration: '2-3 business days',
      price: 'Starting at $500',
      popular: false,
      savings: 'Up to 30% reduction in energy costs'
    },
    {
      icon: TrendingUp,
      title: 'Strategic Energy Management',
      description: 'Develop a comprehensive energy strategy that aligns with your business goals while maximizing efficiency and minimizing environmental impact.',
      features: [
        'Custom energy strategy development',
        'Real-time performance monitoring setup',
        'Detailed savings projections and ROI analysis',
        'Sustainability goal planning',
        'Ongoing optimization recommendations'
      ],
      duration: '1-2 weeks',
      price: 'Starting at $1,500',
      popular: true,
      savings: 'Average 25% cost reduction'
    },
    {
      icon: FileText,
      title: 'Renewable Energy Feasibility Studies',
      description: 'Make informed decisions about renewable energy investments with our comprehensive feasibility analysis tailored to your specific situation.',
      features: [
        'Detailed site assessment and analysis',
        'Technology evaluation and comparison',
        'Financial modeling and incentive analysis',
        'Risk assessment and mitigation strategies',
        'Implementation timeline and milestones'
      ],
      duration: '2-4 weeks',
      price: 'Starting at $2,500',
      popular: false,
      savings: 'Maximize ROI on renewable investments'
    },
    {
      icon: Settings,
      title: 'Ongoing System Optimization',
      description: 'Keep your energy systems running at peak performance with our continuous monitoring and optimization services.',
      features: [
        'Continuous performance monitoring',
        'Proactive system tuning and adjustments',
        'Preventive maintenance planning',
        'Technology upgrade recommendations',
        'Monthly performance reports'
      ],
      duration: 'Ongoing monthly service',
      price: 'Starting at $200/month',
      popular: false,
      savings: 'Maintain peak efficiency year-round'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Discovery Call',
      description: 'We start with a comprehensive discussion about your energy goals, current challenges, budget considerations, and timeline expectations.',
      duration: '30-45 minutes',
      icon: Phone
    },
    {
      step: '02',
      title: 'Detailed Site Assessment',
      description: 'Our certified experts conduct a thorough on-site evaluation of your property, energy systems, and usage patterns using advanced diagnostic tools.',
      duration: '2-4 hours',
      icon: Search
    },
    {
      step: '03',
      title: 'Data Analysis & Planning',
      description: 'We analyze all collected data using industry-leading software to develop customized recommendations and implementation strategies.',
      duration: '3-5 business days',
      icon: BarChart
    },
    {
      step: '04',
      title: 'Comprehensive Report Delivery',
      description: 'You receive a detailed report with actionable insights, financial projections, and clear next steps for implementation.',
      duration: '1-2 hours presentation',
      icon: FileText
    },
    {
      step: '05',
      title: 'Implementation Support',
      description: 'We provide ongoing guidance and support to help you successfully implement our recommendations and achieve your energy goals.',
      duration: 'Ongoing as needed',
      icon: Users
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Significant Cost Savings',
      description: 'Our clients typically see 20-40% reduction in energy costs within the first year of implementing our recommendations.'
    },
    {
      icon: Target,
      title: 'Customized Solutions',
      description: 'Every recommendation is tailored specifically to your unique situation, ensuring maximum effectiveness and ROI.'
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Our team of certified energy professionals brings decades of combined experience to every project.'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'We identify potential issues before they become problems, helping you avoid costly mistakes and delays.'
    }
  ]

  const industries = [
    { name: 'Manufacturing', projects: '150+', savings: '35%' },
    { name: 'Healthcare', projects: '80+', savings: '28%' },
    { name: 'Education', projects: '120+', savings: '32%' },
    { name: 'Retail', projects: '200+', savings: '25%' },
    { name: 'Hospitality', projects: '90+', savings: '30%' },
    { name: 'Office Buildings', projects: '180+', savings: '27%' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-emerald-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              Expert Energy Consulting Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              Energy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Consulting
              </span>{' '}
              Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Unlock your energy potential with our comprehensive consulting services. Whether you're looking to 
              reduce costs, improve efficiency, or transition to renewable energy, our expert team provides the 
              insights and strategies you need to achieve your goals. We don't just analyze—we deliver actionable 
              solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                <Link to="/contact" className="flex items-center">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link to="/calculator">Calculate Potential Savings</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial energy audits to ongoing optimization, we offer a complete suite of consulting 
              services designed to maximize your energy efficiency and minimize your costs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`hover:shadow-2xl transition-all duration-300 ${service.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-br from-blue-100 to-green-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-semibold text-green-800">{service.savings}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full" variant={service.popular ? "default" : "outline"}>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic, proven approach that ensures comprehensive analysis and 
              actionable recommendations tailored to your specific needs and goals.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-blue-200 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="hover:shadow-lg transition-shadow duration-300 text-center">
                    <CardHeader>
                      <div className="bg-gradient-to-br from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold relative z-10">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed mb-3">
                        {step.description}
                      </CardDescription>
                      <div className="flex items-center justify-center space-x-2 text-sm text-blue-600">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Consulting Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our consulting services go beyond basic recommendations. We provide comprehensive, 
              actionable strategies that deliver measurable results and long-term value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                <CardHeader>
                  <div className="bg-gradient-to-br from-blue-100 to-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, with proven track records of 
              delivering significant energy savings and efficiency improvements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {industry.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{industry.projects}</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{industry.savings}</div>
                      <div className="text-sm text-gray-600">Average Savings</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Energy Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't let energy inefficiencies drain your budget. Our expert consultants are ready to 
            help you identify opportunities, develop strategies, and implement solutions that deliver 
            real results. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/calculator">Calculate Your Savings</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              No obligation consultation
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Expert analysis included
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Customized recommendations
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

