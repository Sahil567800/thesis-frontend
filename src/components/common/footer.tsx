import { BookOpen, ChartNoAxesCombined, ClipboardCheck, FileText, GraduationCap, Lightbulb, Search } from "lucide-react";

export default function Footer(){
    const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];
  const services = [
  {
    icon: Lightbulb,
    title: "Research Topic Selection",
    description:
      "Get guidance in identifying a focused, relevant and research-worthy topic for your academic project.",
  },
  {
    icon: FileText,
    title: "Research Proposal",
    description:
      "Structure your research objectives, questions, problem statement and proposal with expert guidance.",
  },
  {
    icon: BookOpen,
    title: "Literature Review",
    description:
      "Organize existing research, identify knowledge gaps and develop a well-structured literature review.",
  },
  {
    icon: Search,
    title: "Research Methodology",
    description:
      "Understand research designs, sampling techniques, data collection and appropriate methodologies.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Data Analysis Guidance",
    description:
      "Get assistance understanding quantitative and qualitative analysis, interpretation and presentation.",
  },
  {
    icon: ClipboardCheck,
    title: "Editing & Proofreading",
    description:
      "Improve academic language, formatting, structure, grammar and referencing consistency.",
  },
];
    return(
        <>
          <footer className="bg-green-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/15">

            <div>
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap className="h-8 w-8 text-amber-300" />
                <span className="text-xl font-bold">
                  Atule<span className="text-amber-300">Writes</span>
                </span>
              </div>

              <p className="text-sm text-green-100 leading-relaxed">
                Supporting students through thoughtful academic guidance,
                research assistance and professional editing services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-amber-300 mb-5">
                Quick Links
              </h3>
              <div className="space-y-3 text-sm text-green-100">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block hover:text-amber-300 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-amber-300 mb-5">
                Our Services
              </h3>
              <div className="space-y-3 text-sm text-green-100">
                {services.slice(0, 5).map((service) => (
                  <a
                    key={service.title}
                    href="#services"
                    className="block hover:text-amber-300 transition-colors"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-amber-300 mb-5">
                Contact
              </h3>
              <div className="space-y-3 text-sm text-green-100">
                <p>info@yourcompany.com</p>
                <p>+91 XXXXX XXXXX</p>
                <p>India</p>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-green-200">
            <p>© {new Date().getFullYear()} AtuleWrites All rights reserved.</p>
            <p>Built for better academic journeys.</p>
          </div>
        </div>
      </footer>
        </>
    )
}