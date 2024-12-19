"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faq = [
    {
      question: "What is GlobalSync?",
      answer: "GlobalSync is a smart scheduling platform that helps remote teams across multiple time zones find the most convenient meeting times, ensuring work-life balance for all team members."
    },
    {
      question: "How does GlobalSync ensure work-life balance?",
      answer: "GlobalSync uses advanced AI algorithms to recommend meeting times that fall within each team member’s preferred working hours, avoiding meetings during off-hours."
    },
    {
      question: "Is GlobalSync suitable for large teams or enterprises?",
      answer: "Yes, GlobalSync is designed to accommodate teams of any size. It scales seamlessly for small teams, large enterprises, or global organizations."
    },
    {
      question: "Can GlobalSync integrate with other tools for task automation?",
      answer: "Absolutely! With Kestra integration, GlobalSync supports event-driven workflows, simplifying task automation and scheduling processes."
    },
    {
      question: "What makes GlobalSync user-friendly?",
      answer: "GlobalSync features a sleek, modern interface accessible on both web and mobile platforms, making scheduling intuitive and flexible for users everywhere."
    }
  ];
  

const AccordinationItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <IconMinus size={20} /> : <IconPlus size={20} />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-transparent via-slate-800 to-transparent">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mx-auto text-center text-white tracking-tighter">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 sm:mt-12 max-w-[90%] sm:max-w-[648px] mx-auto">
        {faq.map(({ question, answer }) => (
          <AccordinationItem
            question={question}
            answer={answer}
            key={question}
          />
        ))}
      </div>
    </div>
  );
};