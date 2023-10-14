import React, { useState } from 'react'

function App() {
  let globalc = "black"
  let[clr, setClr] = useState(globalc);

  function chng(){
    let colr = "red"
    setClr(colr)
  }
  function chng1(){
    let colr1 = "blue"
    setClr(colr1)
  }
  function chng2(){
    let colr2 = "green"
    setClr(colr2)
  }
  function chng3(){
    let colr3 = "Gray"
    setClr(colr3)
  }
  function chng4(){
    let colr4 = "White"
    setClr(colr4)
  }
  function chng5(){
    let colr5 = "Lavender"
    setClr(colr5)
  }
  function chng6(){
    let colr6 = "#fa90a2"
    setClr(colr6)
  }
  function chng7(){
    let colr7 = "Purple"
    setClr(colr7)
  }
  return(
      <div className="toolbox" style={{backgroundColor:clr}}>
        <div className="box">
          <button onClick={chng} className="btnbtn1">Red</button>
          <button onClick={chng1} className="btnbtn2">Blue</button>
          <button onClick={chng2} className="btnbtn3">Green</button>
          <button onClick={chng3} className="btnbtn4">Gray</button>
          <button onClick={chng4} className="btnbtn5">White</button>
          <button onClick={chng5} className="btnbtn6">Pink</button>
          <button onClick={chng6} className="btnbtn7">Purple</button>
          <button onClick={chng7} className="btnbtn8">Lavender</button>
        </div>
      </div>
  )
}

export default App
