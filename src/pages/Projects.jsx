import React, {  useState } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  Building, 
  Home, 
  Factory, 
  MapPin, 
  Calendar, 
  Zap,
  TrendingUp,
  Filter
} from 'lucide-react'

export function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Residential Solar Installation - Smith Family',
      category: 'residential',
      location: 'Austin, TX',
      date: '2024',
      capacity: '8.5 kW',
      savings: '$1,200/year',
      description: 'Complete rooftop solar installation with battery storage for a family home.',
      image: '/api/placeholder/400/300',
      results: {
        energyGenerated: '12,000 kWh/year',
        co2Reduced: '8.5 tons/year',
        paybackPeriod: '6.2 years'
      }
    },
    {
      id: 2,
      title: 'Commercial Solar Array - Tech Campus',
      category: 'commercial',
      location: 'San Francisco, CA',
      date: '2024',
      capacity: '250 kW',
      savings: '$45,000/year',
      description: 'Large-scale solar installation for a technology company campus.',
      image: '/api/placeholder/400/300',
      results: {
        energyGenerated: '350,000 kWh/year',
        co2Reduced: '245 tons/year',
        paybackPeriod: '5.8 years'
      }
    },
    {
      id: 3,
      title: 'Industrial Energy Storage - Manufacturing Plant',
      category: 'industrial',
      location: 'Phoenix, AZ',
      date: '2023',
      capacity: '500 kWh Storage',
      savings: '$75,000/year',
      description: 'Battery energy storage system for peak demand management.',
      image: '/api/placeholder/400/300',
      results: {
        energyGenerated: '1,200 MWh/year',
        co2Reduced: '840 tons/year',
        paybackPeriod: '4.5 years'
      }
    },
    {
      id: 4,
      title: 'Community Solar Garden',
      category: 'commercial',
      location: 'Denver, CO',
      date: '2023',
      capacity: '1.2 MW',
      savings: '$180,000/year',
      description: 'Community solar project serving 200+ local households.',
      image: '/api/placeholder/400/300',
      results: {
        energyGenerated: '1,800 MWh/year',
        co2Reduced: '1,260 tons/year',
        paybackPeriod: '7.2 years'
      }
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', icon: Building },
    { id: 'residential', label: 'Residential', icon: Home },
    { id: 'commercial', label: 'Commercial', icon: Building },
    { id: 'industrial', label: 'Industrial', icon: Factory }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Projects Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our successful renewable energy installations across residential, 
              commercial, and industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={filter === category.id ? "bg-green-600 hover:bg-green-700" : ""}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <Building className="h-16 w-16 text-gray-400" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="capitalize">
                      {project.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 mr-1 text-green-600" />
                        {project.capacity}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{project.results.energyGenerated}</div>
                        <div className="text-xs text-gray-500">Energy Generated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{project.results.co2Reduced}</div>
                        <div className="text-xs text-gray-500">CO2 Reduced</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{project.savings}</div>
                        <div className="text-xs text-gray-500">Annual Savings</div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      View Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Project Impact
            </h2>
            <p className="text-xl text-green-100">
              The collective impact of our renewable energy projects
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-green-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50MW+</div>
              <div className="text-green-100">Total Capacity</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">35,000</div>
              <div className="text-green-100">Tons CO2 Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">$5M+</div>
              <div className="text-green-100">Client Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our growing list of satisfied customers who have made the switch 
            to clean, renewable energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Project Quote
            </Button>
            <Button size="lg" variant="outline">
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

