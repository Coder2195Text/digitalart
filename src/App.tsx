import "./styles.css";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        Digital Art Club
      </motion.h1>
    </div>
  );
}
