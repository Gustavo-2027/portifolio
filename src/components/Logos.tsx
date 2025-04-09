import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {} from "lucide-react"
const Logos = () => {
  return (
    <div className="flex gap-5 ">
      <a href="https://linkedin.com/in/gustavoSilva-27s" target="_blank">
        <FaLinkedin className="rounded-xl duration-700 size-9 hover:size-12 hover:bg-neutral-900" />
      </a>
      <a href="https://github.com/Gustavo-2027" target="_blank">
        <FaGithub className="rounded-xl duration-700 size-9 hover:size-12 hover:bg-neutral-900" />
      </a>
      <a href="gustavonas.27@gmail.com" target="_blank">
        <FaEnvelope className="rounded-xl duration-700 size-9 hover:size-12 hover:bg-neutral-900" />
      </a>
      <div>

      </div>
    </div>
  );
};

export default Logos;
