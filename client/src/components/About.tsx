import { motion } from "framer-motion";
import { Trophy, Medal, Star } from "lucide-react";

export function About() {
  const achievements = [
    {
      icon: Trophy,
      text: "5000+ subscribers on YouTube channel (AG_Editing)",
    },
    {
      icon: Medal,
      text: "Completed UI/UX designing course with SeminarRoom",
    },
    {
      icon: Star,
      text: "Completed MERN stack development course with SeminarRoom",
    },
  ];

  const interests = [
    "Frontend Development",
    "UI/UX Design",
    "Video Editing",
    "Digital Marketing",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and interests
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Student studying computer science"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Age</p>
                  <p className="font-semibold text-foreground">19 years</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="font-semibold text-foreground">BCA 2nd Year</p>
                </div>
                <div className="bg-muted p-4 rounded-lg sm:col-span-2">
                  <p className="text-sm text-muted-foreground">College</p>
                  <p className="font-semibold text-foreground">KLE's B K College of BCA, Chikodi</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Achievements</h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <achievement.icon className="h-5 w-5 text-yellow-500 mt-1" />
                    <span className="text-muted-foreground">{achievement.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
                       }
