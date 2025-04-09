import Logos from "./Logos";
import Logo from "../img/Data extraction-amico.svg";
import { motion } from "framer-motion";
import Curriculo from "../img/outros/Currículo.pdf";
import { Download } from "lucide-react";

const Home = () => {
  return (
    <div id="Home" className="pt-20 w-full flex h-170">
      <div className="w-[65%] pt-20">
        <div>
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, duration: 0.9 }}
            className="rounded-2xl  mt-8"
          >
            <div className="text-7xl font-bold flex flex-col gap-2.5 pb-5">
              <h1 className="text-neutral-500 duration-900 hover:text-white hover:drop-shadow-[0_2px_15px_rgba(0,191,255,0.45)] cursor-default">
                Hello,
              </h1>
              <h1>
                I'm{" "}
                <span className="sm:text-7xl font-extrabold text-white drop-shadow-[0_2px_15px_rgba(0,191,255,0.45)] cursor-default">
                  Gustavo Silva
                </span>
              </h1>
              <h1 className="duration-900 hover:text-white hover:drop-shadow-[0_2px_15px_rgba(0,191,255,0.45)] cursor-default">
                Front-End-Developer
              </h1>
            </div>
            <p className="text-neutral-300 max-w-160">
              I'm passionate about front-end development and constantly evolving
              as a developer. I use React to build functional and
              well-structured interfaces, always learning something new with
              each project.
            </p>
            <button className="border cursor-pointer duration-700 px-4 py-1.5 rounded-4xl my-5 bg-neutral-600 font-extrabold text-lg hover:bg-neutral-200 hover:text-neutral-600 hover:px-6 hover:py-3 mr-5">
              Resume
            </button>
            <button className="border cursor-pointer duration-700 px-4 py-1.5 rounded-4xl my-5 bg-neutral-200 text-neutral-600 font-extrabold text-lg hover:text-neutral-200 hover:bg-neutral-600 hover:px-6 hover:py-3">
              <a href={Curriculo} target="_blank">
                <span className="flex gap-2">
                  {" "}
                  Resume <Download className="size-6 " />
                </span>
              </a>
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, duration: 0.9 }}
        className="rounded-2xl  mt-8"
      >
        <div className="flex flex-col items-center gap-8">
          <img src={Logo} alt="minha foto" className=" h-100 " />
          <Logos />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
