'use client'

import dynamic from 'next/dynamic'

// Import `motion.div` dynamiquement (avec SSR désactivé)
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

export default MotionDiv
