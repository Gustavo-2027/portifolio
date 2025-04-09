import { Mouse, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-50" id="About">
      <h3 className="pb-50 flex items-center animate-pulse">
        <Mouse className="size-7 mr-1.5" />
        Scroll Down <ArrowDown className="ml-1.5 size-4" />
      </h3>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }} // aparece 1 vez, quando 50% do componente entra na tela
      >
        <h2 className="text-3xl font-bold text-neutral-500">Know more</h2>
        <h1 className="text-5xl font-bold">
          About <span className="text-neutral-500">me</span>
        </h1>
        <hr className="w-200 mt-4 mb-20 text-neutral-500" />
        <section className="text-lg font-bold w-fit flex justify-between">
          <h2 className="border-b-2">Who am I?</h2>
        </section>
        <p className="w-250">
          I’ve been specializing in Front-End development since December 2023,
          focusing on React.js and TypeScript. My main goal is to build modern,
          responsive, and functional interfaces. I’m currently looking for an
          internship or junior position where I can apply my knowledge in
          JavaScript, TypeScript, React, and web development best practices,
          while actively contributing to the team and growing professionally.
        </p>
        <div className="text-lg font-bold w-100 flex flex-col mt-5">
          <h1>
            React.js{" "}
            <span className="font-semibold text-neutral-400">
              - Development
            </span>
          </h1>
          <p className="text-md text-neutral-400 font-normal mb-5">
            Delight the user and make it work.
          </p>

          <h1>
            TypeScript{" "}
            <span className="font-semibold text-neutral-400">
              - Development
            </span>
          </h1>
          <p className="text-md text-neutral-400 font-normal mb-5">
            Delight the user and make it work.
          </p>

          <h1>
            JavaScript{" "}
            <span className="font-semibold text-neutral-400">
              - Development
            </span>
          </h1>
          <p className="text-md text-neutral-400 font-normal mb-5">
            Delight the user and make it work.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
