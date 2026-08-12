import Buttons from "./UI/Buttons";
import { FiCode } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiZap } from "react-icons/fi";
import { TfiInfinite } from "react-icons/tfi";
import { motion } from "motion/react";


export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center bg-[#060606] py-15"
    >
      <div className="flex flex-col items-center">
        <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
        >
        <Buttons>pip stop</Buttons>
        </motion.div>
        <div className="flex items-center justify-center gap-5">
          <h2 className=" text-6xl font-bold  mt-6 bg-gradient-to-l from-cyan-400 to-white bg-clip-text text-transparent">
            About
          </h2>
          <h2 className=" text-6xl font-bold  mt-6 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
            Me
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-3 font-mono text-cyan-400/90 text-3xs "
         
        className="bg-[#0a0a0a] border border-cyan-800/80 rounded-xl overflow-hidden font-mono mt-12 max-w-[856px] w-full">
          {/* Title bar */}
          <div className="flex items-center gap-4 px-5 py-3 border-b border-cyan-800/30 bg-[#0d0d0d]">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-cyan-300 text-sm">~/about/developer.js</span>
          </div>

          {/* Code body */}
          <div className="px-7 py-6 text-sm leading-8">
            <p>
              <span className="text-pink-400">const</span>{" "}
              <span className="text-teal-300">developer</span>{" "}
              <span className="text-gray-300">= {"{"}</span>
            </p>
            <p className="pl-6">
              <span className="text-teal-300">name:</span>{" "}
              <span className="text-amber-500">"Nematov Shohjahon"</span>,
            </p>
            <p className="pl-6">
              <span className="text-teal-300">role:</span>{" "}
              <span className="text-amber-500">"Frontend Developer"</span>,
            </p>
            <p className="pl-6">
              <span className="text-teal-300">experience:</span>{" "}
              <span className="text-amber-500 font-bold">"1+ year"</span>,
            </p>
            <p className="pl-6">
              <span className="text-teal-300">passion:</span>{" "}
              <span className="text-amber-500">
                "Building seamless digital experiences"
              </span>
              ,
            </p>
            <p className="pl-6">
              <span className="text-teal-300">bio:</span>{" "}
              <span className="text-yellow-400">`</span>
            </p>
            <p className="pl-12 text-gray-100 ">
              I don't just build interfaces — I make them feel effortless. I
              work with React, Tailwind CSS, and modern frontend architecture to
              deliver both speed and polish. Clean, readable code isn't just a
              preference for me — it's a principle.
            </p>
            <p className="pl-6">
              <span className="text-yellow-400">`</span>,
            </p>
            <p className="pl-6">
              <span className="text-teal-300">specialties:</span>
              <span className="text-amber-500"> ["React"</span>,{" "}
              <span className="text-amber-500">"Node.js"</span>,{" "}
              <span className="text-amber-500">"Cloud Architecture"]</span>
            </p>
            <p className="text-gray-300">{"};"}</p>
          </div>
        </motion.div>

      </div>

      <div className="flex gap-4 -mt-5 flex-wrap ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center px-25 py-5 rounded-lg mt-12 border border-cyan-800/80  bg-[#0a0a0a]"
        >
          <FiCode className="text-cyan-400 text-4xl" />
          <h2 className="text-4xl font-mono text-white mt-4">50+</h2>
          <p className="text-2xs font-mono text-white">Projects</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center px-25 py-5 rounded-lg mt-12 border border-cyan-800/80  bg-[#0a0a0a]"
        >
          <FiUser className="text-cyan-400 text-4xl" />
          <h2 className="text-4xl font-mono text-white mt-4">12+</h2>
          <p className="text-2xs font-mono text-white">Clients</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center px-25 py-5 rounded-lg mt-12 border border-cyan-800/80  bg-[#0a0a0a]"
        >
          <FiZap className="text-cyan-400 text-4xl" />
          <TfiInfinite className="text-white  text-4xl mt-2"/>
          <p className="text-2xs font-mono text-white">Coffe Cups</p>
        </motion.div>
      </div>
    </section>
  );
}
