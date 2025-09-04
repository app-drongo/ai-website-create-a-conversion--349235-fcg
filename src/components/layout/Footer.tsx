import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Linkedin, 
  Twitter,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Settings,
  Cog,
  Database,
  BarChart3
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "SAP Solutions",
      links: [
        { name: "ERP Implementation", href: "#services" },
        { name: "Manufacturing Modules", href: "#services" },
        { name: "Supply Chain Optimization", href: "#services" },
        { name: "Production Planning", href: "#services" },
        { name: "Quality Management", href: "#services" },
        { name: "Integration Services", href: "#services" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Automotive", href: "#services" },
        { name: "Aerospace", href: "#services" },
        { name: "Electronics", href: "#services" },
        { name: "Pharmaceuticals", href: "#services" },
        { name: "Food & Beverage", href: "#services" },
        { name: "Chemical Processing", href: "#services" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Implementation Guide", href: "/resources" },
        { name: "Best Practices", href: "/resources" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "White Papers", href: "/resources" },
        { name: "Training Programs", href: "/training" },
        { name: "Support Portal", href: "/support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    }
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/manufacturetech-solutions" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/manufacturetech" }
  ]

  return (
    <footer className="bg-secondary border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Settings className="size-5 text-background" />
                </div>
                <span className="font-bold text-xl text-background">ManufactureTech Solutions</span>
              </Link>
              <p className="text-background/80 text-sm leading-relaxed mb-6">
                Leading SAP ERP implementation specialists for manufacturing enterprises. 
                Transform your production processes with our proven methodologies and expert consulting services.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">solutions@manufacturetech.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">+1 (555) 789-0123</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">2500 Manufacturing Blvd, Suite 400</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-background">SAP Manufacturing Insights</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/20 rounded-md bg-background/10 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
                <Button size="sm" className="px-3 bg-accent hover:bg-accent/90 text-secondary">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-background/70">
                Get monthly insights on SAP manufacturing trends and implementation best practices.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-background">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-background/80 hover:text-background transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-background/80">
              <span>© 2024 ManufactureTech Solutions. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                SAP Certified Partner <Database className="size-3 text-accent" />
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-background/80 mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-primary/20 hover:bg-accent/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-background/80 group-hover:text-accent transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/20">
            <Link href="/certifications" className="text-xs text-background/80 hover:text-background transition-colors">
              SAP Certifications
            </Link>
            <Link href="/compliance" className="text-xs text-background/80 hover:text-background transition-colors">
              Compliance
            </Link>
            <Link href="/security" className="text-xs text-background/80 hover:text-background transition-colors">
              Data Security
            </Link>
            <Link href="/support" className="text-xs text-background/80 hover:text-background transition-colors">
              24/7 Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}