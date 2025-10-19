import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <nav className="text-sm text-muted-foreground">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </nav>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-opacity duration-300">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-lg transition-all duration-200"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-lg transition-all duration-200"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-lg transition-all duration-200"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="w-full h-32 border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-lg transition-all duration-200"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-colors duration-200"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-opacity duration-300">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  123 Design Lane, Creative City, CC 45678
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  +1 (555) 123-4567
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  support@buyzo.com
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Mon-Fri: 9:00 AM - 6:00 PM (UTC+06)
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}