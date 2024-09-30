import { useState } from 'react'
import { Fejlec } from './components/FejlecComp'
import { Kapcsolo } from './components/kapcsoloComp'
import { Lablec } from './components/lablecComp'



function App() {



  

  return (
    <>


      <Fejlec></Fejlec>

    <Kapcsolo></Kapcsolo>


    <Lablec author='Varga Dávid' date='2077-03-12' timeSpent='30perc' AI_usage='Nem használtam MI-t'></Lablec>


    </>
  )
}

export default App
