import Buttons from "./UI/Buttons";
import { FiBriefcase } from "react-icons/fi";
import { FaFigma } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";
import { motion } from "motion/react";

const iconVariants = {
  initial: {
    rotate: 0,
  },
  hover: {
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 0.4,
    },
  },
};

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center bg-[#060606] py-35">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className=""
        >
          <Buttons className="uppercase ">PROJECT TERMINALS</Buttons>
        </motion.div>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="flex items-center justify-center gap-5">
            <h2 className=" text-6xl font-bold  mt-6 bg-gradient-to-l from-cyan-400 to-white bg-clip-text text-transparent">
              Featured
            </h2>
            <h2 className=" text-6xl font-bold  mt-6 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              Work
            </h2>
          </div>
        </div>
        <p className=" mt-3 font-mono text-cyan-400/90 text-3xs ">
          {"// Selected projects from the journey"}
        </p>
        <div className="mt-20 flex  flex-col gap-9">
          <motion.div
            initial={{ opacity: 1, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className=" relative group border hover:border-cyan-400/90 duration-300  border-cyan-800/30 rounded-[5px] p-10 pb-24 flex gap-12"
          >
            <div>
              <span className="text-cyan-500/70 text-lg font-mono">
                &lt;PROJECT_01 /&gt;
              </span>
              <h3 className="text-white group-hover:text-cyan-400 duration-300 text-4xl font-bold mt-1">
                E-Commerce Platform
              </h3>
              <p className="text-cyan-400/80 text-[16px] mt-5">
                Full-stack marketplace with real-time inventory and payment
                processing
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {["React", "JavaScript", "Tailwind"].map((t) => (
                  <span
                    key={t}
                    className="text-cyan-400 text-xs border border-cyan-800/50 rounded-md px-3 py-1 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <motion.button
                initial="initial"
                whileHover="hover"
                className="flex flex-row items-center gap-2 text-xs text-cyan-200 tracking-wider cursor-pointer hover:bg-cyan-900/50 duration-200 font-mono border border-cyan-400/50 bg-[#091416] uppercase w-fit px-12 py-3.5 rounded-[10px]"
              >
                <motion.span
                  variants={{
                    initial: { rotate: 0 },
                    hover: { rotate: [0, 10, -10, 0] },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <FaFigma className="text-cyan-400 text-lg" />
                </motion.span>
                View Figma
              </motion.button>

              <motion.button
                initial="initial"
                whileHover="hover"
                className="flex flex-row items-center justify-center bg-cyan-400 text-black text-sm font-mono cursor-pointer font-medium px-4 py-3 rounded-lg hover:bg-cyan-500 duration-200"
              >
                <motion.span
                  variants={{
                    initial: { rotate: 0 },
                    hover: { rotate: [0, 10, -10, 0] },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <RiExternalLinkLine className="text-black text-lg" />
                </motion.span>
                Live Project
              </motion.button>
            </div>
            <div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[820px] h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className=" relative group border hover:border-cyan-400/90 duration-300 border-cyan-800/30 rounded-[5px] p-10 pb-24 flex gap-12"
          >
            <div>
              <span className="text-cyan-500/70 text-lg font-mono">
                &lt;PROJECT_02 /&gt;
              </span>
              <h3 className="text-white group-hover:text-cyan-400 duration-300 text-4xl font-bold mt-1">
                E-Commerce Platform
              </h3>
              <p className="text-cyan-400/80 text-[16px] mt-5">
                Full-stack marketplace with real-time inventory and payment
                processing
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {["React", "JavaScript", "Tailwind"].map((t) => (
                  <span
                    key={t}
                    className="text-cyan-400 text-xs border border-cyan-800/50 rounded-md px-3 py-1 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <motion.button
                initial="initial"
                whileHover="hover"
                className="flex flex-row items-center gap-2 text-xs text-cyan-200 tracking-wider cursor-pointer hover:bg-cyan-900/50 duration-200 font-mono border border-cyan-400/50 bg-[#091416] uppercase w-fit px-12 py-3.5 rounded-[10px]"
              >
                <motion.span
                  variants={{
                    initial: { rotate: 0 },
                    hover: { rotate: [0, 10, -10, 0] },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <FaFigma className="text-cyan-400 text-lg" />
                </motion.span>
                View Figma
              </motion.button>

              <motion.button
                initial="initial"
                whileHover="hover"
                className="flex flex-row items-center justify-center bg-cyan-400 text-black text-sm font-mono cursor-pointer font-medium px-4 py-3 rounded-lg hover:bg-cyan-500 duration-200"
              >
                <motion.span
                  variants={{
                    initial: { rotate: 0 },
                    hover: { rotate: [0, 10, -10, 0] },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <RiExternalLinkLine className="text-black text-lg" />
                </motion.span>
                Live Project
              </motion.button>
            </div>
            <div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[820px] h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className=" relative group border hover:border-cyan-400/90 duration-300 border-cyan-800/30 rounded-[5px] p-10 pb-24 flex gap-12"
          >
            <div>
              <span className="text-cyan-500/70 text-lg font-mono">
                &lt;PROJECT_03 /&gt;
              </span>
              <h3 className="text-white group-hover:text-cyan-400 duration-300 text-4xl font-bold mt-1">
                E-Commerce Platform
              </h3>
              <p className="text-cyan-400/80 text-[16px] mt-5">
                Full-stack marketplace with real-time inventory and payment
                processing
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {["React", "JavaScript", "Tailwind"].map((t) => (
                  <span
                    key={t}
                    className="text-cyan-400 text-xs border border-cyan-800/50 rounded-md px-3 py-1 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <motion.button
                initial="initial"
                whileHover="hover"
                className="flex flex-row items-center gap-2 text-xs text-cyan-200 tracking-wider cursor-pointer hover:bg-cyan-900/50 duration-200 font-mono border border-cyan-400/50 bg-[#091416] uppercase w-fit px-12 py-3.5 rounded-[10px]"
              >
                <motion.span
                  variants={{
                    initial: { rotate: 0 },
                    hover: { rotate: [0, 10, -10, 0] },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <FaFigma className="text-cyan-400 text-lg" />
                </motion.span>
                View Figma
              </motion.button>

              <motion.button
                initial="initial"
                whileHover="hover"
                className="flex flex-row items-center justify-center bg-cyan-400 text-black text-sm font-mono cursor-pointer font-medium px-4 py-3 rounded-lg hover:bg-cyan-500 duration-200"
              >
                <motion.span
                  variants={{
                    initial: { rotate: 0 },
                    hover: { rotate: [0, 10, -10, 0] },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <RiExternalLinkLine className="text-black text-lg" />
                </motion.span>
                Live Project
              </motion.button>
            </div>
            <div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[820px] h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
