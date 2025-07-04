import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  Sun, 
  Battery, 
  Zap, 
  Monitor,
  CheckCircle,
  ArrowRight,
  Star,
  Shield
} from 'lucide-react'

export function Solutions() {
  const solutions = [
    {
      icon: Sun,
      title: 'Solar Energy Systems',
      description: 'High-efficiency solar panels and complete PV systems for residential and commercial use.',
      features: ['25-year warranty', 'High efficiency panels', 'Professional installation', 'Monitoring included'],
      price: 'From $15,000',
      category: 'Solar'
    },
    {
      icon: Battery,
      title: 'Energy Storage Solutions',
      description: 'Advanced lithium and hybrid battery systems for energy independence and backup power.',
      features: ['10-year warranty', 'Smart management', 'Backup power', 'Grid integration'],
      price: 'From $8,000',
      category: 'Storage'
    },
    {
      icon: Zap,
      title: 'Smart Energy Management',
      description: 'Intelligent systems for real-time monitoring and automated energy optimization.',
      features: ['Real-time monitoring', 'Smart automation', 'Mobile app', 'Energy analytics'],
      price: 'From $2,500',
      category: 'Smart'
    },
    {
      icon: Monitor,
      title: 'Monitoring & Analytics',
      description: 'Advanced monitoring solutions to track performance and optimize energy usage.',
      features: ['24/7 monitoring', 'Performance alerts', 'Detailed reports', 'Remote diagnostics'],
      price: 'From $500',
      category: 'Monitoring'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Energy Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive renewable energy products and systems designed to meet 
              your specific energy needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <solution.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <Badge variant="secondary">{solution.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">{solution.price}</span>
                    <Button variant="outline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Find the Right Solution for You
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Our experts will help you choose the perfect energy solution for your needs and budget.
          </p>
          <Button size="lg" variant="secondary">
            Get Custom Quote
          </Button>
        </div>
      </section>
    </div>
  )
}

