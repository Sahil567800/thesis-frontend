
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  FileText,
  Search,
  ChartNoAxesCombined,
  ClipboardCheck,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Users,
  Award,
  Lightbulb,
  Quote,
  Menu,
  X,
  PenLine,
  BookMarked,
  MessageSquareText,
} from "lucide-react";
import { useState } from "react";

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

const benefits = [
  "Personalized one-to-one academic guidance",
  "Research-based approach and credible sources",
  "Originality and proper citation practices",
  "Structured guidance throughout your project",
  "Clear communication and regular progress updates",
  "Support aligned with your university guidelines",
];

const steps = [
  {
    number: "01",
    title: "Share Your Requirements",
    description:
      "Tell us about your subject, research topic, university guidelines and academic requirements.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Get a Research Plan",
    description:
      "We help you understand the scope, structure, milestones and approach for your research.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Work Through Your Research",
    description:
      "Receive structured guidance, feedback and editing support as you develop your work.",
    icon: PenLine,
  },
  {
    number: "04",
    title: "Review & Refine",
    description:
      "Review the final formatting, citations, language and presentation against your requirements.",
    icon: GraduationCap,
  },
];

const stats = [
  { icon: Users, title: "Personalized", label: "One-to-one guidance" },
  { icon: BookOpen, title: "Research-led", label: "Academic approach" },
  { icon: ShieldCheck, title: "Originality", label: "Responsible research" },
  { icon: Clock, title: "Flexible", label: "Deadline-aware support" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
        

   
  

      {/* NAVBAR */}
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
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button size='lg'className="bg-primary w-40 hover:bg-primary/90">
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
            <Button  className="w-full">
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Get Started
              </a>
            </Button>
          </div>
        )}
      </header>
         <section className="relative flex min-h-[680px] items-center overflow-hidden bg-green-950">

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2000"
        alt="Student working on academic research"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/80 to-green-950/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-white/10 px-4 py-2 text-sm text-yellow-300 backdrop-blur-md"
          >
            <BookOpen size={16} />
            Your Academic Success Starts Here
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Turn Your Research
            <span className="block text-yellow-400">
              Into Excellence.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-2xl text-base leading-8 text-green-50/85 sm:text-lg"
          >
            Get expert academic guidance for your thesis, dissertation,
            research proposal, and literature review. We help you approach
            every academic milestone with clarity and confidence.
          </motion.p>

          {/* Features */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">
            {[
              "Expert Research Guidance",
              "Structured Academic Support",
              "Quality-Focused Editing",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-yellow-400" />
                {item}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="inline-flex items-center gap-3 rounded-lg bg-yellow-400 px-7 py-4 font-semibold text-green-950 transition-all hover:bg-yellow-300 hover:shadow-lg"
            >
              Explore Our Services
              <ArrowRight size={19} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-white/60 px-7 py-4 font-semibold text-white transition-all hover:bg-white hover:text-green-950"
            >
              Talk to an Expert
            </a>
          </motion.div>

        </div>
      </div>

      {/* Bottom decorative accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-green-700 via-yellow-400 to-green-700" />

    </section>
      {/* HERO SECTION */}
      <section id="home" className="relative pt-20 pb-24 lg:pt-28 lg:pb-32">

        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-amber-50/50" />

        <div className="absolute top-20 right-0 w-80 h-80 bg-green-100/50 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-primary px-4 py-2 text-sm font-medium mb-7">
                <BookMarked className="h-4 w-4" />
                Your Partner in Academic Research
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.12] mb-7">
                Turn Your Research Ideas Into
                <span className="text-primary"> Academic Excellence.</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-9">
                Navigate your academic journey with confidence. Get personalized
                guidance, research support and professional editing assistance
                at every stage of your thesis and dissertation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 h-12 px-7"
                >
                  <a href="#contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
              
                  size="lg"
                  variant="outline"
                  className="h-12 px-7 border-primary text-primary hover:bg-green-50"
                >
                  <a href="#services">Explore Services</a>
                </Button>
              </div>

              <div className="mt-9 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["S", "R", "A", "M"].map((letter, index) => (
                    <div
                      key={index}
                      className="h-10 w-10 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-primary font-semibold text-sm"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Guidance that supports your journey
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Personalized academic support
                  </p>
                </div>
              </div>
            </motion.div>

            {/* HERO VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-green-800 to-green-950 rounded-[2rem] p-8 lg:p-12 shadow-2xl overflow-hidden">

                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="flex justify-between items-center mb-12">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <GraduationCap className="h-9 w-9 text-amber-300" />
                    </div>
                    <span className="text-xs tracking-widest text-green-100 uppercase">
                      Research Excellence
                    </span>
                  </div>

                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Research Framework
                      </span>
                      <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        Academic
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Your Research Journey
                    </h3>

                    <p className="text-sm text-muted-foreground mb-7">
                      A structured approach to academic research.
                    </p>

                    {[
                      "Topic & Research Question",
                      "Literature Review",
                      "Research Methodology",
                      "Analysis & Interpretation",
                      "Final Review & Formatting",
                    ].map((item, index) => (
                      <div key={item} className="flex items-center gap-3 mb-5 last:mb-0">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {item}
                        </span>
                        <div className="ml-auto text-xs text-gold font-semibold">
                          0{index + 1}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-center gap-2 text-green-100">
                    <Award className="h-5 w-5 text-amber-300" />
                    <span className="text-sm">
                      Research with clarity and confidence
                    </span>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-5 -left-5 bg-white shadow-xl border border-green-100 rounded-xl p-4 hidden sm:flex items-center gap-3"
              >
                <div className="bg-amber-100 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-yellow-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Research Focused</p>
                  <p className="text-xs text-muted-foreground">
                    Structured guidance
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -top-5 -right-5 bg-white shadow-xl border border-green-100 rounded-xl p-4 hidden sm:flex items-center gap-3"
              >
                <ShieldCheck className="h-7 w-7 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Originality First</p>
                  <p className="text-xs text-muted-foreground">
                    Responsible research
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-12 bg-green-50/80 border-y border-green-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-white shadow-sm p-3 rounded-xl mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              What We Offer
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-5">
              Complete Academic Research
              <span className="text-primary"> Support</span>
            </h2>

            <p className="text-muted-foreground text-lg">
              From your first research idea to the final review, get the
              academic guidance you need to move forward confidently.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} variants={fadeInUp}>
                  <Card className="h-full group border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                        <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                      </div>

                      <CardTitle className="text-xl">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-5 hover:text-yellow-700"
                      >
                        Learn More <ArrowRight className="h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ABOUT / WHY CHOOSE US */}
      <section id="about" className="py-24 bg-green-50/60">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-primary rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-64 h-64 bg-green-400/20 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="bg-white/10 rounded-xl w-fit p-4 mb-8">
                    <BookMarked className="h-12 w-12 text-amber-300" />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-5">
                    Every Great Research Project Begins With a Great Question.
                  </h3>

                  <p className="text-green-100 leading-relaxed">
                    Academic research is a journey of discovery. We help
                    students understand the process, develop their ideas
                    and present their research with clarity.
                  </p>

                  <div className="mt-10 border-t border-white/20 pt-7">
                    <p className="text-amber-300 font-semibold">
                      Learn. Research. Grow.
                    </p>
                    <p className="text-sm text-green-100 mt-1">
                      Your academic journey, supported at every step.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm text-primary font-semibold uppercase tracking-widest">
                Why Choose Us
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                More Than Just Academic Assistance
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe quality research comes from a clear understanding
                of the subject, strong research practices and continuous
                improvement. Our approach focuses on helping you build
                confidence in your academic work.
              </p>

              <div className="space-y-5">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <Button size='lg'className="mt-9 bg-primary w-45 hover:bg-primary/90">
                  Talk to Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              How It Works
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-5">
              Your Research Journey,
              <span className="text-primary"> Made Simpler</span>
            </h2>

            <p className="text-muted-foreground text-lg">
              A transparent and structured process designed around your
              academic requirements.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number} variants={fadeInUp}>
                  <Card className="h-full relative overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-7">
                      <div className="flex items-center justify-between mb-7">
                        <div className="bg-green-100 p-3 rounded-xl">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <span className="text-3xl font-bold text-amber-400/60">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold mb-3">
                        {step.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL PLACEHOLDER */}
      <section className="py-20 bg-green-50/60">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <Quote className="h-12 w-12 text-gold mx-auto mb-6" />

          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Student Experiences
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-5">
            Your Academic Journey Matters
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Every research journey is different. Our goal is to make the
            process more understandable, organized and manageable through
            personalized academic guidance.
          </p>

          <p className="text-sm text-muted-foreground mt-6">
            Genuine student testimonials can be added here as your company
            collects verified feedback.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="bg-primary rounded-3xl px-7 py-16 lg:px-16 text-center relative overflow-hidden">

            <div className="absolute top-0 left-0 w-64 h-64 bg-green-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />

            <div className="relative max-w-3xl mx-auto">
              <GraduationCap className="h-14 w-14 text-amber-300 mx-auto mb-6" />

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Take the Next Step in Your Research?
              </h2>

              <p className="text-green-100 text-lg mb-9">
                Share your academic requirements with us and discover
                how personalized research guidance can help you move forward.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
              
                  size="lg"
                  className="bg-amber-400 text-green-950 hover:bg-amber-300 h-12 px-8"
                >
                  <a href="mailto:info@yourcompany.com">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
             
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white hover:text-primary h-12 px-8"
                >
                  <a href="#services">Explore Services</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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

    </div>
  );
}
