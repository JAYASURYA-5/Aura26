import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountdownTimer from "@/components/CountdownTimer";
import { GOOGLE_FORM_URL, EVENT_DATE, departments } from "@/lib/constants";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with professional 3D animation */}
        <div className="absolute inset-0 [perspective:2000px]" style={{ backfaceVisibility: "hidden" }}>
          <motion.div
            initial={{ rotateX: 0, rotateY: 0 }}
            animate={{ 
              rotateX: [0, 3, -3, 0], 
              rotateY: [0, -4, 4, 0]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic-bezier for smooth motion
            }}
            className="w-full h-full [transform-style:preserve-3d]"
            style={{
              transformOrigin: "center center",
              backfaceVisibility: "hidden"
            }}
          >
            <motion.img 
              src={heroBg} 
              alt="" 
              className="w-full h-full object-cover"
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          </motion.div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80"
            animate={{
              opacity: [0.8, 0.85, 0.8]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" className="space-y-6">
            <motion.p variants={fadeUp} custom={0} className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground">
              Inter-Department Symposium
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black"
            >
              <motion.span
                className="gradient-text inline-block"
                animate={{
                  rotateY: [0, -5, 5, 0],
                  rotateX: [0, 2, -2, 0],
                  textShadow: [
                    "0 0 20px rgba(var(--primary), 0.3)",
                    "0 0 40px rgba(var(--primary), 0.5)",
                    "0 0 20px rgba(var(--primary), 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1500px"
                }}
              >
                AURA
              </motion.span>
              <span className="text-foreground inline-block ml-2">'26</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              Ignite Innovation. Inspire Excellence.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex justify-center">
              <CountdownTimer targetDate={EVENT_DATE} />
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="neon-button text-base font-display">
                Register Now
              </a>
              <Link to="/events" className="neon-button-outline text-base font-display">
                Explore Events
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-heading mb-4">
              About <span className="gradient-text">AURA'26</span>
            </h2>
            <div className="glow-line mb-6" />
            <p className="text-muted-foreground leading-relaxed">
              AURA'26 is a grand inter-department technical and non-technical symposium bringing together 7 departments
              for a celebration of innovation, creativity, and excellence. From hackathons to quizzes, from robotics to
              business plans — there's something for everyone.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: "7", label: "Departments" },
              { value: "25+", label: "Events" },
              { value: "1000+", label: "Participants" },
              { value: "₹35k", label: "Prizes" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="font-display text-3xl font-bold neon-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="section-heading mb-4">
              <span className="gradient-text">Departments</span>
            </h2>
            <div className="glow-line mb-6" />
            <p className="text-muted-foreground">7 departments, countless opportunities.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={`/departments/${dept.id}`} className="glass-card-hover block p-6 h-full">
                  <div className="text-4xl mb-3">{dept.icon}</div>
                  <h3 className="font-display text-sm font-bold mb-1 text-foreground">{dept.shortName}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{dept.name}</p>
                  <p className="text-xs text-primary mt-2">{dept.events.length} events →</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="section-heading mb-4">Event <span className="gradient-text">Highlights</span></h2>
            <div className="glow-line" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🏆", title: "Competitive Events", desc: "Battle it out in hackathons, coding sprints, and more." },
              { icon: "🎭", title: "Non-Tech Fun", desc: "Quizzes, treasure hunts, ad shows — something for everyone." },
              { icon: "🤝", title: "Networking", desc: "Connect with peers across departments and colleges." },
            ].map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-hover p-8 text-center"
              >
                <div className="text-5xl mb-4">{h.icon}</div>
                <h3 className="font-display text-base font-bold mb-2 text-foreground">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="relative container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="section-heading mb-4">
              <span className="gradient-text">FAQ</span>
            </h2>
            <div className="glow-line" />
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Who can participate?", a: "Students from any college and department can participate." },
              { q: "Is there a registration fee?", a: "Registration details will be announced soon. Stay tuned!" },
              { q: "Can I participate in multiple events?", a: "Yes, as long as the event timings don't clash." },
              { q: "How do I register?", a: "Click any 'Register Now' button — it will take you to our Google Form." },
              { q: "Where will the event be held?", a: "At the college campus. Venue details will be shared after registration." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-5 border-none">
                <AccordionTrigger className="text-sm font-medium text-foreground hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="section-heading mb-4">Ready to <span className="gradient-text">Join?</span></h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Be part of the biggest inter-department symposium. Register now and showcase your talent!
            </p>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="neon-button text-lg font-display">
              Register Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
