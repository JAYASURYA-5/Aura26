import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { departments } from "@/lib/constants";

const Departments = () => (
  <div>
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="section-heading mb-4"><span className="gradient-text">Departments</span></h1>
          <div className="glow-line mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            7 departments, each hosting exciting technical and non-technical events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to={`/departments/${dept.id}`} className="glass-card-hover block p-8 h-full group">
                <div className="text-5xl mb-4">{dept.icon}</div>
                <h2 className="font-display text-base font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                  {dept.shortName}
                </h2>
                <p className="text-sm text-muted-foreground mb-3">{dept.name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{dept.description}</p>
                <div className="flex gap-2">
                  <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {dept.events.filter((e) => e.category === "technical").length} Technical
                  </span>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-secondary/10 text-secondary">
                    {dept.events.filter((e) => e.category === "non-technical").length} Non-Technical
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Departments;
