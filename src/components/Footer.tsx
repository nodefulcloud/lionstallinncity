import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-primary-foreground">
              Lions Club Tallinn City
            </h3>
            <p className="text-sm leading-relaxed opacity-80">
              Lions-liikumise põhieesmärgiks on heategevus ja püüame seda oma võimaluste piires teha.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Facebook" className="opacity-70 hover:opacity-100 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="opacity-70 hover:opacity-100 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="opacity-70 hover:opacity-100 transition-opacity">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="opacity-70 hover:opacity-100 transition-opacity">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4 text-primary-foreground">
              Kiirlingid
            </h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/meist" className="hover:opacity-100 transition-opacity">Meist</Link></li>
              <li><Link to="/projektid" className="hover:opacity-100 transition-opacity">Projektid</Link></li>
              <li><Link to="/toetused" className="hover:opacity-100 transition-opacity">Toeta meid</Link></li>
              <li><Link to="/uudised" className="hover:opacity-100 transition-opacity">Uudised</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4 text-primary-foreground">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Tallinn, Estonia</li>
              <li>info@lionstallinncity.ee</li>
              <li>+372 516 4309</li>
            </ul>
          </div>

          {/* Lions International */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4 text-primary-foreground">
              Lions International
            </h4>
            <p className="text-sm opacity-80 mb-4">
              Lions Clubs International on maailma suurim heategevuslik
              organisatsioon üle 1.4 millioni liikmega.
            </p>
            <a
              href="https://www.lionsclubs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity underline"
            >
              Visit lionsclubs.org →
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
          <p>© {new Date().getFullYear()} Lions Club Tallinn City. All rights reserved.</p>
          <p>
            Member of{" "}
            <a
              href="https://www.lionsclubs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Lions Clubs International
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
