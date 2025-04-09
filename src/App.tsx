import About from "./components/About";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-neutral-900 w-full h-1000 px-0.5">
      <Header />
      <div className="h-920 bg-neutral-900 text-neutral-200 font-sans px-35 bg-fixed rounded-sm mb-5">
        <Home />
        <About />

        <div className="w-[100%] flex ">
          <Contacts />
          <Education />
        </div>
        <hr className=" text-neutral-400" />
        <Skills />
      </div>
    </div>
  );
};

export default App;
