// src/components/ProjectsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitle } from "../config/motionConfig";

const projects = [
  {
    title: "Mobile Extensions Project",
    desc: "Helping people manage screen time, digital well-being and gadget usage.",
  },
  {
    title: "Fashion E-Commerce",
    desc: "Clothing and lifestyle project built around online shopping trends.",
  },
  {
    title: "Electronics Project",
    desc: "Business built around consumer electronics and smart gadgets.",
  },
  {
    title: "Inspiring Project 4",
    desc: "Future-focused initiative designed to empower more families.",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-20 border-b border-slate-200 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        {sectionTitle("Our Projects", "Explore Our Latest Projects")}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -4 }}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm"
            >
              <div className="h-40 bg-gradient-to-tr from-emerald-200 via-cyan-200 to-blue-300" />
              <div className="p-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-700 mb-3">{project.desc}</p>
                <button className="text-xs text-emerald-600 flex items-center gap-1 hover:text-emerald-500">
                  Read More <span className="text-base leading-none">↗</span>
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
