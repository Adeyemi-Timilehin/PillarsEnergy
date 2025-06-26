import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Lightbulb, 
  Shield,
  CheckCircle,
  Star
} from 'lucide-react'

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Sustainability',
      description: 'Environmental responsibility at the heart of every solution we provide.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Driving progress through advanced technologies and creative thinking.'
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: 'Committed to delivering exceptional value and service to every client.'
    }
  ]

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      experience: '15+ years',
      specialization: 'Renewable Energy Strategy'
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      experience: '12+ years',
      specialization: 'Solar System Design'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Engineering',
      experience: '10+ years',
      specialization: 'Energy Storage Systems'
    },
    {
      name: 'Emily Davis',
      role: 'Project Manager',
      experience: '8+ years',
      specialization: 'Installation & Maintenance'
    }
  ]

  const certifications = [
    'NABCEP Certified Solar Installers',
    'OSHA Safety Certified',
    'Better Business Bureau A+ Rating',
    'Solar Power International Member',
    'Clean Energy Council Approved'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              
              About PillarsEnergy Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a pioneering force in renewable energy, dedicated to leading the 
              transition to a greener, more environmentally responsible energy landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">
                  To empower individuals, businesses, and communities to transition to a more 
                  sustainable energy future, reducing reliance on fossil fuels and mitigating 
                  climate change through innovative renewable energy solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">
                  To become a leading provider of renewable energy solutions, known for our 
                  expertise, innovation, and commitment to sustainability, creating a cleaner, 
                  greener world for future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your energy success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="bg-gray-200 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-green-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="secondary">{member.experience}</Badge>
                    <p className="text-sm text-gray-600">{member.specialization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-green-100">
              Trusted by industry leaders and certified professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-green-700 rounded-lg p-4">
                <Award className="h-6 w-6 text-green-200 flex-shrink-0" />
                <span className="text-white">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">50MW+</div>
              <div className="text-gray-400">Energy Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-400">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

