import { useState } from 'react'
import './App.css'
import Mycomponents from '../../../Dia_33/react100/components/Mycomponents'

function App() {
  

  return (
   <>
   <div>
      <Mycomponents 
      title="Titulo via propriedades(props)"
      descripition="Descrição via propriedades(props)"/>
   </div>
   </>
  )
}

export default App
