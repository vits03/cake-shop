'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const timelineItems = [
  {
    year: '2018',
    title: 'The First Cake',
    desc: 'It all started with a birthday cake baked in our tiny kitchen.',
  },
  {
    year: '2019',
    title: 'Word Spreads',
    desc: 'Friends told friends. Orders grew. So did our dream.',
  },
  {
    year: '2021',
    title: 'Brand is Born',
    desc: 'We created a menu, a logo, and an identity all our own.',
  },
  {
    year: '2024',
    title: 'A Cake for Every Moment',
    desc: 'From birthdays to weddings—we’re now part of your special days.',
  },
];

const TimelineItem = ({ year, title, desc }:{year:string,title:string,desc:string}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="relative pl-15 mb-0  space-y-0 "
    >
      <div className="absolute left-[11px] top-1.5 w-5 h-5  bg-pink-500 border-4 border-white rounded-full shadow-md" />
      <h3 className="text-xl font-semibold text-primary">{year} – {title}</h3>
      <p className="text-pink-200 mb-6">{desc}</p>
    </motion.div>
  );
};

export default function AboutTimeline() {
  return (
   <section className="bg-rimary py-20 px-4 md:px-8">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-primary mb-6">From Oven to Heart</h2>
    <p className="text-pink-200 text-lg mb-12">
      Our journey through sugar, smiles, and sprinkles.
    </p>

    <div className="relative">
      {/* Vertical line */}
      <div className="absolute top-0 left-5 w-1 h-full bg-pink-300 z-0" />

      {/* Timeline items */}
      <div className="space-y-20 text-left relative z-10">
        {timelineItems.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  </div>
</section>

  );
}
