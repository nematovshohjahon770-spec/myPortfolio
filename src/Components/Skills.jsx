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
      className="flex flex-col  items-center justify-center bg-[#060606] py-35"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className=""
      >
        <Buttons className="uppercase ">Tech garage</Buttons>
      </motion.div>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex items-center justify-center gap-5">
          <h2 className=" text-6xl font-bold  mt-6 bg-gradient-to-l from-cyan-400 to-white bg-clip-text text-transparent">
            Tech
          </h2>
          <h2 className=" text-6xl font-bold  mt-6 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
            Stack
          </h2>
        </div>
      </div>
      <p className=" mt-3 font-mono text-cyan-400/90 text-3xs ">
        {"// Tools for the journey"}
      </p>

      <div className="mt-20 flex flex-wrap gap-10 items-center justify-center">
        < motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-[180px] h-[260px] border border-[#E34F26] rounded-md  hover:shadow-[0_0_40px_#E34F26] duration-300 bg-[#080808] flex flex-col items-center pt-8">
          <div className="w-20 h-20 border border-[#E34F26] rounded-md flex items-center justify-center">
            <FaCode className="text-[#E34F26] text-4xl" />
          </div>

          <h2 className="mt-8 text-[#E34F26] text-2xl font-bold tracking-widest">
            HTML5
          </h2>

          <div className="w-12 h-[2px] bg-[#E34F26] mt-8"></div>

          <div className="absolute -bottom-12 w-[4px] h-12 bg-[#E34F26]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-[180px] h-[260px] border border-[#1572B6] rounded-md  hover:shadow-[0_0_40px_#1572B6] duration-300 bg-[#080808] flex flex-col items-center pt-8"
        >
          <div className="w-20 h-20 border border-[#1572B6] rounded-md flex items-center justify-center">
            <FaDatabase className="text-[#1572B6] text-4xl" />
          </div>

          <h2 className="mt-8 text-[#1572B6] text-2xl font-bold tracking-widest">
            CSS3
          </h2>

          <div className="w-12 h-[2px] bg-[#1572B6] mt-8"></div>

          <div className="absolute -bottom-12 w-[4px] h-12 bg-[#1572B6]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-[180px] h-[260px] border border-[#F7DF1E] rounded-md  hover:shadow-[0_0_40px_#F7DF1E] duration-300 bg-[#080808] flex flex-col items-center pt-8"
        >
          <div className="w-20 h-20 border border-[#F7DF1E] rounded-md flex items-center justify-center">
            <FaCode className="text-[#F7DF1E] text-4xl" />
          </div>

          <h2 className="mt-8 text-[#F7DF1E] text-2xl font-bold tracking-widest">
            JavaScript
          </h2>

          <div className="w-12 h-[2px] bg-[#F7DF1E] mt-8"></div>

          <div className="absolute -bottom-12 w-[4px] h-12 bg-[#F7DF1E]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-[180px] h-[260px] border border-[#61DAFB] rounded-md  hover:shadow-[0_0_40px_#61DAFB] duration-300 bg-[#080808] flex flex-col items-center pt-8"
        >
          <div className="w-20 h-20 border border-[#61DAFB] rounded-md flex items-center justify-center">
            <FaCloud className="text-[#61DAFB] text-4xl" />
          </div>

          <h2 className="mt-8 text-[#61DAFB] text-2xl font-bold tracking-widest">
            React
          </h2>

          <div className="w-12 h-[2px] bg-[#61DAFB] mt-8"></div>

          <div className="absolute -bottom-12 w-[4px] h-12 bg-[#61DAFB]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-[180px] h-[260px] border border-[#06B6D4] rounded-md  hover:shadow-[0_0_40px_#06B6D4] duration-300 bg-[#080808] flex flex-col items-center pt-8"
        >
          <div className="w-20 h-20 border border-[#06B6D4] rounded-md flex items-center justify-center">
            <SiTailwindcss className="text-[#06B6D4] text-4xl" />
          </div>

          <h2 className="mt-8 text-[#06B6D4] text-2xl font-bold tracking-widest">
            TailwindCss
          </h2>

          <div className="w-12 h-[2px] bg-[#06B6D4] mt-8"></div>

          <div className="absolute -bottom-12 w-[4px] h-12 bg-[#06B6D4]"></div>
        </motion.div>
      </div>
    </section>
  );
}
