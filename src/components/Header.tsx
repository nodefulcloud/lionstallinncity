import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Avaleht", path: "/" },
  { label: "Meist", path: "/meist" },
  { label: "Projektid", path: "/projektid" },
  { label: "Toetused", path: "/toetused" },
  { label: "Kinkekaart", path: "/kinkekaart" },
  { label: "Uudised", path: "/uudised" },
  { label: "Kontakt", path: "/kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Lions Clubs International Logo"
              className="h-10 md:h-12 w-auto"
            />
            <div className="hidden sm:block">
              <p className="font-heading text-sm md:text-base font-bold text-primary leading-tight">
                Lions Club
              </p>
              <p className="font-heading text-xs md:text-sm font-medium text-lions-gold-dark leading-tight">
                Tallinn City
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-200 border-b-2 ${
                    active
                      ? "text-primary border-primary"
                      : "text-muted-foreground border-transparent hover:text-primary hover:border-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="section-container py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-semibold transition-colors ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;