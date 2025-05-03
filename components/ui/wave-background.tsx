

import { motion } from "framer-motion"

export const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <div className="absolute w-full h-full">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <svg
          className="absolute top-0 left-0 right-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ transform: 'translateY(-1px)' }}
        >
          <motion.path
            initial={{ d: "M0,160L1440,160L1440,320L0,320Z" }}
            animate={{
              d: "M0,160L60,181.3C120,203,240,245,360,240C480,235,600,181,720,181.3C840,181,960,235,1080,245.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            }}
            className="fill-primary"
            style={{ opacity: 0.2 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.path
            initial={{ d: "M0,160L1440,160L1440,320L0,320Z" }}
            animate={{
              d: "M0,192L60,197.3C120,203,240,213,360,229.3C480,245,600,267,720,250.7C840,235,960,181,1080,165.3C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            }}
            className="fill-primary"
            style={{ opacity: 0.3 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.path
            initial={{ d: "M0,224L1440,224L1440,320L0,320Z" }}
            animate={{
              d: "M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,192C840,203,960,213,1080,229.3C1200,245,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            }}
            className="fill-primary"
            style={{ opacity: 0.4 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </div>
  )
}