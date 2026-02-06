import { Card, CardContent } from '@/components/ui/card'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-8 space-y-8">
              <div className="prose prose-gray max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  At Swift Nectarine, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our contact management services.
                </p>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">1. Information We Collect</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Contact Information:</strong> When you use our services, you may provide us with contact details such as names, email addresses, phone numbers, and other information you choose to store about your contacts.
                    </p>
                    <p>
                      <strong className="text-foreground">Account Information:</strong> When you create an account, we collect your name, email address, and any other information you voluntarily provide.
                    </p>
                    <p>
                      <strong className="text-foreground">Usage Data:</strong> We collect information about how you use our services, including feature usage, device information, and log data.
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices and support messages</li>
                      <li>Respond to comments, questions, and customer service requests</li>
                      <li>Monitor and analyze trends, usage, and activities</li>
                      <li>Detect, prevent, and address technical issues and fraud</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">3. Information Sharing</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">We Do Not Sell Your Data:</strong> Swift Nectarine does not sell, trade, or rent your personal identification information to others.
                    </p>
                    <p>
                      <strong className="text-foreground">Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our services, conducting our business, or servicing you.
                    </p>
                    <p>
                      <strong className="text-foreground">Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety, or that of our users or others.
                    </p>
                    <p>
                      <strong className="text-foreground">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">4. Data Security</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                    </p>
                    <p>
                      <strong className="text-foreground">Encryption:</strong> Your data is encrypted both in transit and at rest using industry-standard encryption protocols.
                    </p>
                    <p>
                      <strong className="text-foreground">Access Control:</strong> Access to your personal information is limited to employees who need to know that information to operate, develop, or improve our services.
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">5. Data Retention</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. When you delete your account, we will delete your personal information within a reasonable timeframe, except as required by law.
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">6. Your Rights</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access and obtain a copy of your personal information</li>
                      <li>Correct inaccurate or incomplete information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Object to or restrict processing of your information</li>
                      <li>Request transfer of your information</li>
                      <li>Withdraw consent where we rely on consent for processing</li>
                    </ul>
                    <p>
                      To exercise these rights, please contact us at privacy@swiftnectarine.com
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">7. Children's Privacy</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">8. International Data Transfers</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our services, you consent to such transfers.
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">9. Changes to This Privacy Policy</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">10. Contact Us</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="bg-muted p-4 rounded-lg space-y-2">
                      <p>
                        <strong className="text-foreground">Email:</strong> privacy@swiftnectarine.com
                      </p>
                      <p>
                        <strong className="text-foreground">Address:</strong> 123 Innovation Drive, San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
