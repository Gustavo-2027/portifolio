import { motion } from "framer-motion";
const Education = () => {
  return (
    <div className="w-[50%] flex flex-col pt-7">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.5 }} // aparece 1 vez, quando 50% do componente entra na tela
      >
        <h3 className="text-lg font-bold border-b-2 w-fit">
          Education & Certification
        </h3>
        <div className="pt-10">
          <h4 className="text-lg font-bold">
            Engenharia De Software{" "}
            <span className="font-semibold text-neutral-400">
              - Universidade Internacional UNINTER
            </span>
            <p className="text-neutral-400 font-normal">2025 - 2029</p>
          </h4>
        </div>
        <div className="mt-5">
          <h4 className="text-lg font-bold">
            React JS + TypeScript{" "}
            <span className="font-semibold text-neutral-400">- Udemy</span>
            <p className="text-neutral-400 font-normal">Curso online</p>
          </h4>
        </div>
        <div className="mt-5">
          <h4 className="text-lg font-bold">
            React.js do zero a Maestreia{" "}
            <span className="font-semibold text-neutral-400">- Udemy</span>
            <p className="text-neutral-400 font-normal">Curso online</p>
          </h4>
        </div>
        <div className="mt-5">
          <h4 className="text-lg font-bold">
            ----------------{" "}
            <span className="font-semibold text-neutral-400">- Udemy</span>
            <p className="text-neutral-400 font-normal">Curso online</p>
          </h4>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
