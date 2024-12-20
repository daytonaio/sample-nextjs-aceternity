"use client";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";

const features = [
  {
    title: "Time Zone Optimization",
    description:
      "AI-powered recommendations for meeting times that are convenient for all team members across various time zones. ",
    thumbnail: "/timetable.png",
  },
  {
    title: "Kestra Integration",
    description:
      "Leverage Kestra workflows for streamlined task automation and scheduling. Simplify workflows with robust event-driven automation.",
    thumbnail: "/Kestra-logo-white.svg",
  },
  {
    title: "Team Management",
    description:
      "Centralized platform for team schedules. Manage availability and priorities at a glance.",
    thumbnail: "/conversation.png",
  },
  {
    title: "User-Friendly Interface",
    description:
      "A sleek and modern design for intuitive navigation. Accessible on web and mobile for flexibility.",
    thumbnail: "/search.png",
  },
];

const Features = () => {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-transparent md:text-7xl"
        >
          <div className="flex flex-col justify-center items-center px-4 md:px-0">
            <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-white text-center">
              Empower Your {" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent hover:text-cyan-200">
                Productivity
              </span>
            </h1>
            <p className="text-slate-400 text-sm md:text-xl tracking-widest text-center mt-4">
              Smart Scheduling Features for Seamless Collaboration
            </p>
          </div>
          <div className="w-full md:w-[80%] mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mx-auto px-4 md:px-0">
            {features.map((feature, index) => (
              <Button
                key={index}
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="flex-1 border-neutral-200 dark:border-slate-800"
              >
                <div className="flex flex-col md:flex-row md:items-center p-4 md:p-5 gap-4">
                  <img
                    src={feature.thumbnail}
                    alt={feature.thumbnail}
                    className="w-16 md:w-20 lg:w-32 mx-auto md:mx-0"
                  />
                  <div className="text-center md:text-left">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                      {feature.title}
                    </h1>
                    <p className="text-sm md:text-lg lg:text-xl text-slate-100 mt-2 font-thin">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </motion.h1>
      </LampContainer>
    </>
  );
};

export default Features;
