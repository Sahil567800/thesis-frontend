import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, GraduationCap, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation()
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];
  return <>
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">

        <a href="#home" className="flex items-center gap-2">
          <div className="bg-primary text-white p-2.5 rounded-xl">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary tracking-tight">
              Atule<span className="text-gold">Writes</span>
            </h1>
            <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
              Academic Research Support
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors ${location.pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-primary"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size='lg' className="bg-primary w-40 hover:bg-primary/90">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border p-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full">
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Get Started
            </a>
          </Button>
        </div>
      )}
    </header>
  </>
}