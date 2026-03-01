"use client";

import { contact } from "@/lib/data/profile";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
    } catch {
      /*
        fallback
      */
      const textarea = document.createElement("textarea");

      textarea.value = contact.email;

      document.body.appendChild(textarea);

      textarea.select();

      document.execCommand("copy");

      document.body.removeChild(textarea);
    }

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

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
          {/* availability badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 text-sm border rounded-full bg-background/40 mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />

            {contact.availability}
          </motion.div>

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
            className="text-muted-foreground mt-4 leading-relaxed"
          >
            {contact.description}
          </motion.p>

          {/* email button */}
          <motion.div variants={fadeUp} className="mt-8">
            <Button size="lg" asChild>
              <a href={`mailto:${contact.email}`}>Email Me</a>
            </Button>
          </motion.div>

          {/* email row with copy */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3 mt-6 flex-wrap"
          >
            <span className="text-sm text-muted-foreground font-mono">
              {contact.email}
            </span>

            <motion.button
              onClick={copyEmail}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="relative p-2 rounded-md border bg-background/50 hover:bg-primary/10 transition"
              aria-label="Copy email"
            >
              {/* copy icon */}
              <motion.div
                animate={{
                  opacity: copied ? 0 : 1,
                  scale: copied ? 0.5 : 1,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Copy size={16} />
              </motion.div>

              {/* check icon */}
              <motion.div
                animate={{
                  opacity: copied ? 1 : 0,
                  scale: copied ? 1 : 0.5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="flex items-center justify-center"
              >
                <Check size={16} className="text-green-500" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* socials */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center gap-6 mt-8 flex-wrap"
          >
            {contact.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition text-sm"
              >
                {social.name}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
