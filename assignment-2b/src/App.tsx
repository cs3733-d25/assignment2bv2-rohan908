
import Title from "./components/Title.tsx";
import Intro from "./components/Intro.tsx";
import Hobby1 from "./components/Hobby1.tsx";


function App() {

  return (
    <>
      <div data-theme="goblinpenguin" className="font-[Righteous] font-mono">
        <Title />
          <Intro fname="Hudson" lname="Kortus" />
          <Hobby1 />

      </div>
    </>
  )
}

export default App
