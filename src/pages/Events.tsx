import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { getAllEvents, departments, GOOGLE_FORM_URL } from "@/lib/constants";
import { Search, Users, Trophy, Phone } from "lucide-react";

const Events = () => {
  const [deptFilter, setDeptFilter] = useState("all");
  const [catFilter, setCatFilter] = useState("all");
  const [search, setSearch] = useState("");

  const allEvents = useMemo(() => getAllEvents(), []);

  const filtered = useMemo(() => {
    return allEvents.filter((e) => {
      if (deptFilter !== "all" && e.departmentId !== deptFilter) return false;
      if (catFilter !== "all" && e.category !== catFilter) return false;
      if (search && !e.name.toLowerCase().includes(search.toLowerCase()) && !e.description.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [allEvents, deptFilter, catFilter, search]);

  return (
    <div>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="section-heading mb-4">All <span className="gradient-text">Events</span></h1>
            <div className="glow-line mb-6" />
          </motion.div>

          {/* Filters */}
          <div className="max-w-4xl mx-auto mb-10 space-y-4">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary rounded-xl"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setDeptFilter("all")} className={`text-xs px-3 py-1.5 rounded-full transition-all ${deptFilter === "all" ? "neon-button" : "glass-card text-muted-foreground hover:text-foreground"}`}>
                All Depts
              </button>
              {departments.map((d) => (
                <button key={d.id} onClick={() => setDeptFilter(d.id)} className={`text-xs px-3 py-1.5 rounded-full transition-all ${deptFilter === d.id ? "neon-button" : "glass-card text-muted-foreground hover:text-foreground"}`}>
                  {d.shortName}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {["all", "technical", "non-technical"].map((c) => (
                <button key={c} onClick={() => setCatFilter(c)} className={`text-xs px-3 py-1.5 rounded-full transition-all capitalize ${catFilter === c ? "neon-button" : "glass-card text-muted-foreground hover:text-foreground"}`}>
                  {c === "all" ? "All Categories" : c}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {filtered.map((event, i) => (
              <motion.div
                key={`${event.departmentId}-${event.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card-hover p-6 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${event.category === "technical" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                    {event.category}
                  </span>
                  <span className="text-[10px] text-muted-foreground">{event.departmentShortName}</span>
                </div>
                <h3 className="font-display text-sm font-bold text-foreground mb-1">{event.name}</h3>
                <p className="text-xs text-muted-foreground mb-4 flex-1">{event.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users size={12} className="text-primary" /> Team: {event.teamSize}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Trophy size={12} className="text-primary" /> {event.prize}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    {event.coordinator.name}
                  </div>
                </div>
                {/* Registration link removed for Events page */}
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">No events match your filters.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
