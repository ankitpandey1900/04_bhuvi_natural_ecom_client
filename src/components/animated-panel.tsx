"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedPanelProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function AnimatedPanel({ children, ...props }: AnimatedPanelProps) {
  return <motion.div {...props}>{children}</motion.div>;
}
