// src/config/motionConfig.js

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const sectionTitle = (small, title) => (
  <div className="mb-10 text-center">
    
    {/* 🔥 FAQs size increased */}
    <p className="text-lg sm:text-xl font-serif md:text-2xl font-semibold text-emerald-600 tracking-wide">
      {small}
    </p>

    {/* Main heading */}
    <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-black">
      {title}
    </h2>
  </div>
);
