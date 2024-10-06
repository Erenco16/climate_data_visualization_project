import { motion } from "framer-motion";

const HumanSvg = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 15, opacity: 1 }}
      transition={{
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          ease: "easeInOut",
        },
        opacity: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          ease: "easeInOut",
        },
      }}
      style={{
        width: "100px", // Adjust size as needed
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Here is the human figure SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100"
        height="100"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="4" r="2" />
        <line x1="12" y1="6" x2="12" y2="16" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="10" y1="22" x2="10" y2="16" />
        <line x1="14" y1="22" x2="14" y2="16" />
      </svg>
    </motion.div>
  );
};

export default HumanSvg;