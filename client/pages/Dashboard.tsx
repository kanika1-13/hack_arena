import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import {
  Leaf,
  TreePine,
  ShoppingBag,
  Users,
  BarChart3,
  Recycle,
  ArrowRight,
  Star,
  Droplets,
  Zap,
  Award,
  TrendingUp,
  Calendar,
  ArrowLeft,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-forest-50">
      {/* Navigation */}
      <nav className="border-b border-green-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-green-500 to-forest-600 rounded-xl">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Green Dashboard
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Button
                variant="outline"
                className="border-green-300 text-green-700 hover:bg-green-50"
              >
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Your Sustainability Dashboard
              </h1>
              <p className="text-gray-600">
                Track your environmental impact and sustainable shopping
                journey.
              </p>
            </div>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-lg px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Eco Champion
            </Badge>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-green-700">
                  Carbon Saved
                </CardTitle>
                <TreePine className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900 mb-2">
                147.2 kg
              </div>
              <div className="text-xs text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% this month
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-blue-700">
                  Plastic Avoided
                </CardTitle>
                <Recycle className="h-4 w-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900 mb-2">
                2.8 kg
              </div>
              <div className="text-xs text-blue-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +18% this month
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-purple-700">
                  Water Conserved
                </CardTitle>
                <Droplets className="h-4 w-4 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-900 mb-2">
                1,250 L
              </div>
              <div className="text-xs text-purple-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8% this month
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-orange-700">
                  Energy Saved
                </CardTitle>
                <Zap className="h-4 w-4 text-orange-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-900 mb-2">
                89.4 kWh
              </div>
              <div className="text-xs text-orange-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +15% this month
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Progress */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <span>Monthly Progress</span>
                  </CardTitle>
                  <CardDescription>
                    Your sustainability achievements this month
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Carbon Reduction Goal</span>
                      <span>74%</span>
                    </div>
                    <Progress value={74} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Plastic-Free Purchases</span>
                      <span>91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Sustainable Choices</span>
                      <span>86%</span>
                    </div>
                    <Progress value={86} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle>Recent Eco-Friendly Purchases</CardTitle>
                  <CardDescription>
                    Your latest sustainable shopping choices
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Star className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">
                        Bamboo Water Bottle
                      </div>
                      <div className="text-xs text-gray-500">
                        Green Score: 9.2/10
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      -2.5kg CO2
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Star className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">
                        Organic Cotton T-Shirt
                      </div>
                      <div className="text-xs text-gray-500">
                        Green Score: 8.7/10
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      -1.8kg CO2
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Star className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Solar Charger</div>
                      <div className="text-xs text-gray-500">
                        Green Score: 9.5/10
                      </div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">
                      -3.2kg CO2
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact Timeline */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle>Impact Timeline</CardTitle>
                <CardDescription>
                  Your environmental impact over the last 6 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      623kg
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      Total CO2 Saved
                    </div>
                    <div className="w-full bg-green-100 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      12.4kg
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      Total Plastic Avoided
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "73%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      5,890L
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      Total Water Conserved
                    </div>
                    <div className="w-full bg-purple-100 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle>Product Analysis</CardTitle>
                <CardDescription>
                  AI-powered grading of your recent purchases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Product Analytics Coming Soon
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Detailed product grading analysis and sustainability scores
                    will be available here.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle>Sustainability Goals</CardTitle>
                <CardDescription>
                  Set and track your environmental targets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Goal Setting Coming Soon
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Create personalized sustainability goals and track your
                    progress toward them.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle>Community Impact</CardTitle>
                <CardDescription>
                  Group buying and community sustainability efforts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Community Features Coming Soon
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Join group buying initiatives and see collective
                    environmental impact.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="border-green-200 bg-gradient-to-r from-green-50 to-forest-50 mt-8">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Keep Making a Difference
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Your sustainable choices are making a real impact. Continue your
                eco-friendly shopping journey and inspire others to join the
                movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="bg-gradient-to-r from-green-600 to-forest-600 hover:from-green-700 hover:to-forest-700">
                    Continue Shopping
                    <ShoppingBag className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-50"
                >
                  Share Your Impact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
