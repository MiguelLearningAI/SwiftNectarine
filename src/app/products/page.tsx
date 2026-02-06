import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Download, Zap, Shield, Users, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function ProductsPage() {
  const products = [
    {
      id: 'nectarine-essential',
      name: 'Nectarine Essential',
      description: 'Perfect for individuals who want to keep their contacts organized without the complexity.',
      price: 'Free',
      features: [
        'Up to 500 contacts',
        'Basic search and filtering',
        'Offline access',
        'Import/Export CSV',
        'Basic tags and categories',
      ],
      icon: Users,
      cta: 'Get Started Free',
      highlighted: false,
    },
    {
      id: 'nectarine-pro',
      name: 'Nectarine Pro',
      description: 'For power users who need advanced features and unlimited contacts.',
      price: '$9.99/month',
      features: [
        'Unlimited contacts',
        'Advanced search with filters',
        'Offline access with sync',
        'Custom fields and labels',
        'Smart contact suggestions',
        'Priority support',
        'Team collaboration (up to 5)',
        'API access',
      ],
      icon: Zap,
      cta: 'Start 14-Day Free Trial',
      highlighted: true,
    },
    {
      id: 'nectarine-business',
      name: 'Nectarine Business',
      description: 'Complete solution for teams and businesses that need robust contact management.',
      price: '$29.99/month',
      features: [
        'Everything in Pro',
        'Unlimited team members',
        'Advanced permissions',
        'Custom branding',
        'Analytics and reporting',
        'Integrations (CRM, Email)',
        'Dedicated account manager',
        'SLA guarantee',
        'Advanced security features',
      ],
      icon: Shield,
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  const features = [
    {
      title: 'Offline First',
      description: 'All our products work offline. Your data is always accessible, even without an internet connection.',
      icon: Download,
    },
    {
      title: 'Cross-Platform',
      description: 'Available on web, desktop, and mobile. Your contacts sync seamlessly across all devices.',
      icon: Smartphone,
    },
    {
      title: 'Privacy Focused',
      description: 'We never sell your data. Your contacts are encrypted and stored securely.',
      icon: Shield,
    },
  ]

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Our Products</h1>
            <p className="text-xl text-muted-foreground">
              Simple, beautiful, and affordable contact management solutions for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <Card
                key={product.id}
                className={`relative flex flex-col ${product.highlighted ? 'border-2 border-primary shadow-lg scale-105' : ''}`}
              >
                {product.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{product.price}</span>
                    {product.price !== 'Free' && (
                      <span className="text-muted-foreground text-sm">/month</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={product.highlighted ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href={product.price === 'Free' ? '/contact' : '/contact'}>
                      {product.cta}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Our Products?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with love, designed for simplicity, and priced for accessibility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto border-2">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-3xl md:text-4xl">Not Sure Which Plan is Right for You?</CardTitle>
              <CardDescription className="text-lg">
                Our team is here to help you find the perfect solution for your needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="text-lg px-8">
                    Contact Sales
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
