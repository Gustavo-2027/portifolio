const Header = () => {
  return (
    <div className="flex justify-between bg-neutral-800 text-white items-center py-4 w-full text-lg fixed px-35">
      <div className="">
        <h1 className="text-xl sm:text-xl md:text-xl font-bold bg-gradient-to-br from-white to-zinc-900 text-transparent bg-clip-text animate-text-glow">
          GS
        </h1>
      </div>
      <div className="">
        <nav className="flex gap-3.5 items-center font-medium">
          <a href="#Home" className="border-0 hover:font-semibold hover:border-b-2">Home</a>
          <a href="#About" className="border-0 duration-900 hover:font-semibold hover:border-b-2">Sobre</a>
          <a href="" className="border-0 duration-900 hover:font-semibold hover:border-b-2">Skills</a>
          <a href="#Contato" className="rounded-xl px-3 py-1 bg-neutral-700 font-semibold cursor-pointer">
            <button>Contato</button>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
