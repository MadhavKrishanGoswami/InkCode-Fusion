import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NotFound() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <div className="z-20 mb-4">
        <h1 className="ml-28 text-9xl font-bold mb-4">404</h1>
        <h2 className="ml-28 text-2xl font-semibold mb-8">Page Not Found :(</h2>
        <p className="text-lg mb-8 text-center max-w-md">
          Oops!! The page you're looking for seems to have vanished into the
          digital void.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link to="/start">
            <motion.button
              className="bg-Runbg text-White w-40 h-10 rounded-lg ml-36 mx-auto block font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Go Back Home
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
