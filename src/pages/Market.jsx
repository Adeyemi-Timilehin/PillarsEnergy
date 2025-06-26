import { useState, useEffect } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Badge } from '../components/ui/badge'
import { Avatar, AvatarFallback } from '../components/ui/avatar'
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { 
  Zap, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Leaf,
  ShoppingCart,
  Sell,
  Activity,
  MapPin,
  Clock,
  Star,
  Filter,
  Search
} from 'lucide-react'

export function Market() {
  const [userType, setUserType] = useState('buyer')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  // Mock data for energy listings
  const energyListings = [
    {
      id: 1,
      seller: 'Solar Home Austin',
      location: 'Austin, TX',
      energyType: 'Solar',
      available: 150,
      price: 0.08,
      rating: 4.8,
      verified: true,
      description: 'Excess solar energy from residential rooftop system',
      timeSlot: '10:00 AM - 4:00 PM'
    },
    {
      id: 2,
      seller: 'Green Business Park',
      location: 'San Francisco, CA',
      energyType: 'Solar',
      available: 500,
      price: 0.07,
      rating: 4.9,
      verified: true,
      description: 'Commercial solar array with consistent daily surplus',
      timeSlot: '9:00 AM - 6:00 PM'
    },
    {
      id: 3,
      seller: 'Wind Farm Co-op',
      location: 'Denver, CO',
      energyType: 'Wind',
      available: 1200,
      price: 0.06,
      rating: 4.7,
      verified: true,
      description: 'Community wind farm with variable production',
      timeSlot: '24/7 Available'
    },
    {
      id: 4,
      seller: 'EcoTech Industries',
      location: 'Phoenix, AZ',
      energyType: 'Solar',
      available: 800,
      price: 0.075,
      rating: 4.6,
      verified: true,
      description: 'Industrial solar installation with battery storage',
      timeSlot: '8:00 AM - 8:00 PM'
    },
    {
      id: 5,
      seller: 'Suburban Solar',
      location: 'Seattle, WA',
      energyType: 'Solar',
      available: 75,
      price: 0.09,
      rating: 4.5,
      verified: false,
      description: 'Small residential system with occasional surplus',
      timeSlot: '11:00 AM - 3:00 PM'
    }
  ]

  // Mock user data
  const userData = {
    buyer: {
      name: 'John Smith',
      location: 'Austin, TX',
      monthlyUsage: 850,
      savings: 125,
      purchases: 12
    },
    seller: {
      name: 'Sarah Johnson',
      location: 'Austin, TX',
      systemSize: '10 kW Solar',
      monthlyProduction: 1200,
      earnings: 180,
      sales: 8
    }
  }

  // Market statistics
  const marketStats = [
    { name: 'Jan', volume: 45000, price: 0.078 },
    { name: 'Feb', volume: 52000, price: 0.075 },
    { name: 'Mar', volume: 48000, price: 0.080 },
    { name: 'Apr', volume: 61000, price: 0.072 },
    { name: 'May', volume: 55000, price: 0.076 },
    { name: 'Jun', volume: 68000, price: 0.070 }
  ]

  const energyTypes = [
    { name: 'Solar', value: 65, color: '#f59e0b' },
    { name: 'Wind', value: 25, color: '#3b82f6' },
    { name: 'Hydro', value: 8, color: '#06b6d4' },
    { name: 'Other', value: 2, color: '#8b5cf6' }
  ]

  const filteredListings = energyListings.filter(listing => {
    const matchesSearch = listing.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || listing.energyType.toLowerCase() === filterType.toLowerCase()
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Energy Marketplace
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with local energy producers and consumers in our peer-to-peer 
              renewable energy trading platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className={userType === 'buyer' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}
                onClick={() => setUserType('buyer')}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                I Want to Buy Energy
              </Button>
              <Button 
                size="lg" 
                className={userType === 'seller' ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'}
                onClick={() => setUserType('seller')}
              >
                <Sell className="mr-2 h-5 w-5" />
                I Want to Sell Energy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">2,847</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">68,500</div>
              <div className="text-gray-600">kWh Traded Today</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">$0.074</div>
              <div className="text-gray-600">Avg Price/kWh</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">$4,250</div>
              <div className="text-gray-600">Total Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="marketplace" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="about">About P2P</TabsTrigger>
            </TabsList>

            <TabsContent value="marketplace" className="space-y-8">
              {/* Search and Filter */}
              <Card>
                <CardHeader>
                  <CardTitle>Find Energy {userType === 'buyer' ? 'to Buy' : 'Buyers'}</CardTitle>
                  <CardDescription>
                    {userType === 'buyer' 
                      ? 'Browse available renewable energy from local producers'
                      : 'Connect with energy buyers in your area'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search by location or seller..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <select 
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">All Energy Types</option>
                      <option value="solar">Solar</option>
                      <option value="wind">Wind</option>
                      <option value="hydro">Hydro</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              {/* Energy Listings */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredListings.map((listing) => (
                  <Card key={listing.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>{listing.seller.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{listing.seller}</CardTitle>
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="h-3 w-3 mr-1" />
                              {listing.location}
                            </div>
                          </div>
                        </div>
                        {listing.verified && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Verified
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{listing.energyType}</Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span className="text-sm">{listing.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600">{listing.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-medium">Available</div>
                            <div className="text-green-600">{listing.available} kWh</div>
                          </div>
                          <div>
                            <div className="font-medium">Price</div>
                            <div className="text-blue-600">${listing.price}/kWh</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {listing.timeSlot}
                        </div>
                        
                        <Button className="w-full">
                          {userType === 'buyer' ? 'Buy Energy' : 'Contact Buyer'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dashboard" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* User Profile */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Profile</CardTitle>
                    <CardDescription>
                      {userType === 'buyer' ? 'Energy Consumer' : 'Energy Producer'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>{userData[userType].name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{userData[userType].name}</div>
                          <div className="text-sm text-gray-500">{userData[userType].location}</div>
                        </div>
                      </div>
                      
                      {userType === 'buyer' ? (
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span>Monthly Usage:</span>
                            <span className="font-medium">{userData.buyer.monthlyUsage} kWh</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Savings:</span>
                            <span className="font-medium text-green-600">${userData.buyer.savings}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Purchases:</span>
                            <span className="font-medium">{userData.buyer.purchases}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span>System:</span>
                            <span className="font-medium">{userData.seller.systemSize}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Monthly Production:</span>
                            <span className="font-medium">{userData.seller.monthlyProduction} kWh</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Earnings:</span>
                            <span className="font-medium text-green-600">${userData.seller.earnings}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sales:</span>
                            <span className="font-medium">{userData.seller.sales}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest energy transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { type: userType === 'buyer' ? 'purchase' : 'sale', amount: '50 kWh', price: '$3.75', time: '2 hours ago', partner: 'Solar Home Austin' },
                        { type: userType === 'buyer' ? 'purchase' : 'sale', amount: '25 kWh', price: '$1.88', time: '1 day ago', partner: 'Green Business Park' },
                        { type: userType === 'buyer' ? 'purchase' : 'sale', amount: '75 kWh', price: '$5.25', time: '3 days ago', partner: 'Wind Farm Co-op' }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full ${activity.type === 'purchase' ? 'bg-blue-100' : 'bg-green-100'}`}>
                              {activity.type === 'purchase' ? 
                                <ShoppingCart className="h-4 w-4 text-blue-600" /> : 
                                <Sell className="h-4 w-4 text-green-600" />
                              }
                            </div>
                            <div>
                              <div className="font-medium">
                                {activity.type === 'purchase' ? 'Purchased' : 'Sold'} {activity.amount}
                              </div>
                              <div className="text-sm text-gray-500">
                                {activity.type === 'purchase' ? 'from' : 'to'} {activity.partner}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{activity.price}</div>
                            <div className="text-sm text-gray-500">{activity.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Market Volume Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Market Volume Trends</CardTitle>
                    <CardDescription>Monthly energy trading volume</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={marketStats}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`${value} kWh`, 'Volume']} />
                        <Bar dataKey="volume" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Price Trends */}
                <Card>
                  <CardHeader>
                    <CardTitle>Average Price Trends</CardTitle>
                    <CardDescription>Monthly average energy prices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={marketStats}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`$${value}`, 'Price per kWh']} />
                        <Line type="monotone" dataKey="price" stroke="#10b981" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Energy Source Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle>Energy Source Distribution</CardTitle>
                    <CardDescription>Breakdown of renewable energy types</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={energyTypes}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {energyTypes.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Market Insights */}
                <Card>
                  <CardHeader>
                    <CardTitle>Market Insights</CardTitle>
                    <CardDescription>Key market statistics and trends</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">↑ 15%</div>
                        <div className="text-sm text-blue-700">Volume Growth</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">↓ 8%</div>
                        <div className="text-sm text-green-700">Price Reduction</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>• Solar energy accounts for 65% of all trades</div>
                      <div>• Average transaction size: 125 kWh</div>
                      <div>• Peak trading hours: 10 AM - 4 PM</div>
                      <div>• Most active region: California</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="about" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About Peer-to-Peer Energy Trading</CardTitle>
                  <CardDescription>
                    Understanding the future of decentralized energy markets
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">What is P2P Energy Trading?</h3>
                    <p className="text-gray-700">
                      Peer-to-peer energy trading allows individuals and businesses to buy and sell 
                      electricity directly from each other through digital marketplaces. This creates 
                      a decentralized energy system where renewable energy producers can sell excess 
                      energy to consumers without going through traditional utility companies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">How It Works</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <h4 className="font-medium">Register</h4>
                        <p className="text-sm text-gray-600">Sign up as an energy producer, consumer, or both</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <h4 className="font-medium">Trade</h4>
                        <p className="text-sm text-gray-600">Buy or sell renewable energy directly with peers</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <Activity className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <h4 className="font-medium">Track</h4>
                        <p className="text-sm text-gray-600">Monitor transactions and energy usage in real-time</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-green-600">For Energy Producers</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Enhanced returns on renewable energy investments</li>
                          <li>• Direct access to energy consumers</li>
                          <li>• Flexible pricing and trading options</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-blue-600">For Energy Consumers</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Access to clean energy at competitive prices</li>
                          <li>• Choice of energy sources and suppliers</li>
                          <li>• Support for local renewable energy projects</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Market Outlook</h3>
                    <p className="text-gray-700 mb-4">
                      The peer-to-peer energy trading market is projected to grow from $173.9 million 
                      in 2025 to $2.34 billion by 2035, representing a compound annual growth rate of 29.7%.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">29.7%</div>
                        <div className="text-sm text-gray-600">CAGR Growth</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">$2.34B</div>
                        <div className="text-sm text-gray-600">Market Size 2035</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">65%</div>
                        <div className="text-sm text-gray-600">Solar Adoption</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Energy Revolution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Be part of the future of energy trading. Connect with local producers and 
            consumers to create a more sustainable energy ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

