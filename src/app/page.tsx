import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, WifiOff, Sparkles, Users, Heart, Lock, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const features = [
    {
      icon: WifiOff,
      title: 'Works Offline',
      description: 'Access your contacts anywhere, anytime. No internet? No problem. Your data stays with you.',
    },
    {
      icon: Sparkles,
      title: 'Beautiful Design',
      description: 'Elegant interfaces that make managing contacts a delightful experience. Minimal and intuitive.',
    },
    {
      icon: Lock,
      title: 'Your Data, Your Control',
      description: 'Privacy-first approach. Your contacts are yours alone, stored securely on your device.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant search and organization. Find any contact in milliseconds with our smart algorithms.',
    },
  ]

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & Designer',
      bio: 'Passionate about creating beautiful, accessible interfaces that everyone can enjoy.',
    },
    {
      name: 'Sarah Martinez',
      role: 'Lead Developer',
      bio: 'Expert in building robust, efficient systems with a focus on user experience.',
    },
    {
      name: 'Jordan Kim',
      role: 'Product Manager',
      bio: 'Dedicated to understanding user needs and translating them into elegant solutions.',
    },
    {
      name: 'Taylor Brown',
      role: 'Community Lead',
      bio: 'Building bridges between our team and the amazing community of users.',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border bg-accent px-4 py-1.5 text-sm">
              <span className="text-accent-foreground font-medium">✨ Now available for everyone</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight lg:text-7xl">
              Contact Management,
              <span className="text-primary"> Reimagined</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover new ways to keep track of your contacts. Beautiful design, offline capability, and creative techniques designed for everyone on a budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="text-lg px-8">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Swift Nectarine?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe everyone deserves beautiful, powerful tools to manage their relationships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
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

      {/* About the Team Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A dedicated group of individuals passionate about making contact management accessible and beautiful.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto border-2">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl md:text-4xl">Join Our Community</CardTitle>
              <CardDescription className="text-lg">
                Stay connected with us on social media for updates, tips, and behind-the-scenes glimpses into our creative process.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://twitter.com/swiftnectarine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-primary/20 bg-background px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  Follow on Twitter
                </a>
                <a
                  href="https://linkedin.com/company/swiftnectarine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-primary/20 bg-background px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
                <a
                  href="https://github.com/swiftnectarine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-primary/20 bg-background px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Star on GitHub
                </a>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Be the first to know about new features, updates, and special offers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Contact Management?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of users who have already discovered a better way to stay connected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="text-lg px-8">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
