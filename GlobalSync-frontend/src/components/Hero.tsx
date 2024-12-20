import Link from "next/link";
import { GlobeDemo } from "./World";
import ClassyButton from "./ui/ClassyButton";

const Hero = () => {
  return (
    <div className="w-full h-auto px-4 sm:px-6 md:px-10">
      <div className="flex flex-wrap justify-between items-center w-full gap-4">
        <img src="/Globalsync.png" alt="GlobalSync" className="w-20 sm:w-24" />
        <div className="flex gap-2">
          <Link href="/login">
            <ClassyButton name="Login" />
          </Link>
          <Link href="/sign-up">
            <ClassyButton name="Sign Up" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-10">
        <h1 className="text-4xl font-bold leading-tight bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent sm:text-3xl md:text-6xl">
          GlobalSync
        </h1>
        <p className="text-lg dark:text-slate-400 sm:text-base my-4">
          Revolutionizing Global Workforce Management
        </p>
        <Link href="/dashboard">          
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Get Started
            </div>
          </button>
        </Link>
      </div>
      <div className="mt-10">
        <GlobeDemo />
      </div>
    </div>
  );
};

export default Hero;
