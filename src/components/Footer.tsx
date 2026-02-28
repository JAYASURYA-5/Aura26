import { GOOGLE_FORM_URL } from "@/lib/constants";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="font-display text-xl font-bold mb-3">
            <span className="gradient-text">AURA</span>'26
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ignite Innovation. Inspire Excellence. An inter-department technical & non-technical symposium.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-3 text-foreground">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p>📧 symposium_ait@adithyatech.com</p>
            <p>📞 +91 9597698617</p>
            <p>📍 Adithya Institute of Technology , Sathy road, Kurumbapalayam,Coimbatore</p>
          </div>
        </div>

        {/* Register */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-3 text-foreground">Join AURA'26</h4>
          <p className="text-sm text-muted-foreground mb-4">Don't miss out on the biggest symposium of the year!</p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button text-sm inline-block"
          >
            Register Now
          </a>
        </div>
      </div>

      <div className="glow-line mt-8 mb-6" />

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-xs text-muted-foreground">© 2026 AURA'26. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
