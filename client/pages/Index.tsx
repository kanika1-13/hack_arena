import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Shield,
  Truck,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-forest-50">
      {/* Navigation */}
      <nav className="border-b border-green-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-green-500 to-forest-600 rounded-xl">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Green Storefront
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#impact"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Impact
              </a>
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Dashboard
              </Link>
              <Button className="bg-gradient-to-r from-green-600 to-forest-600 hover:from-green-700 hover:to-forest-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              <TreePine className="w-3 h-3 mr-1" />
              Sustainable Shopping Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Shop with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-forest-600 block">
                Purpose
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your shopping habits with our AI-powered platform that
              scores products for sustainability, suggests eco-friendly
              alternatives, and tracks your environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-forest-600 hover:from-green-700 hover:to-forest-700 text-lg px-8 py-3"
              >
                Start Shopping Green
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-3 border-green-300 text-green-700 hover:bg-green-50"
                >
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Products Graded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2.3M</div>
              <div className="text-gray-600">CO2 Saved (kg)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
              <div className="text-gray-600">Plastic Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15K+</div>
              <div className="text-gray-600">Eco Warriors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powered by Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines advanced AI with real-world sustainability
              data to revolutionize how you shop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Grading Engine */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-forest-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">
                  Product Grading Engine
                </CardTitle>
                <CardDescription>
                  Neural networks analyze carbon footprint, packaging,
                  certifications, and logistics to assign green scores.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-3">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">
                    AI-Powered Scoring
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">
                    Verified Data Sources
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Smart Recommendations */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-forest-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Smart Recommendations</CardTitle>
                <CardDescription>
                  Personalized sustainable alternatives based on your
                  preferences, past purchases, and green scores.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-3">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">
                    Personalized Matching
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Recycle className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Eco Alternatives</span>
                </div>
              </CardContent>
            </Card>

            {/* Group Buying */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-forest-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">
                  Group Buying & Packaging
                </CardTitle>
                <CardDescription>
                  Community orders reduce emissions while offering eco-friendly
                  packaging selections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-3">
                  <Truck className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium">Reduced Emissions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Eco Packaging</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section
        id="impact"
        className="py-20 bg-gradient-to-br from-green-50 to-forest-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Track Your Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the real difference you're making with detailed analytics on
              your environmental footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                    <TreePine className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Carbon Footprint Tracking
                    </h3>
                    <p className="text-gray-600">
                      Monitor your CO2 savings with every purchase and see your
                      positive environmental impact grow.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                    <Recycle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Plastic Reduction Goals
                    </h3>
                    <p className="text-gray-600">
                      Track plastic avoided through conscious choices and
                      sustainable packaging options.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Future Predictions
                    </h3>
                    <p className="text-gray-600">
                      AI-powered insights show your sustainability trajectory
                      and future impact potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="bg-white border-green-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-center text-green-600">
                    Your Impact This Month
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        24.5kg
                      </div>
                      <div className="text-sm text-gray-600">CO2 Saved</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        156g
                      </div>
                      <div className="text-sm text-gray-600">
                        Plastic Avoided
                      </div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      32L
                    </div>
                    <div className="text-sm text-gray-600">Water Conserved</div>
                  </div>
                  <Link to="/dashboard">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-forest-600 hover:from-green-700 hover:to-forest-700">
                      View Full Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-forest-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Shopping?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of eco-conscious shoppers making a difference, one
            purchase at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-3 bg-white text-green-600 hover:bg-green-50"
            >
              Start Your Journey
              <Leaf className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/dashboard">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 border-white text-white hover:bg-white/10"
              >
                Explore Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-green-500 to-forest-600 rounded-xl">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Green Storefront</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Empowering conscious consumers to make sustainable choices
                through intelligent product grading and community-driven
                shopping.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Product Grading</li>
                <li>Smart Recommendations</li>
                <li>Group Buying</li>
                <li>Impact Tracking</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Green Storefront. Built for a sustainable future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
