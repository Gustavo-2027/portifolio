import { motion } from "framer-motion";
const Contacts = () => {
  return (
    <div className="w-[50%] h-100 flex flex-col justify-center items-baseline">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.5 }} // aparece 1 vez, quando 50% do componente entra na tela
      >
      <h1 className="text-lg font-bold border-b-2 w-fit">Open to Opportunities</h1>
      <div className="w-120 flex gap-20">
        <div className="flex flex-col">
          <div className="py-10">
            <h2 className="text-lg font-bold">NAME</h2>
            <p className="text-md text-neutral-400 font-normal">
              Gustavo Silva
            </p>
          </div>
          <div className="pb-10">
            <h2 className="text-lg font-bold">EMAIL</h2>
            <p className="text-md text-neutral-400 font-normal">
              gustavonas27@gmail.com
            </p>
          </div>
          <div className="">
            <h2 className="text-lg font-bold">EMAIL</h2>
            <p className="text-md text-neutral-400 font-normal">
              gustavonas27@gmail.com
            </p>
          </div>
        </div>
        <div className="flex flex-col py-10">
          <div className="pb-10">
            <h2 className="text-lg font-bold">PHONE</h2>
            <p className="text-md text-neutral-400 font-normal">
              +55 8498859-9197
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold">LOCATION</h2>
            <p className="text-md text-neutral-400 font-normal">Natal, RN</p>
          </div>
          <div className="pt-10">
            <h2 className="text-lg font-bold">LINKEDIN</h2>
            <p className="text-md text-neutral-400 font-normal">
              <a href="www.linkedin.com/in/gustavosilva-27s">Gustavo Silva</a>
            </p>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Contacts;
