import { useState } from "react";
import Title from "./components/Title.tsx";
import Intro from "./components/Intro.tsx";
import Hobby1 from "./components/Hobby1.tsx";
import Hobby2 from "./components/Hobby2.tsx";

function App() {
  const [currentPage, setCurrentPage] = useState('hudson');

  return (
    <>
      <div data-theme="goblinpenguin" className="font-[Righteous] font-mono">
        <Title currentPage={currentPage} onPageChange={setCurrentPage} />
        {currentPage === 'hudson' ? (
          <>
            <Intro fname="Hudson" lname="Kortus" />
            <Hobby1 />
          </>
        ) : (
          <>
            <Intro fname="Rohan" lname="Inamdar" />
            <Hobby2 />
          </>
        )}
      </div>
    </>
  )
}

export default App
