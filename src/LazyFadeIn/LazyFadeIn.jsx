import React from 'react'
import {motion} from "motion/react"

function LazyFadeIn({
    children,
    delay = 0.3,
    duration = 0.8,
    yOffset = 50,
}) {
  return (
     <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay, duration, ease: "easeOut" }}
        >
            {children}
        </motion.div>
  )
}

export default LazyFadeIn