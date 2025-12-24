import { useState } from "react";
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"

const App = () => {
  const [category, setCategory] = useState("general");

  console.log("PARENT setCategory:", setCategory);

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  )
}

export default App