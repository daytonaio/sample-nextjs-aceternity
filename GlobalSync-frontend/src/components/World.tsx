"use client";
import { globeConfig, sampleArcs } from "@/data/constant";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export function GlobeDemo() {

  return (
    <div className="flex flex-row items-center justify-center h-screen md:h-auto bg-transparent relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-full bg-transparetn pointer-events-none select-none z-40" />
        <div className="absolute w-full bottom-0 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
