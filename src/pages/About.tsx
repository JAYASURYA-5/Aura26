import { motion } from "framer-motion";

const About = () => (
  <div>
    {/* Hero */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
          <h1 className="section-heading mb-4">About <span className="gradient-text">AURA'26</span></h1>
          <div className="glow-line mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            AURA'26 is a grand inter-department technical and non-technical symposium that brings together the brightest
            minds from 7 departments. It's a platform to innovate, compete, and connect — celebrating the spirit of
            engineering and management excellence.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-4xl">
        {[
          { title: "Our Vision", text: "To create a vibrant platform that fosters innovation, interdisciplinary collaboration, and holistic development among students." },
          { title: "Our Mission", text: "To organize a world-class symposium that provides students with opportunities to showcase their technical prowess, creative talents, and leadership skills." },
        ].map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, x: i === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8">
            <h3 className="font-display text-lg font-bold mb-3 neon-text">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* About the College */}
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-heading text-2xl mb-4">About the <span className="gradient-text">College</span></h2>
          <div className="glow-line mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            Our institution is a premier engineering and management college committed to academic excellence and
            holistic student development. With state-of-the-art facilities, experienced faculty, and a vibrant campus life,
            we prepare students to become industry-ready professionals and responsible citizens.
          </p>
        </motion.div>
      </div>
    </section>


  </div>
);

export default About;
