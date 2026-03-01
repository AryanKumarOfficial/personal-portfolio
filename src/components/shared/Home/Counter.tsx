"use client";

import {
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  useMotionValueEvent,
} from "motion/react";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
};

export default function Counter({ value, suffix = "" }: Props) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  const motionValue = useMotionValue(0);

  /*
   slower spring for premium feel
  */
  const spring = useSpring(motionValue, {
    stiffness: 40,
    damping: 20,
    mass: 1,
  });

  const rounded = useTransform(spring, (latest) => Math.floor(latest));

  const [display, setDisplay] = useState(0);

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplay(latest);
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
