import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
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
  Star,
  Calendar,
  MapPin,
  TrendingUp,
  Leaf,
  Zap,
  ArrowRight
} from 'lucide-react'

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Sustainability First',
      description: 'Every decision we make is guided by our commitment to environmental responsibility. We believe that protecting our planet isn\'t just good business—it\'s our moral obligation.',
      color: 'green'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Excellence',
      description: 'We stay at the forefront of renewable energy technology, constantly exploring new ways to make clean energy more efficient, accessible, and affordable for everyone.',
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Customer-Centric Approach',
      description: 'Your success is our success. We\'re not just installing solar panels—we\'re building lasting relationships and helping you achieve your energy independence goals.',
      color: 'purple'
    }
  ]

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      experience: '15+ years',
      specialization: 'Renewable Energy Strategy',
      bio: 'Visionary leader with a passion for sustainable energy solutions and business innovation.',
      achievements: ['Founded 3 successful energy companies', 'Recognized industry expert', 'Published researcher']
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      experience: '12+ years',
      specialization: 'Solar System Design',
      bio: 'Technical expert specializing in cutting-edge solar technology and system optimization.',
      achievements: ['Led 500+ installations', 'Solar technology innovator', 'NABCEP certified']
    },
    {
      name: 'Michael Chen',
      role: 'Head of Engineering',
      experience: '10+ years',
      specialization: 'Energy Storage Systems',
      bio: 'Engineering leader focused on advanced battery technology and grid integration solutions.',
      achievements: ['Energy storage pioneer', 'Patent holder', 'Grid integration expert']
    },
    {
      name: 'Emily Davis',
      role: 'Project Manager',
      experience: '8+ years',
      specialization: 'Installation & Maintenance',
      bio: 'Operations expert ensuring every project is completed on time, on budget, and exceeds expectations.',
      achievements: ['99% customer satisfaction', 'Zero-accident record', 'Process optimization leader']
    }
  ]

  const certifications = [
    { name: 'NABCEP Certified Solar Installers', icon: Award, description: 'Industry-leading certification for solar professionals' },
    { name: 'OSHA Safety Certified', icon: Shield, description: 'Comprehensive workplace safety standards compliance' },
    { name: 'Better Business Bureau A+ Rating', icon: Star, description: 'Highest rating for business ethics and customer service' },
    { name: 'Solar Power International Member', icon: Users, description: 'Active member of the leading solar industry association' },
    { name: 'Clean Energy Council Approved', icon: CheckCircle, description: 'Approved installer for government rebate programs' }
  ]

  const milestones = [
    { year: '2015', event: 'Company Founded', description: 'Started with a vision to make renewable energy accessible to everyone' },
    { year: '2017', event: '100th Installation', description: 'Reached our first major milestone with 100 successful solar installations' },
    { year: '2019', event: 'Commercial Expansion', description: 'Expanded services to include large-scale commercial and industrial projects' },
    { year: '2021', event: '10MW Milestone', description: 'Surpassed 10 megawatts of installed solar capacity' },
    { year: '2023', event: '500+ Projects', description: 'Completed over 500 renewable energy projects across multiple states' },
    { year: '2024', event: 'Innovation Hub', description: 'Opened our state-of-the-art research and development facility' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              Pioneering Clean Energy Since 2015
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                PillarsEnergy
              </span>{' '}
              Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're more than just a renewable energy company—we're passionate advocates for a sustainable future. 
              Since our founding, we've been dedicated to making clean energy accessible, affordable, and reliable 
              for homes and businesses across the nation. Every solar panel we install, every energy audit we conduct, 
              and every customer we serve brings us one step closer to a world powered entirely by renewable energy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower individuals, businesses, and communities to transition to sustainable energy solutions 
                  that reduce environmental impact while delivering exceptional value. We believe that everyone deserves 
                  access to clean, affordable energy that doesn't compromise on quality or reliability.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-2xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">50MW+</div>
                  <div className="text-sm text-gray-600">Clean Energy Generated</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the leading renewable energy solutions provider, recognized for our innovation, 
                  expertise, and unwavering commitment to sustainability. We envision a future where clean 
                  energy is the norm, not the exception, and where every home and business can contribute 
                  to a healthier planet while enjoying energy independence.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-purple-50 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Satisfied Customers</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-2xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">25%</div>
                  <div className="text-sm text-gray-600">Average Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from how we design our solutions 
              to how we interact with our customers and communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardHeader className="text-center">
                  <div className={`bg-gradient-to-br from-${value.color}-100 to-${value.color}-200 w-20 h-20 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`h-10 w-10 text-${value.color}-600`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our success is built on the expertise and dedication of our team. Each member brings 
              unique skills and a shared passion for renewable energy innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{member.name}</CardTitle>
                  <CardDescription className="text-green-600 font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{member.experience}</span>
                  </div>
                  <div className="text-sm text-gray-600">{member.bio}</div>
                  <Badge variant="secondary" className="text-xs">
                    {member.specialization}
                  </Badge>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-gray-500">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, here are the key milestones 
              that have shaped our company and our commitment to renewable energy.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-emerald-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {milestone.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {milestone.event}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certifications & Accreditations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by leading industry organizations. 
              These certifications ensure you receive the highest quality service and installation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                <CardHeader>
                  <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {cert.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {cert.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Whether you're looking to reduce your energy costs, increase your property value, 
            or simply do your part for the environment, we're here to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              <Link to="/contact" className="flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

