// src/components/TeamSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitle } from "../config/motionConfig";

const team = [
  { name: "XYZ", role: "****" },
  { name: "XYZ", role: "****" },
  { name: "XYZ", role: "****" },
  // { name: "Mr. Amresh Kumar Pal", role: "Post-Basic | From Mirzapur" },
  // { name: "Mr. Raj Bijendra Yadav (Biltu)", role: "Post-Basic | From Bihar" },
  // { name: "Mr. Gopal Sharan", role: "Post-Basic | From Bihar" },
  // { name: "Mr. Saroj Kumar", role: "Post-Basic | From Bihar" },
  // { name: "Mr. Rajkishor Prasad", role: "Post-Basic | From Bihar" },
];

const TeamSection = () => {
  return (
    <section
      id="team"
      className="py-16 md:py-20 border-b  border-slate-200 bg-white"
    >
      <div className="max-w-6xl  mx-auto px-4 ">
        {sectionTitle("Achievers Club","")}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 "
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-3xl bg-white border border-slate-200 p-4 flex flex-col items-center gap-2 shadow-sm"
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr  from-emerald-400 via-cyan-400 to-blue-500 flex items-center justify-center text-xs font-semibold text-white">
                Photo
              </div>
              <p className="text-sm font-semibold text-slate-900 text-center">
                {member.name}
              </p>
              <p className="text-[11px] text-slate-600 text-center">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
