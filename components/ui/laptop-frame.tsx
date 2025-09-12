"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface LaptopFrameProps {
  children: React.ReactNode
  className?: string
}

export function LaptopFrame({ children, className = "" }: LaptopFrameProps) {
  return (
    <div className={`relative w-full max-w-[1000px] mx-auto ${className}`}>
      {/* Laptop frame */}
      <Image
        src="/images/laptop2.svg"
        alt="Laptop frame"
        width={1000}
        height={600}
        className="w-full h-auto"
      />
      
      {/* Screen content */}
      <div className="absolute top-[4%] left-[5.5%] right-[5%] bottom-[14%] overflow-hidden rounded-[2px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-5/6 scale-x-[0.855] origin-center"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
} 