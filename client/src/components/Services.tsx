import { motion } from "framer-motion";
import { Video, Palette, Smartphone, Check } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Video Editing",
      icon: Video,
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-900",
      description: "Professional video editing services using Adobe Premiere Pro. From YouTube content to promotional videos.",
      features: [
        "YouTube Video Editing",
        "Promotional Videos",
        "Social Media Content",
        "Color Grading",
      ],
    },
    {
      title: "Graphics Design",
      icon: Palette,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900",
      description: "Creative graphics design solutions using Adobe Photoshop for various digital and print media needs.",
      features: [
        "Logo Design",
        "Social Media Graphics",
        "Thumbnails",
        "Banner Design",
      ],
    },
    {
      title: "UI/UX Design",
      icon: Smartphone,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900",
      description: "Modern UI/UX design services for web and mobile applications using Figma with user-centered approach.",
      features: [
        "Website Design",
        "Mobile App UI",
        "Wireframing",
        "Prototyping",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the services I offer for your projects and business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border"
            >
              <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                <service.icon className={`${service.color} text-2xl h-8 w-8`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-green-500 mr-2 h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
