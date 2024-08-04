"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight, BarChart2, PieChart, TrendingUp, Users, Mail } from 'lucide-react';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 rounded-lg">
              <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6">Revolutionize Your VC Portfolio Management</h1>
                <p className="text-xl mb-8">Empower your decision-making with real-time insights and streamlined processes</p>
                <Button className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-3 px-6 rounded-full text-lg">
                  Start Your Free Trial
                  <ChevronRight className="ml-2" />
                </Button>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
              <h2 className="text-3xl font-bold text-center mb-12">Powerful Features for Modern VCs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: <BarChart2 size={48} />, title: "Advanced Analytics", desc: "Gain deep insights into your portfolio performance" },
                  { icon: <TrendingUp size={48} />, title: "Growth Tracking", desc: "Monitor key metrics and startup growth in real-time" },
                  { icon: <Users size={48} />, title: "Investor Relations", desc: "Keep your LPs informed with automated reporting" },
                ].map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto bg-blue-100 text-blue-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{feature.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Testimonial Section */}
            <section className="bg-gray-100 py-16 rounded-lg">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Trusted by Leading VCs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { name: "Sarah Johnson", role: "Partner at TechVentures", quote: "VC Portfolio Pro has transformed how we manage our investments. It's an indispensable tool for any serious VC firm." },
                    { name: "Michael Chen", role: "Managing Director at Future Fund", quote: "The insights we get from this platform have significantly improved our decision-making process. Highly recommended!" },
                    { name: "Emily Rodriguez", role: "CEO of InnoInvest", quote: "From portfolio tracking to LP reporting, this solution does it all. It's been a game-changer for our operations." },
                  ].map((testimonial, index) => (
                    <Card key={index} className="text-left">
                      <CardContent className="pt-6">
                        <p className="italic mb-4">{testimonial.quote}</p>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 text-white py-16 rounded-lg">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your VC Game?</h2>
                <p className="text-xl mb-8">Join the ranks of successful VCs using our platform to drive growth and success.</p>
                <Button className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-3 px-6 rounded-full text-lg">
                  Get Started Now
                  <ChevronRight className="ml-2" />
                </Button>
              </div>
            </section>
          </div>
        );

      case 'about':
          return (
            <section className="py-16 bg-gray-50">
              <h2 className="text-4xl font-bold text-center mb-12">About Poodle</h2>
              <div className="max-w-prose mx-auto space-y-6">
                <p>Poodle is a forward-thinking company dedicated to transforming the venture capital landscape. Our platform is designed to empower venture capitalists with cutting-edge tools and insights, enabling them to manage their portfolios with precision and efficiency.</p>
        
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p>At Poodle, our mission is to revolutionize how venture capitalists manage their investments by providing a comprehensive platform that integrates advanced analytics, real-time insights, and streamlined communication tools. We aim to simplify and enhance the portfolio management process, allowing VCs to focus on what truly matters: driving growth and success for their investments.</p>
        
                <h3 className="text-xl font-semibold">Our Vision</h3>
                <p>We envision a future where venture capitalists can make data-driven decisions with confidence and ease. By leveraging the power of technology, we strive to create a platform that not only meets the current needs of VCs but also anticipates and adapts to the evolving landscape of the venture capital industry.</p>
        
                <h3 className="text-xl font-semibold">Core Values</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Innovation:</strong> We are committed to continuous innovation, developing new features and capabilities that set the standard for excellence in venture capital management.</li>
                  <li><strong>Integrity:</strong> We believe in building trust with our users by upholding the highest standards of integrity in everything we do. Transparency and honesty are at the core of our business practices.</li>
                  <li><strong>User-Centricity:</strong> Our users are at the heart of our platform. We prioritize their needs and feedback, ensuring that our solutions are tailored to their unique challenges and goals.</li>
                  <li><strong>Excellence:</strong> We strive for excellence in every aspect of our platform, from the user interface to the underlying technology, ensuring a seamless and reliable experience for our users.</li>
                  <li><strong>Collaboration:</strong> We believe in the power of collaboration, both within our team and with our users. By working together, we can achieve greater outcomes and drive meaningful impact in the venture capital industry.</li>
                </ul>
        
                <h3 className="text-xl font-semibold">Why Choose Poodle?</h3>
                <p>Poodle offers a comprehensive suite of tools designed to address the unique challenges faced by venture capitalists. Our platform provides advanced analytics, real-time portfolio tracking, and automated reporting features that simplify the management of investments. Whether youre monitoring startup growth, diversifying your portfolio, or maintaining investor relations, Poodle equips you with the insights and tools you need to succeed.</p>
                <p>We are dedicated to continuously improving our platform, ensuring that it evolves alongside the needs of our users. With Poodle, venture capitalists can confidently navigate the complexities of the investment landscape, make informed decisions, and ultimately drive greater returns for their stakeholders.</p>
        
                <h3 className="text-xl font-semibold">Get in Touch</h3>
                <p>We are always here to help and support our users. If you have any questions, feedback, or would like to learn more about how Poodle can benefit your venture capital operations, please dont hesitate to reach out to us. Together, we can shape the future of venture capital management.</p>
              </div>
            </section>
          );
        

      case 'contact':
            return (
              <section className="py-16 bg-gray-50">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
                <div className="max-w-lg mx-auto text-center">
                  <p className="text-lg mb-6">We would love to hear from you! Whether you have questions, feedback, or just want to get in touch, feel free to reach out to us.</p>
                  
                  <div className="flex items-center justify-center bg-white shadow-md p-6 rounded-lg border border-gray-200">
                    <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8-4H8m8 8H8m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <a href="mailto:sayuj@poodle.vc" className="text-lg font-semibold text-blue-600 hover:underline">sayuj@poodle.vc</a>
                  </div>
          
                  <p className="text-sm text-gray-600 mt-4">We will get back to you as soon as possible!</p>
                </div>
              </section>
            );
          
        return (
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="max-w-md mx-auto">
              <form>
                <div className="mb-4">
                  <Label htmlFor="name">Your Name</Label>
                  <Input type="text" id="name" className="w-full mt-1" />
                </div>
                <div className="mb-4">
                  <Label htmlFor="email">Your Email</Label>
                  <Input type="email" id="email" className="w-full mt-1" />
                </div>
                <div className="mb-4">
                  <Label htmlFor="message">Your Message</Label>
                  <textarea id="message" rows={5} className="w-full mt-1 p-2 border border-gray-300 rounded-md"></textarea>
                </div>
                <Button type="submit" className="bg-blue-600 text-white w-full py-3">Send Message</Button>
              </form>
            </div>
          </section>
        );

      case 'pricing':
          return (
            <section className="py-16 bg-gray-50">
              <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    plan: "Starter",
                    price: "$29/month",
                    description: "Ideal for small startups.",
                    features: ["Up to 10 portfolios", "Basic Analytics", "Email Support"],
                    cta: "Choose Starter",
                    bgColor: "bg-white",
                    textColor: "text-gray-700",
                  },
                  {
                    plan: "Professional",
                    price: "$99/month",
                    description: "Best for growing businesses.",
                    features: ["Up to 50 portfolios", "Advanced Analytics", "Priority Email Support"],
                    cta: "Choose Professional",
                    bgColor: "bg-blue-600",
                    textColor: "text-white",
                  },
                  {
                    plan: "Enterprise",
                    price: "Contact Us",
                    description: "For large enterprises.",
                    features: ["Unlimited portfolios", "Custom Analytics", "Dedicated Support"],
                    cta: "Contact Sales",
                    bgColor: "bg-white",
                    textColor: "text-gray-700",
                  },
                ].map((pricing, index) => (
                  <Card key={index} className={`text-center border ${pricing.bgColor} shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                    <CardHeader className="p-6">
                      <h3 className={`text-2xl font-semibold mb-4 ${pricing.textColor}`}>{pricing.plan}</h3>
                      <p className={`text-xl font-bold mb-2 ${pricing.textColor}`}>{pricing.price}</p>
                      <p className={`text-sm mb-4 ${pricing.textColor}`}>{pricing.description}</p>
                      <ul className={`list-inside mb-4 ${pricing.textColor}`}>
                        {pricing.features.map((feature, idx) => (
                          <li key={idx} className="mb-2">{feature}</li>
                        ))}
                      </ul>
                      <Button className={`mt-4 py-2 px-4 rounded-full ${pricing.bgColor === "bg-white" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white text-blue-600 hover:bg-blue-100"} font-semibold`}>
                        {pricing.cta}
                      </Button>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          );
        
        return (
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { plan: "Starter", price: "$29/month", features: ["Up to 10 portfolios", "Basic Analytics", "Email Support"] },
                { plan: "Professional", price: "$99/month", features: ["Up to 50 portfolios", "Advanced Analytics", "Priority Email Support"] },
                { plan: "Enterprise", price: "Contact Us", features: ["Unlimited portfolios", "Custom Analytics", "Dedicated Support"] },
              ].map((pricing, index) => (
                <Card key={index} className="text-center border border-gray-300">
                  <CardHeader className="bg-gray-100 p-4">
                    <CardTitle>{pricing.plan}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-2xl font-bold mb-4">
                    {pricing.price}
                  </CardContent>
                  <CardFooter>
                    <ul className="list-disc list-inside">
                      {pricing.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <Button className="bg-blue-600 text-white mt-4 w-full py-2">Choose Plan</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        );

      case 'privacy':
          return (
            <section className="py-16">
              <h2 className="text-3xl font-bold text-center mb-12">Privacy Policy</h2>
              <div className="max-w-prose mx-auto space-y-6">
                <p>This privacy policy governs your use of the software application Poodle (“Application”) for mobile devices that was created by Poodle. The Application is a tool for managing and analyzing venture capital portfolios.</p>
                
                <h3 className="text-xl font-semibold">What information does the Application obtain and how is it used?</h3>
                <p><strong>User Provided Information</strong><br />The Application obtains the information you provide when you download and register the Application. Registration with us is optional. However, please keep in mind that you may not be able to use some of the features offered by the Application unless you register with us.</p>
                <p>When you register with us and use the Application, you generally provide:</p>
                <ul className="list-disc list-inside pl-4">
                  <li>Your name, email address, age, username, password, and other registration information;</li>
                  <li>Transaction-related information, such as when you make purchases, respond to offers, or download or use applications from us;</li>
                  <li>Information you provide when you contact us for help;</li>
                  <li>Payment information for purchases and use of the Application;</li>
                  <li>Information you enter into our system when using the Application, such as contact information and project management data.</li>
                </ul>
                <p>We may also use the information you provide to contact you from time to time to provide you with important information, required notices, and marketing promotions.</p>
        
                <h3 className="text-xl font-semibold">Automatically Collected Information</h3>
                <p>In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile internet browsers you use, and information about the way you use the Application.</p>
        
                <h3 className="text-xl font-semibold">Does the Application collect precise real-time location information of the device?</h3>
                <p>This Application does not collect precise information about the location of your mobile device.</p>
        
                <h3 className="text-xl font-semibold">Do third parties see and/or have access to information obtained by the Application?</h3>
                <p>Only aggregated, anonymized data is periodically transmitted to external services to help us improve the Application and our service. We will share your information with third parties only in the ways that are described in this privacy statement.</p>
                <p>We may disclose User Provided and Automatically Collected Information:</p>
                <ul className="list-disc list-inside pl-4">
                  <li>As required by law, such as to comply with a subpoena, or similar legal process;</li>
                  <li>When we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                  <li>With our trusted service providers who work on our behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement;</li>
                  <li>If Poodle is involved in a merger, acquisition, or sale of all or a portion of its assets, you will be notified via email and/or a prominent notice on our website of any change in ownership or uses of this information, as well as any choices you may have regarding this information.</li>
                </ul>
        
                <h3 className="text-xl font-semibold">What are my opt-out rights?</h3>
                <p>You can stop all collection of information by the Application easily by uninstalling the Application. You may use the standard uninstall processes available as part of your mobile device or via the mobile application marketplace or network. You can also request to opt-out via email at sayuj@poodle.vc.</p>
        
                <h3 className="text-xl font-semibold">Data Retention Policy, Managing Your Information</h3>
                <p>We will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. We will retain Automatically Collected information for up to 24 months and thereafter may store it in aggregate. If you’d like us to delete User Provided Data that you have provided via the Application, please contact us at sayuj@poodle.vc and we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required for the Application to function properly.</p>
        
                <h3 className="text-xl font-semibold">Children</h3>
                <p>We do not use the Application to knowingly solicit data from or market to children under the age of 13. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, they should contact us at sayuj@poodle.vc. We will delete such information from our files within a reasonable time.</p>
        
                <h3 className="text-xl font-semibold">Security</h3>
                <p>We are concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect the information we process and maintain. For example, we limit access to this information to authorized employees and contractors who need to know that information to operate, develop, or improve our Application. Please be aware that, although we endeavor to provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.</p>
        
                <h3 className="text-xl font-semibold">Changes</h3>
                <p>This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting the new Privacy Policy here and informing you via email or text message. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
        
                <h3 className="text-xl font-semibold">Your Consent</h3>
                <p>By using the Application, you consent to our processing of your information as set forth in this Privacy Policy now and as amended by us. Processing means using cookies on a computer/handheld device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining, and disclosing information, all of which activities will take place in the United States. If you reside outside the United States, your information will be transferred, processed, and stored there under United States privacy standards.</p>
        
                <h3 className="text-xl font-semibold">Contact Us</h3>
                <p>If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at <a href="mailto:sayuj@poodle.vc" className="text-blue-600 underline">sayuj@poodle.vc</a>.</p>
              </div>
            </section>
          );
        

      case 'terms':
            return (
              <section className="py-16 bg-gray-50">
                <h2 className="text-4xl font-bold text-center mb-12">Terms & Conditions</h2>
                <div className="max-w-prose mx-auto space-y-6">
                  <p>Welcome to Poodle. By accessing or using our services, you agree to be bound by the following terms and conditions Terms. Please read these Terms carefully before using our services.</p>
          
                  <h3 className="text-xl font-semibold">1. Acceptance of Terms</h3>
                  <p>By accessing or using the Poodle application (“Application”), you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you may not access or use the Application.</p>
          
                  <h3 className="text-xl font-semibold">2. Modification of Terms</h3>
                  <p>Poodle reserves the right, in its sole discretion, to modify or revise these Terms at any time. Any changes will be effective immediately upon posting. Your continued use of the Application following the posting of changes constitutes your acceptance of such changes. It is your responsibility to review these Terms regularly.</p>
          
                  <h3 className="text-xl font-semibold">3. User Responsibilities</h3>
                  <p>You agree to use the Application only for lawful purposes and in accordance with these Terms. You must not use the Application in any way that could damage, disable, overburden, or impair the Application or interfere with any other partys use and enjoyment of the Application.</p>
          
                  <h3 className="text-xl font-semibold">4. Intellectual Property</h3>
                  <p>All content, features, and functionality of the Application, including but not limited to text, graphics, logos, icons, images, and software, are the exclusive property of Poodle and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
          
                  <h3 className="text-xl font-semibold">5. User-Generated Content</h3>
                  <p>You may be permitted to submit, upload, publish, or otherwise make available content such as text, images, and other materials User-Generated Content. You retain ownership of your User-Generated Content, but you grant Poodle a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, distribute, and display such content in connection with the operation of the Application.</p>
          
                  <h3 className="text-xl font-semibold">6. Payment Terms</h3>
                  <p>By subscribing to our services, you agree to pay the applicable fees as set forth on our pricing page. Poodle reserves the right to change its fees at any time. All payments are due at the time of purchase and are non-refundable.</p>
          
                  <h3 className="text-xl font-semibold">7. Termination</h3>
                  <p>Poodle reserves the right to terminate your access to the Application at its sole discretion, without notice, for conduct that it believes violates these Terms or is harmful to other users, Poodle, or third parties, or for any other reason.</p>
          
                  <h3 className="text-xl font-semibold">8. Disclaimer of Warranties</h3>
                  <p>The Application is provided on an as is and as available basis. Poodle makes no warranties, expressed or implied, regarding the operation of the Application or the information, content, materials, or products included therein. To the fullest extent permissible by applicable law, Poodle disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.</p>
          
                  <h3 className="text-xl font-semibold">9. Limitation of Liability</h3>
                  <p>In no event shall Poodle be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of, or inability to access or use, the Application, whether based on warranty, contract, tort (including negligence), or any other legal theory, and whether or not Poodle has been informed of the possibility of such damage.</p>
          
                  <h3 className="text-xl font-semibold">10. Governing Law</h3>
                  <p>These Terms and any disputes arising out of or related to these Terms or the use of the Application shall be governed by and construed in accordance with the laws of the jurisdiction in which Poodle is incorporated, without regard to its conflict of law principles.</p>
          
                  <h3 className="text-xl font-semibold">11. Severability</h3>
                  <p>If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
          
                  <h3 className="text-xl font-semibold">12. Entire Agreement</h3>
                  <p>These Terms constitute the entire agreement between you and Poodle regarding the use of the Application and supersede any prior agreements between you and Poodle relating to your use of the Application.</p>
          
                  <h3 className="text-xl font-semibold">13. Contact Information</h3>
                  <p>If you have any questions about these Terms, please contact us at <a href="mailto:sayuj@poodle.vc" className="text-blue-600 underline">sayuj@poodle.vc</a>.</p>
                </div>
              </section>
            );

      case 'cancellation':
          return (
            <section className="py-16 bg-gray-50">
              <h2 className="text-4xl font-bold text-center mb-12">Cancellation Policy</h2>
              <div className="max-w-prose mx-auto space-y-6">
                <p>At Poodle, we strive to provide the best experience possible. However, if you need to cancel your subscription, please review the following policy details to understand the process and implications.</p>
        
                <h3 className="text-xl font-semibold">1. Cancellation Process</h3>
                <p>If you wish to cancel your subscription, you can do so at any time through your account settings. Simply navigate to the subscription section and follow the prompts to cancel your plan. If you encounter any issues, please contact our support team at <a href="mailto:sayuj@poodle.vc" className="text-blue-600 underline">sayuj@poodle.vc</a> for assistance.</p>
        
                <h3 className="text-xl font-semibold">2. Notice Period</h3>
                <p>We recommend canceling your subscription at least 24 hours before the renewal date to avoid being charged for the next billing cycle. Cancellations made after the renewal date may result in charges for the upcoming period.</p>
        
                <h3 className="text-xl font-semibold">3. Refund Policy</h3>
                <p>Cancellations are effective immediately, and you will retain access to your subscription benefits until the end of your current billing period. We do not offer prorated refunds for cancellations made during an active subscription period. For annual subscriptions, partial refunds may be considered on a case-by-case basis. Please contact us for more information.</p>
        
                <h3 className="text-xl font-semibold">4. Impact of Cancellation</h3>
                <p>Upon cancellation, your access to premium features and content will be revoked at the end of the current billing period. Your account will revert to a free plan if available, or it may be deactivated if no free plan is offered. Please ensure you have downloaded or saved any necessary data before canceling your subscription.</p>
        
                <h3 className="text-xl font-semibold">5. Re-Subscription</h3>
                <p>If you cancel your subscription and later decide to re-subscribe, you can do so at any time by selecting a new plan from your account settings. Please note that any discounts or promotional pricing available during your initial subscription may no longer be applicable upon re-subscription.</p>
        
                <h3 className="text-xl font-semibold">6. Contacting Support</h3>
                <p>If you have any questions or need help with the cancellation process, our support team is here to assist you. You can reach out to us at <a href="mailto:sayuj@poodle.vc" className="text-blue-600 underline">sayuj@poodle.vc</a> or through the contact form on our website.</p>
        
                <h3 className="text-xl font-semibold">7. Changes to Cancellation Policy</h3>
                <p>Poodle reserves the right to modify or update this cancellation policy at any time. Any changes will be effective immediately upon posting on our website. We encourage you to review this policy periodically to stay informed of any updates.</p>
        
                <h3 className="text-xl font-semibold">8. Final Considerations</h3>
                <p>Your satisfaction is important to us, and we are committed to providing a smooth cancellation process. If you have feedback on how we can improve, please dont hesitate to share it with us.</p>
              </div>
            </section>
          );


      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="terms">Terms</TabsTrigger>
          <TabsTrigger value="cancellation">Cancellation</TabsTrigger>
        </TabsList>
        <TabsContent value={activeTab}>
          {renderContent()}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LandingPage;
