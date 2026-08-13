import Buttons from "./UI/Buttons";
import { FaCode } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "motion/react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center bg-[#060606] py-20 sm:py-35 px-4"
    >
      {/* BUTTON */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Buttons className="uppercase">Tech garage</Buttons>
      </motion.div>

      {/* TITLE */}
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex items-center justify-center gap-2 sm:gap-5">
          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              mt-6
              bg-gradient-to-l
              from-cyan-400
              to-white
              bg-clip-text
              text-transparent
            "
          >
            Tech
          </h2>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              mt-6
              bg-gradient-to-r
              from-cyan-400
              to-white
              bg-clip-text
              text-transparent
            "
          >
            Stack
          </h2>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-3 font-mono text-cyan-400/90 text-xs sm:text-sm">
        {"// Tools for the journey"}
      </p>

      {/* CARDS */}
      <div className="mt-16  sm:mt-20 flex flex-wrap gap-6 sm:gap-10 flex-col:gap-12 items-center justify-center max-w-6xl">
        {/* HTML */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="
            relative
            w-[145px]
            h-[230px]
            sm:w-[180px]
            sm:h-[260px]
            border
            border-[#E34F26]
            rounded-md
            hover:shadow-[0_0_40px_#E34F26]
            duration-300
            bg-[#080808]
            flex
            flex-col
            items-center
            pt-6
            sm:pt-8
          "
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 border border-[#E34F26] rounded-md flex items-center justify-center">
            <FaCode className="text-[#E34F26] text-3xl sm:text-4xl" />
          </div>

          <h2 className="mt-6 sm:mt-8 text-[#E34F26] text-lg sm:text-2xl font-bold tracking-widest">
            HTML5
          </h2>

          <div className="w-10 sm:w-12 h-[2px] bg-[#E34F26] mt-6 sm:mt-8"></div>

          <div className="absolute -bottom-10 sm:-bottom-12 w-[4px] h-10 sm:h-12 bg-[#E34F26]"></div>
        </motion.div>

        {/* CSS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            relative
            w-[145px]
            h-[230px]
            sm:w-[180px]
            sm:h-[260px]
            border
            border-[#1572B6]
            rounded-md
            hover:shadow-[0_0_40px_#1572B6]
            duration-300
            bg-[#080808]
            flex
            flex-col
            items-center
            pt-6
            sm:pt-8
          "
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 border border-[#1572B6] rounded-md flex items-center justify-center">
            <FaDatabase className="text-[#1572B6] text-3xl sm:text-4xl" />
          </div>

          <h2 className="mt-6 sm:mt-8 text-[#1572B6] text-lg sm:text-2xl font-bold tracking-widest">
            CSS3
          </h2>

          <div className="w-10 sm:w-12 h-[2px] bg-[#1572B6] mt-6 sm:mt-8"></div>

          <div className="absolute -bottom-10 sm:-bottom-12 w-[4px] h-10 sm:h-12 bg-[#1572B6]"></div>
        </motion.div>

        {/* JAVASCRIPT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            relative
            w-[145px]
            h-[230px]
            sm:w-[180px]
            sm:h-[260px]
            border
            border-[#F7DF1E]
            rounded-md
            hover:shadow-[0_0_40px_#F7DF1E]
            duration-300
            bg-[#080808]
            flex
            flex-col
            items-center
            pt-6
            sm:pt-8
          "
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 border border-[#F7DF1E] rounded-md flex items-center justify-center">
            <FaCode className="text-[#F7DF1E] text-3xl sm:text-4xl" />
          </div>

          <h2 className="mt-6 sm:mt-8 text-[#F7DF1E] text-lg sm:text-2xl font-bold tracking-widest">
            JavaScript
          </h2>

          <div className="w-10 sm:w-12 h-[2px] bg-[#F7DF1E] mt-6 sm:mt-8"></div>

          <div className="absolute -bottom-10 sm:-bottom-12 w-[4px] h-10 sm:h-12 bg-[#F7DF1E]"></div>
        </motion.div>

        {/* REACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            relative
            w-[145px]
            h-[230px]
            sm:w-[180px]
            sm:h-[260px]
            border
            border-[#61DAFB]
            rounded-md
            hover:shadow-[0_0_40px_#61DAFB]
            duration-300
            bg-[#080808]
            flex
            flex-col
            items-center
            pt-6
            sm:pt-8
          "
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 border border-[#61DAFB] rounded-md flex items-center justify-center">
            <FaCloud className="text-[#61DAFB] text-3xl sm:text-4xl" />
          </div>

          <h2 className="mt-6 sm:mt-8 text-[#61DAFB] text-lg sm:text-2xl font-bold tracking-widest">
            React
          </h2>

          <div className="w-10 sm:w-12 h-[2px] bg-[#61DAFB] mt-6 sm:mt-8"></div>

          <div className="absolute -bottom-10 sm:-bottom-12 w-[4px] h-10 sm:h-12 bg-[#61DAFB]"></div>
        </motion.div>

        {/* TAILWIND */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative
            w-[145px]
            h-[230px]
            sm:w-[180px]
            sm:h-[260px]
            border
            border-[#06B6D4]
            rounded-md
            hover:shadow-[0_0_40px_#06B6D4]
            duration-300
            bg-[#080808]
            flex
            flex-col
            items-center
            pt-6
            sm:pt-8
          "
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 border border-[#06B6D4] rounded-md flex items-center justify-center">
            <SiTailwindcss className="text-[#06B6D4] text-3xl sm:text-4xl" />
          </div>

          <h2 className="mt-6 sm:mt-8 text-[#06B6D4] text-lg sm:text-2xl font-bold tracking-widest text-center">
            TailwindCss
          </h2>

          <div className="w-10 sm:w-12 h-[2px] bg-[#06B6D4] mt-6 sm:mt-8"></div>

          <div className="absolute -bottom-10 sm:-bottom-12 w-[4px] h-10 sm:h-12 bg-[#06B6D4]"></div>
        </motion.div>
      </div>
    </section>
  );
}
