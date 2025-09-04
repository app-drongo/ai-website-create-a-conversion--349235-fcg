import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Settings,
  Database,
  Cog,
  Shield,
  TrendingUp,
  Users,
  BarChart3,
  Cpu
} from "lucide-react"

export default function ServicesListDescriptions() {
  const services = [
    {
      id: "sap-implementation",
      title: "SAP S/4HANA Implementation",
      description: "Complete SAP ERP implementation tailored for manufacturing",
      longDescription: "Our comprehensive SAP S/4HANA implementation service transforms your manufacturing operations with industry-leading ERP capabilities. We ensure seamless deployment with minimal disruption to your production schedules.",
      icon: Settings,
      benefits: [
        "Manufacturing execution system integration",
        "Production planning optimization",
        "Quality management workflows",
        "Real-time inventory tracking"
      ],
      pricing: "Starting at $150,000",
      timeline: "6-12 months implementation",
      featured: true,
      badge: "Most Popular"
    },
    {
      id: "system-integration",
      title: "Manufacturing System Integration",
      description: "Seamlessly connect SAP with your existing manufacturing systems",
      longDescription: "Bridge the gap between SAP ERP and your manufacturing equipment, MES systems, and IoT devices. Our integration expertise ensures data flows smoothly across your entire production ecosystem.",
      icon: Database,
      benefits: [
        "MES and ERP synchronization",
        "IoT device connectivity",
        "Legacy system migration",
        "API development and management"
      ],
      pricing: "Project-based from $75,000",
      timeline: "3-6 months per integration"
    },
    {
      id: "process-optimization",
      title: "Manufacturing Process Optimization",
      description: "Streamline operations with SAP-powered business optimization",
      longDescription: "Leverage SAP's advanced analytics and automation capabilities to optimize your manufacturing processes. We identify bottlenecks, reduce waste, and improve overall equipment effectiveness.",
      icon: TrendingUp,
      benefits: [
        "Lean manufacturing implementation",
        "Predictive maintenance setup",
        "Supply chain optimization",
        "Performance dashboard creation"
      ],
      pricing: "Starting at $50,000",
      timeline: "2-4 months engagement"
    },
    {
      id: "support-maintenance",
      title: "Enterprise Support & Maintenance",
      description: "24/7 SAP system support for uninterrupted manufacturing",
      longDescription: "Keep your manufacturing operations running smoothly with our comprehensive SAP support services. Our certified experts provide round-the-clock monitoring, maintenance, and rapid issue resolution.",
      icon: Shield,
      benefits: [
        "24/7 system monitoring",
        "Proactive maintenance scheduling",
        "Emergency response team",
        "Regular system health assessments"
      ],
      pricing: "Monthly retainer from $15,000",
      timeline: "Ongoing support contracts",
      badge: "Critical"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            SAP Manufacturing Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise Solutions for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Manufacturing Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive SAP ERP services designed specifically for manufacturing operations and production optimization
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-accent text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Request Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Ready to Transform Your Manufacturing Operations?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how SAP ERP can optimize your production processes and drive operational excellence.
          </p>
          <Button size="lg">
            Schedule Strategic Assessment
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}