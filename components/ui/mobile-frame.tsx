"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface MobileFrameProps {
  children: React.ReactNode
  className?: string
}

export function MobileFrame({ children, className = "" }: MobileFrameProps) {
  return (
    <div className={`relative w-full max-w-[1200px] mx-auto ${className}`}>
      {/* Mobile frame */}
      <Image
        src="/images/ame.svg"
        alt="Mobile frame"
        width={1200}
        height={2400}
        className="h-full"
      />
      
      {/* Screen content */}
      <div className="absolute top-[2%] left-[5%] right-[4.2%] bottom-[2%] overflow-hidden rounded-[20px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[29%] h-full origin-center mx-auto rounded-[20px] overflow-hidden"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
} 