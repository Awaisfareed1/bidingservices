'use client';

import { motion } from 'framer-motion';

export default function AppSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="py-10"
     >
      {children}
    </motion.section>
  );
}