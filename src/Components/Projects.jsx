import Buttons from "./UI/Buttons";
import { FaFigma } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";
import { motion } from "motion/react";

const projects = [
  {
    number: "PROJECT_01",
    title: "E-Commerce Platform",
    description:
      "Full-stack marketplace with real-time inventory and payment processing",
    tags: ["React", "JavaScript", "Tailwind"],
    direction: -50,
  },
  {
    number: "PROJECT_02",
    title: "E-Commerce Platform",
    description:
      "Full-stack marketplace with real-time inventory and payment processing",
    tags: ["React", "JavaScript", "Tailwind"],
    direction: 50,
  },
  {
    number: "PROJECT_03",
    title: "E-Commerce Platform",
    description:
      "Full-stack marketplace with real-time inventory and payment processing",
    tags: ["React", "JavaScript", "Tailwind"],
    direction: -50,
  },
];

export default function Projects() {
  return (
    <section className="w-full bg-[#060606] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-35">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Buttons className="uppercase text-xs sm:text-sm">
            PROJECT TERMINALS
          </Buttons>
        </motion.div>

        {/* Title */}
        <div className="mt-8 flex w-full items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5">
            <h2 className="mt-4 text-4xl font-bold bg-gradient-to-l from-cyan-400 to-white bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
              Featured
            </h2>

            <h2 className="mt-4 text-4xl font-bold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
              Work
            </h2>
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-3 text-center font-mono text-xs text-cyan-400/90 sm:text-sm">
          {"// Selected projects from the journey"}
        </p>

        {/* Projects */}
        <div className="mt-14 flex w-full flex-col gap-7 sm:mt-16 sm:gap-8 lg:mt-20 lg:gap-9">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{
                opacity: 0,
                x: project.direction,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="
                group
                relative
                w-full
                overflow-hidden
                rounded-md
                border
                border-cyan-800/30
                p-5
                pb-20
                transition-all
                duration-300
                hover:border-cyan-400/90
                sm:p-7
                sm:pb-20
                lg:p-10
                lg:pb-24
              "
            >
              {/* Content + Buttons */}
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">

                {/* Project information */}
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-sm text-cyan-500/70 sm:text-base lg:text-lg">
                    &lt;{project.number} /&gt;
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400 sm:text-3xl lg:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-[600px] text-sm leading-6 text-cyan-400/80 sm:mt-5 sm:text-base">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-md
                          border
                          border-cyan-800/50
                          px-3
                          py-1
                          font-mono
                          text-xs
                          text-cyan-400
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col lg:gap-5">

                  {/* Figma */}
                  <motion.button
                    initial="initial"
                    whileHover="hover"
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-[10px]
                      border
                      border-cyan-400/50
                      bg-[#091416]
                      px-5
                      py-3.5
                      font-mono
                      text-xs
                      uppercase
                      tracking-wider
                      text-cyan-200
                      transition-colors
                      duration-200
                      hover:bg-cyan-900/50
                      sm:w-auto
                      sm:px-8
                      lg:px-10
                    "
                  >
                    <motion.span
                      variants={{
                        initial: { rotate: 0 },
                        hover: { rotate: [0, 10, -10, 0] },
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <FaFigma className="text-lg text-cyan-400" />
                    </motion.span>

                    View Figma
                  </motion.button>

                  {/* Live Project */}
                  <motion.button
                    initial="initial"
                    whileHover="hover"
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-cyan-400
                      px-5
                      py-3
                      font-mono
                      text-sm
                      font-medium
                      text-black
                      transition-colors
                      duration-200
                      hover:bg-cyan-500
                      sm:w-auto
                      lg:px-6
                    "
                  >
                    <motion.span
                      variants={{
                        initial: { rotate: 0 },
                        hover: { rotate: [0, 10, -10, 0] },
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <RiExternalLinkLine className="text-lg text-black" />
                    </motion.span>

                    Live Project
                  </motion.button>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-7 left-1/2 h-[2px] w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent sm:w-[80%] lg:bottom-8 lg:w-[820px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}