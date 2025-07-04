import { useState, useEffect } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
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
  Calculator as CalculatorIcon, 
  Zap, 
  DollarSign, 
  TrendingUp, 
  Leaf,
  Home,
  Sun,
  Battery,
  Info
} from 'lucide-react'

export function Calculator() {
  const [inputs, setInputs] = useState({
    monthlyBill: 150,
    homeSize: 2000,
    roofArea: 1200,
    sunHours: 5.5,
    electricityRate: 0.12,
    systemSize: 8,
    systemCost: 24000,
    incentives: 7200
  })

  const [results, setResults] = useState({})

  // Calculate results whenever inputs change
  useEffect(() => {
    calculateResults()
  }, [inputs])

  const calculateResults = () => {
    const {
      monthlyBill,
      homeSize,
      roofArea,
      sunHours,
      electricityRate,
      systemSize,
      systemCost,
      incentives
    } = inputs

    // Annual energy consumption
    const annualConsumption = monthlyBill * 12 / electricityRate
    
    // Solar system production
    const annualProduction = systemSize * 1000 * sunHours * 365 * 0.8 // 80% efficiency
    
    // Savings calculations
    const annualSavings = Math.min(annualProduction, annualConsumption) * electricityRate
    const netSystemCost = systemCost - incentives
    const paybackPeriod = netSystemCost / annualSavings
    const twentyYearSavings = (annualSavings * 20) - netSystemCost
    
    // Environmental impact
    const co2Reduction = annualProduction * 0.0007 // tons CO2 per kWh
    const treesEquivalent = co2Reduction * 16.5 // trees per ton CO2
    
    // Monthly breakdown
    const monthlyProduction = annualProduction / 12
    const monthlySavings = annualSavings / 12
    const newMonthlyBill = Math.max(0, monthlyBill - monthlySavings)

    setResults({
      annualConsumption,
      annualProduction,
      annualSavings,
      netSystemCost,
      paybackPeriod,
      twentyYearSavings,
      co2Reduction,
      treesEquivalent,
      monthlyProduction,
      monthlySavings,
      newMonthlyBill,
      savingsPercentage: (monthlySavings / monthlyBill) * 100
    })
  }

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }))
  }

  // Chart data
  const savingsData = Array.from({ length: 20 }, (_, i) => ({
    year: i + 1,
    cumulativeSavings: (results.annualSavings * (i + 1)) - results.netSystemCost,
    annualSavings: results.annualSavings
  }))

  const monthlyData = [
    { month: 'Jan', production: results.monthlyProduction * 0.7, consumption: results.annualConsumption / 12 },
    { month: 'Feb', production: results.monthlyProduction * 0.8, consumption: results.annualConsumption / 12 },
    { month: 'Mar', production: results.monthlyProduction * 0.9, consumption: results.annualConsumption / 12 },
    { month: 'Apr', production: results.monthlyProduction * 1.1, consumption: results.annualConsumption / 12 },
    { month: 'May', production: results.monthlyProduction * 1.2, consumption: results.annualConsumption / 12 },
    { month: 'Jun', production: results.monthlyProduction * 1.3, consumption: results.annualConsumption / 12 },
    { month: 'Jul', production: results.monthlyProduction * 1.3, consumption: results.annualConsumption / 12 },
    { month: 'Aug', production: results.monthlyProduction * 1.2, consumption: results.annualConsumption / 12 },
    { month: 'Sep', production: results.monthlyProduction * 1.1, consumption: results.annualConsumption / 12 },
    { month: 'Oct', production: results.monthlyProduction * 0.9, consumption: results.annualConsumption / 12 },
    { month: 'Nov', production: results.monthlyProduction * 0.8, consumption: results.annualConsumption / 12 },
    { month: 'Dec', production: results.monthlyProduction * 0.7, consumption: results.annualConsumption / 12 }
  ]

  const energyBreakdown = [
    { name: 'Solar Production', value: results.annualProduction, color: '#22c55e' },
    { name: 'Grid Consumption', value: Math.max(0, results.annualConsumption - results.annualProduction), color: '#ef4444' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Energy Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your potential energy savings, return on investment, and environmental 
              impact with our comprehensive solar calculator.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="calculator" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="calculator">Calculator</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="comparison">Comparison</TabsTrigger>
            </TabsList>

            <TabsContent value="calculator" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CalculatorIcon className="mr-2 h-5 w-5" />
                      System Parameters
                    </CardTitle>
                    <CardDescription>
                      Enter your home and energy details for accurate calculations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="monthlyBill">Monthly Electric Bill ($)</Label>
                        <Input
                          id="monthlyBill"
                          type="number"
                          value={inputs.monthlyBill}
                          onChange={(e) => handleInputChange('monthlyBill', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="homeSize">Home Size (sq ft)</Label>
                        <Input
                          id="homeSize"
                          type="number"
                          value={inputs.homeSize}
                          onChange={(e) => handleInputChange('homeSize', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="roofArea">Available Roof Area (sq ft)</Label>
                        <Input
                          id="roofArea"
                          type="number"
                          value={inputs.roofArea}
                          onChange={(e) => handleInputChange('roofArea', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="sunHours">Daily Sun Hours</Label>
                        <Input
                          id="sunHours"
                          type="number"
                          step="0.1"
                          value={inputs.sunHours}
                          onChange={(e) => handleInputChange('sunHours', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="electricityRate">Electricity Rate ($/kWh)</Label>
                        <Input
                          id="electricityRate"
                          type="number"
                          step="0.01"
                          value={inputs.electricityRate}
                          onChange={(e) => handleInputChange('electricityRate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="systemSize">System Size (kW)</Label>
                        <Input
                          id="systemSize"
                          type="number"
                          step="0.1"
                          value={inputs.systemSize}
                          onChange={(e) => handleInputChange('systemSize', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="systemCost">System Cost ($)</Label>
                        <Input
                          id="systemCost"
                          type="number"
                          value={inputs.systemCost}
                          onChange={(e) => handleInputChange('systemCost', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="incentives">Tax Incentives ($)</Label>
                        <Input
                          id="incentives"
                          type="number"
                          value={inputs.incentives}
                          onChange={(e) => handleInputChange('incentives', e.target.value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Results Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Results Summary
                    </CardTitle>
                    <CardDescription>
                      Your potential savings and system performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-sm font-medium text-green-800">Monthly Savings</span>
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          ${results.monthlySavings?.toFixed(0)}
                        </div>
                        <div className="text-sm text-green-700">
                          {results.savingsPercentage?.toFixed(0)}% reduction
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Zap className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="text-sm font-medium text-blue-800">Annual Production</span>
                        </div>
                        <div className="text-2xl font-bold text-blue-600">
                          {(results.annualProduction / 1000)?.toFixed(1)}k kWh
                        </div>
                        <div className="text-sm text-blue-700">
                          Clean energy generated
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-purple-600 mr-2" />
                          <span className="text-sm font-medium text-purple-800">Payback Period</span>
                        </div>
                        <div className="text-2xl font-bold text-purple-600">
                          {results.paybackPeriod?.toFixed(1)} years
                        </div>
                        <div className="text-sm text-purple-700">
                          Return on investment
                        </div>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Leaf className="h-5 w-5 text-orange-600 mr-2" />
                          <span className="text-sm font-medium text-orange-800">CO2 Reduction</span>
                        </div>
                        <div className="text-2xl font-bold text-orange-600">
                          {results.co2Reduction?.toFixed(1)} tons
                        </div>
                        <div className="text-sm text-orange-700">
                          Per year
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">20-Year Financial Summary</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Total Savings:</span>
                          <span className="font-bold text-green-600">
                            ${results.twentyYearSavings?.toFixed(0)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Net System Cost:</span>
                          <span>${results.netSystemCost?.toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ROI:</span>
                          <span className="font-bold text-blue-600">
                            {((results.twentyYearSavings / results.netSystemCost) * 100)?.toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Savings Over Time Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Cumulative Savings Over 20 Years</CardTitle>
                    <CardDescription>
                      Track your financial returns over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={savingsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`$${value.toFixed(0)}`, 'Cumulative Savings']} />
                        <Area 
                          type="monotone" 
                          dataKey="cumulativeSavings" 
                          stroke="#22c55e" 
                          fill="#22c55e" 
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Monthly Production vs Consumption */}
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Energy Profile</CardTitle>
                    <CardDescription>
                      Solar production vs energy consumption by month
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="production" fill="#22c55e" name="Solar Production" />
                        <Bar dataKey="consumption" fill="#ef4444" name="Energy Consumption" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Energy Breakdown Pie Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Annual Energy Breakdown</CardTitle>
                    <CardDescription>
                      Solar vs grid energy consumption
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={energyBreakdown}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {energyBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Environmental Impact */}
                <Card>
                  <CardHeader>
                    <CardTitle>Environmental Impact</CardTitle>
                    <CardDescription>
                      Your contribution to a cleaner environment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <Leaf className="h-8 w-8 text-green-600 mr-3" />
                        <div>
                          <div className="font-semibold">CO2 Reduction</div>
                          <div className="text-sm text-gray-600">Annual impact</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          {results.co2Reduction?.toFixed(1)} tons
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <Home className="h-8 w-8 text-blue-600 mr-3" />
                        <div>
                          <div className="font-semibold">Trees Equivalent</div>
                          <div className="text-sm text-gray-600">Carbon offset</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">
                          {results.treesEquivalent?.toFixed(0)} trees
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">20-Year Environmental Impact</h4>
                      <div className="space-y-1 text-sm">
                        <div>Total CO2 Reduction: {(results.co2Reduction * 20)?.toFixed(0)} tons</div>
                        <div>Equivalent to planting: {(results.treesEquivalent * 20)?.toFixed(0)} trees</div>
                        <div>Cars off road equivalent: {((results.co2Reduction * 20) / 4.6)?.toFixed(0)} cars/year</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="comparison" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Before vs After Solar</CardTitle>
                  <CardDescription>
                    Compare your energy costs and consumption
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-red-600">Before Solar</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 bg-red-50 rounded">
                          <span>Monthly Electric Bill</span>
                          <span className="font-bold">${inputs.monthlyBill}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-red-50 rounded">
                          <span>Annual Cost</span>
                          <span className="font-bold">${(inputs.monthlyBill * 12).toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-red-50 rounded">
                          <span>Energy Source</span>
                          <span className="font-bold">100% Grid</span>
                        </div>
                        <div className="flex justify-between p-3 bg-red-50 rounded">
                          <span>CO2 Emissions</span>
                          <span className="font-bold">{(results.annualConsumption * 0.0007)?.toFixed(1)} tons/year</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-green-600">After Solar</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 bg-green-50 rounded">
                          <span>Monthly Electric Bill</span>
                          <span className="font-bold">${results.newMonthlyBill?.toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-green-50 rounded">
                          <span>Annual Cost</span>
                          <span className="font-bold">${(results.newMonthlyBill * 12)?.toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-green-50 rounded">
                          <span>Energy Source</span>
                          <span className="font-bold">
                            {((results.annualProduction / results.annualConsumption) * 100)?.toFixed(0)}% Solar
                          </span>
                        </div>
                        <div className="flex justify-between p-3 bg-green-50 rounded">
                          <span>CO2 Emissions</span>
                          <span className="font-bold">
                            {(Math.max(0, results.annualConsumption - results.annualProduction) * 0.0007)?.toFixed(1)} tons/year
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-4">Your Savings Summary</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          ${results.monthlySavings?.toFixed(0)}
                        </div>
                        <div className="text-sm text-blue-700">Monthly Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          ${(results.annualSavings)?.toFixed(0)}
                        </div>
                        <div className="text-sm text-blue-700">Annual Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          ${results.twentyYearSavings?.toFixed(0)}
                        </div>
                        <div className="text-sm text-blue-700">20-Year Savings</div>
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
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Saving?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Get a personalized quote based on your calculations and start your 
            journey to energy independence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Personalized Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

