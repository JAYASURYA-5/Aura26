import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <div>
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="section-heading mb-4">Contact <span className="gradient-text">Us</span></h1>
          <div className="glow-line mb-6" />
          <p className="text-muted-foreground">Have questions? Reach out to us!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            {[
                { icon: Mail, label: "Email", value: "symposium_ait@adithyatech.com" },
                { icon: Phone, label: "Phone", value: "+91 9597698617" },
                { icon: MapPin, label: "Location", value: "Adithya Institute of Technology , Sathy road, Kurumbapalayam,Coimbatore" },
            ].map((item) => (
              <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <div className="glass-card p-5">
              <p className="text-xs text-muted-foreground mb-3">Follow us</p>
              <div className="flex gap-3">
                {["Instagram", "LinkedIn", "YouTube", "Twitter"].map((s) => (
                  <a key={s} href="#" className="text-xs px-3 py-1.5 rounded-full glass-card text-muted-foreground hover:text-primary transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card overflow-hidden rounded-xl min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d80.123456789!3d13.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzI0LjQiTiA4MMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="College Location"
            />
          </motion.div>
        </div>

        {/* Event Coordinators */}
        <div className="max-w-4xl mx-auto mt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-display text-xl font-bold mb-2">Event <span className="gradient-text">Coordinators</span></h2>
            <div className="glow-line" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Coordinator 1", role: "Overall Coordinator", phone: "+91 98765 43210" },
              { name: "Coordinator 2", role: "Technical Head", phone: "+91 98765 43211" },
              { name: "Coordinator 3", role: "Non-Technical Head", phone: "+91 98765 43212" },
            ].map((c) => (
              <div key={c.name} className="glass-card p-5 text-center">
                <div className="w-14 h-14 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center text-xl">👤</div>
                <p className="text-sm font-medium text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.role}</p>
                <p className="text-xs text-primary mt-1">{c.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
