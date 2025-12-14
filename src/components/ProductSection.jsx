// src/components/ProductSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitle } from "../config/motionConfig";

const ProductSection = () => {
  return (
    <section
      id="product"
      className="py-16 md:py-20 border-b border-slate-200 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          custom={0}
        >
          {sectionTitle("Our Product", "What Does Choosing a Product Do?")}
          <p className="text-sm text-slate-700 mb-3">
           हमारे हर्बल उत्पाद प्राकृतिक जड़ी-बूटियों से बनाए गए हैं, जो शरीर को स्वस्थ और संतुलित रखने में सहायता करते हैं। इनमें किसी भी प्रकार के हानिकारक रसायनों का उपयोग नहीं किया जाता, जिससे ये उपयोग के लिए सुरक्षित होते हैं। नियमित सेवन से ऊर्जा बढ़ती है और शरीर में ताजगी बनी रहती है। ये उत्पाद पारंपरिक आयुर्वेदिक ज्ञान और आधुनिक गुणवत्ता मानकों का सही मिश्रण हैं, जो रोज़मर्रा की सेहत के लिए एक प्राकृतिक और भरोसेमंद विकल्प प्रदान करते हैं।
          </p>
          {/* <p className="text-sm text-slate-700 mb-4">
            यदि आपका पहला प्रोडक्ट एंटी-रेडिएशन चिप है, तो आपको लोगों को इस तरह
            समझाना चाहिए कि यह उनके और उनके परिवार के लिए कैसे फायदेमंद हो सकता
            है — जैसे कि{" "}
            <span className="font-semibold">
              मोबाइल, वाई-फाई और गैजेट्स से निकलने वाली हानिकारक रेडिएशन को
              कम करना।
            </span>
          </p> */}
          <button className="px-5 py-2.5 text-xs rounded-full border border-emerald-300 text-emerald-700 hover:bg-emerald-50 transition bg-white">
            Read More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-3xl bg-white border border-emerald-200 p-6 shadow-sm"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-3">
            Flagship Product
          </p>
          <h4 className="text-sm font-semibold text-slate-900 mb-2">
            Herbal Products
          </h4>
          <ul className="space-y-2 text-xs text-slate-700 mb-4">
            <li>• Our herbal products are made from carefully selected natural ingredients to support overall health and wellness..</li>
            <li>•They are free from harsh chemicals and are inspired by traditional herbal knowledge..</li>
            <li>• Regular use helps promote balance, energy, and a healthier lifestyle naturally.</li>
          </ul>
          <div className="h-28 rounded-2xl bg-gradient-to-tr from-emerald-200 via-cyan-200 to-blue-300 flex items-center justify-center text-xs font-semibold text-slate-900">
            Product Image Placeholder
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
