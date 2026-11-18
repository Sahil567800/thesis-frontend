import Banner from '../components/common/banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { motion, stagger } from 'framer-motion'
import {
  Lightbulb,
  FileText,
  BookOpen,
  GraduationCap,
  Newspaper,
  ClipboardList,
  ChartNoAxesCombined,
  Presentation,
  SpellCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
export default function Services() {


  const services = [
    {
      icon: Lightbulb,
      title: "Research Topic Selection",
      description:
        "Discover a relevant, innovative and research-worthy topic aligned with your academic interests and research goals.",
    },
    {
      icon: FileText,
      title: "Research Proposal",
      description:
        "Develop a well-structured research proposal with clear objectives, research questions, problem statements and scope.",
    },
    {
      icon: BookOpen,
      title: "Thesis Writing",
      description:
        "Get structured guidance throughout your thesis, from chapter organization and literature review to academic presentation.",
    },
    {
      icon: GraduationCap,
      title: "Dissertation Writing",
      description:
        "Receive comprehensive academic guidance to organize, develop and refine your dissertation with clarity and consistency.",
    },
    {
      icon: Newspaper,
      title: "Research Paper & Article",
      description:
        "Prepare well-organized research papers and academic articles with appropriate structure, citations and scholarly presentation.",
    },
    {
      icon: ClipboardList,
      title: "Review Paper",
      description:
        "Synthesize existing literature, compare research findings and identify trends, gaps and emerging directions in your field.",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Data Analysis",
      description:
        "Interpret research data using appropriate statistical or qualitative techniques and present findings effectively.",
    },
    {
      icon: Presentation,
      title: "PPT",
      description:
        "Transform complex research findings into clear, engaging and professionally designed academic presentations.",
    },
    {
      icon: SpellCheck,
      title: "Proofreading",
      description:
        "Enhance grammar, academic tone, clarity, formatting and readability while preserving the original meaning of your work.",
    },
    {
      icon: ShieldCheck,
      title: "Plagiarism Reduction",
      description:
        "Improve originality through proper paraphrasing, academic language refinement, citation practices and responsible writing.",
    },
  ];
 const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.15),
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};
  return <>
    <Banner heading='Our Services' para='We offer comprehensive research and academic support services designed to help students, scholars, and researchers achieve excellence in their work' btn='About Us'></Banner>
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
          variants={containerVariants}
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
  </>
}