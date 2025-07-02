'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const timelineItems = [
  {
    year: "February 2024",
    title: "The First Cake",
    desc: "During the final stretch of a law dissertation, Audette began as a passion project and quickly blossomed into a heartfelt business. Our focus: personalised cakes and handcrafted baked goods made to spark joy."
  },
  {
    year: "March 2024",
    title: "Brand is Born",
    desc: "With growing interest, we designed our logo, developed our visual identity, and introduced our first official menu."
  },
  {
    year: "July 2024",
    title: "Word Spreads",
    desc: "Friends told friends. Orders grew. So did our dream. We became part of more homes, events, and celebrations."
  },
  {
    year: "August 2024",
    title: "A Cake for Every Moment",
    desc: "From birthdays to weddings, Audette became a trusted part of your milestones. Each order fuels our passion for meaningful, beautiful creations."
  }
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
      className="relative pl-15 mb-10  space-y-1 "
    >
      <div className="absolute left-[11px] top-1.5 w-5 h-5  bg-primary border-4 border-white rounded-full shadow-md" />
      <h3 className="text-xl font-semibold text-primary">{year} – {title}</h3>
      <p className="text-pink-950 mb-6">{desc}</p>
    </motion.div>
  );
};

export default function AboutTimeline() {
  return (
   <section className=" py-20 px-4 md:px-8">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-2xl font-bold text-primary mb-6">From Oven to Heart</h2>
    <p className="text-pink-950 text-lg mb-12">
Welcome to Audette – where creativity meets sweetness.
Founded in February 2024 during the final stretch of a law dissertation, Audette began as a heartfelt passion project in Pointe aux Piments. 

</p>
<p className="text-pink-950 text-lg mb-12">
What started as a simple idea quickly grew into a local business known for its personalised cakes, cakesicles, strawberry-dipped delights, Napolitaines, and other handcrafted treats.
</p>
<p className="text-pink-950 text-lg mb-12">
 Every bake is a reflection of care, creativity, and a deep commitment to customer happiness. Whether it's a birthday, a milestone, or a moment of indulgence, Audette is here to make your memories extra special – one beautiful dessert at a time.   
</p>
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute top-0 left-5 w-1 h-full bg-primary/50 z-0" />

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
