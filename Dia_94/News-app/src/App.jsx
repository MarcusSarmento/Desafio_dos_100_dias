import { useState } from 'react'
import Navbar from "../Components/Navbar"
import NewsBoard from "../Components/NewsBoard"


//Your API key is: 1e46e467732846b5beae2f6bcdcae7ee


const App = () => {
  const [categorias, setCategorias] = useState("general");


  return (
    <div>
      <Navbar setCategorias={setCategorias}/>
      <NewsBoard categorias={categorias}/>
    </div>
  )
}

export default App