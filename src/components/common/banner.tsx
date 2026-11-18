import { motion } from "framer-motion";
import bannerImg from '/images/banner/thesis-banner.jpg'
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
export default function Banner({heading,para,btn}:{heading:string,para:string,btn:string}){
    return <>
          <section className="relative flex min-h-170] items-center overflow-hidden bg-green-950">

      {/* Background image */}
      <img
        src={bannerImg}
        alt="Student working on academic research"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-green-950/95 via-green-950/80 to-green-950/35" />

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
           {heading}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
          Everything You Need to Make Your 
            <span className="block text-yellow-400">
         Research Stronger.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-2xl text-base leading-8 text-green-50/85 sm:text-lg"
          >
           {para}
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
              {btn}
              <ArrowRight size={19} />
            </a>

           
          </motion.div>

        </div>
      </div>

      {/* Bottom decorative accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-green-700 via-yellow-400 to-green-700" />

    </section></>
}