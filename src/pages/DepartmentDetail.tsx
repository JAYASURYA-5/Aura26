import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { departments, GOOGLE_FORM_URL } from "@/lib/constants";
import { ChevronDown, Users, Trophy, ArrowLeft } from "lucide-react";

const DepartmentDetail = () => {
  const { id } = useParams();
  const dept = departments.find((d) => d.id === id);
  const [openEvent, setOpenEvent] = useState<string | null>(null);

  if (!dept) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="section-heading mb-4">Department Not Found</h1>
          <Link to="/departments" className="neon-button-outline text-sm">Back to Departments</Link>
        </div>
      </div>
    );
  }

  const technical = dept.events.filter((e) => e.category === "technical");
  const nonTechnical = dept.events.filter((e) => e.category === "non-technical");

  return (
    <div>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-card/30" />
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/departments" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Departments
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-6xl mb-4">{dept.icon}</div>
            <h1 className="section-heading mb-2">{dept.shortName}</h1>
            <p className="text-lg text-muted-foreground mb-2">{dept.name}</p>
            <p className="text-sm text-muted-foreground max-w-2xl mb-4">{dept.description}</p>
            
          </motion.div>
        </div>
      </section>

      {/* Events */}
      {[
        { title: "Technical Events", events: technical, accent: "primary" },
        { title: "Non-Technical Events", events: nonTechnical, accent: "secondary" },
      ].map((section) => (
        section.events.length > 0 && (
          <section key={section.title} className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="font-display text-xl font-bold mb-6">
                <span className={section.accent === "primary" ? "neon-text" : "neon-text-purple"}>{section.title}</span>
              </h2>
              <div className="space-y-4">
                {section.events.map((event) => {
                  const isOpen = openEvent === event.name;
                  return (
                    <motion.div key={event.name} layout className="glass-card overflow-hidden">
                      <button
                        onClick={() => setOpenEvent(isOpen ? null : event.name)}
                        className="w-full p-5 flex items-center justify-between text-left"
                      >
                        <div>
                          <h3 className="font-display text-sm font-bold text-foreground">{event.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{event.description}</p>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`text-muted-foreground transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 space-y-4">
                              <div className="glow-line" />
                              <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Users size={14} className="text-primary" />
                                  Team Size: {event.teamSize}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Trophy size={14} className="text-primary" />
                                  Prize: {event.prize}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-foreground mb-2">Rules:</h4>
                                <ul className="space-y-1">
                                  {event.rules.map((r, i) => (
                                    <li key={i} className="text-xs text-muted-foreground flex gap-2">
                                      <span className="text-primary">•</span> {r}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <a
                                href={GOOGLE_FORM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="neon-button text-xs inline-block"
                              >
                                Register for {event.name}
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )
      ))}
    </div>
  );
};

export default DepartmentDetail;
