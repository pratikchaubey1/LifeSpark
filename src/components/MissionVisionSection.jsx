// src/components/MissionVisionSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../config/motionConfig";

const MissionVisionSection = () => {
  return (
    <section className="py-16 md:py-20 border-b border-slate-200 bg_white bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm"
        >
          <p className="text-4xl uppercase tracking-[0.25em] font-bold text-emerald-600 mb-2">
            Our Mission
          </p>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Empowering people through digital education & business.
          </h3>
          <p className="text-sm text-slate-700 mb-3">
            हमारा मशन है क अधक से अधक युवाओं को नौकरी, े नग और earning
            opportunities देकर उनक आथक त मजबूत क जाए। हम मानते ह क एक व्य को
            रोजगार देना मतलब उसके पूरे परवार को सुर त भवष्य देना
          </p>
          <p className="text-sm text-slate-700 mb-4">
            LifeSpark Associate तकनीक, सेवाओं और support के माध्यम से लोग क
            रोज़मरा क समस्याओं को आसान बनाने के लए काम करता है। हम हर समस्या को
            एक नई शुरुआत और नए समाधान का मौका मानते ह
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Practical business training</li>
            <li>• Simple plans for new members</li>
            <li>• Focus on long-term, ethical growth</li>
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.15}
          className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm"
        >
          <p className="text-4xl uppercase font-bold tracking-[0.25em] text-indigo-600 mb-2">
            Our Vision
          </p>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            A trusted name in every Indian household.
          </h3>
          <p className="text-sm text-slate-700 mb-3">
            हमारा विज़न है कि हम व्यक्तिगत देखभाल, स्वास्थ्य और वेलनेस के
            क्षेत्र में ऐसे प्रोडक्ट्स दें जो बदलती ज़रूरतों के साथ तालमेल
            बिठाएँ।
          </p>
          <p className="text-sm text-slate-700 mb-4">
            डिजिटल ट्रांसफ़ॉर्मेशन की ताकत का उपयोग करते हुए, हम अपने पार्टनर्स
            और ग्राहकों दोनों के लिए समृद्ध भविष्य बनाना चाहते हैं।
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• लोग को रोजगार देकर उनके परवार म खुशहाली लाए</li>
            <li>•तकनीक और सेवाओं के माध्यम से जीवन क चुनौतय को सरल बनाए</li>
            <li>•युवाओं को स्कल सखाकर भवष्य के leaders तैयार कर</li>
            <li>•समाज म सम्मान, अवसर और व ास का माहौल बनाए</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
