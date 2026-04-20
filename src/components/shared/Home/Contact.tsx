"use client";

import { contact } from "@/lib/data/profile";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motion";

import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* animated glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-primary/20 blur-[140px] rounded-full -z-10"
      />

      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="border rounded-2xl p-10 bg-muted/30 backdrop-blur text-center relative"
        >
          {/* title */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold"
          >
            {contact.title}
          </motion.h2>

          {/* description */}
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground mt-4 leading-relaxed text-left"
          >
            {contact.description}
          </motion.p>

          {/* email row with copy */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3 mt-6 flex-wrap"
          >
            <ContactForm />
          </motion.div>

          {/* socials */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center gap-6 mt-8 flex-wrap"
          >
            {contact.socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition text-sm"
                >
                  <Icon />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
