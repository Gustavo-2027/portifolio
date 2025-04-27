import Linguagens from "./Linguagens";

const Skills = () => {
  return (
    <div className="pt-5">
      <div>
        <h1 className="text-center text-4xl font-bold pt-5 pb-10">Skills</h1>
        <div className="flex gap-20 flex-wrap justify-evenly items-center">
          <Linguagens Linguagem={"JavaScript"} Descricao={"Loremdasdada"}/>
          <Linguagens Linguagem={"React"} Descricao={"Loremdasdada"}/>
          <Linguagens Linguagem={"TypeScript"} Descricao={"Loremdasdada"}/>
          <Linguagens Linguagem={"Tailwind"} Descricao={"Loremdasdada"}/>
          <Linguagens Linguagem={"BootStrap"} Descricao={"Loremdasdada"}/>
          <Linguagens Linguagem={"Figma"} Descricao={"Loremdasdada"}/>
          <Linguagens Linguagem={"HTML"} Descricao={"Loremdasdada"}/>
          <Linguagens Linguagem={"CSS"} Descricao={"Loremdasdada"}/>
          
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
