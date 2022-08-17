

import { useState } from 'react'
import './index.css'
type infoSemafaro = {

  colorButton: any
}



export const Lampada = ({ colorButton}: infoSemafaro) => {

  const [color, setColor] = useState<"red" | "yellow" | "green">()



  return(

      <>
      <div>
        <button onClick={() => setColor("red")} style={{background: "red"}} />
        <button onClick={() => setColor("yellow")} style={{background: "yellow"}} />
        <button onClick={() => setColor("green")} style={{background: "green"}} />
      </div>
        {color === "red" && <span>Cuidado! Espere abrir o sinal</span>}
        {color === "yellow" && <span>Alerta!</span>}
        {color === "green" && <span>Pode passar!</span>}
      </>
    
  )
}