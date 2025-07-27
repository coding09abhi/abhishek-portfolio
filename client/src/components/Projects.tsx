import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "EatNow",
      description: "A full-stack food ordering website with user authentication, food listing, and order management features built with Node.js and MongoDB.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Full Stack", "MERN"],
      tagColors: ["bg-primary/10 text-primary", "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"],
      githubLink: "https://github.com/AbhiEdit16/EatNow-Food-Delivery-Website",
      liveLink: null,
    },
    {
      title: "MyThings-Frontend-Project",
      description: "A frontend project named My Things where users can search shops by selecting or sorting city, category and type with an intuitive interface.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Frontend", "Search"],
      tagColors: ["bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200", "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"],
      githubLink: "https://github.com/AbhiEdit16/MyThings-Fronted-Project",
      liveLink: null,
    },
    {
      title: "AG_Editing YouTube",
      description: "My YouTube channel showcasing video editing skills with over 5,000 subscribers, featuring tutorials and creative content.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["YouTube", "5K+ Subs"],
      tagColors: ["bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200", "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"],
      githubLink: null,
      liveLink: "https://youtube.com/@ag_editing",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-muted/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded text-xs ${project.tagColors[tagIndex]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {project.liveLink && (
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          {project.title === "AG_Editing YouTube" ? "Visit Channel" : "Live Demo"}
                        </a>
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                  {project.title === "AG_Editing YouTube" && (
                    <span className="text-muted-foreground text-sm">5,000+ subscribers</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
        }
