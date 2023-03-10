import { truncate } from "fs";
import { useEffect, useState } from "react";
import Cuadrado from "../Cuadrado";

function Index() {
  

  const [cuadrados, setCuadrados] = useState(Array(9).fill(null));
  const [playerActual, setPlayerActual] = useState<"X" | "O">();
  const [ganador, setGanador] = useState(null);

const classnameCuadradoX=`square${(playerActual == "X")? "S": ""} `;
const classnameCuadradoO=`square${(playerActual == "O")? "S": ""} `;
  useEffect(() => {
    const f = () => {
      setPlayerActual(Math.floor(Math.random() * 2) === 1 ? "X" : "O");
    };
    f();
  }, []);
  
  function setCuadradoValue(index:number) {
    const newData = cuadrados.map((val, i) => {
      if (i === index) {
        return playerActual;
      }
      return val;
    });
    setCuadrados(newData);
    setPlayerActual(playerActual === "X" ? "O" : "X");
  }
const onclickReset =()=>{
setCuadrados(Array(9).fill(null))
setPlayerActual(Math.floor(Math.random() * 2) === 1 ? "X" : "O");

}
  
  return (
    <div>
      <p className="p">Hey {playerActual}, es tu turno! </p>

      <div className="grid">
        {
          cuadrados.map((_, i) => {
            return (
              <Cuadrado
                ganador={ganador}
                key={i}
                onClick={() => setCuadradoValue(i)}
                value={cuadrados[i]}
              />
            );
          })}
      </div>
      <h1 style={{
        marginLeft:"27%",
        fontSize:"1.5rem",
        marginTop:"4%"
      }}>Turno actual</h1>
        
      <section className='turn'>
        <button className={classnameCuadradoX} disabled={true} >X </button>
        <button className={classnameCuadradoO} disabled={true}>O</button>
        </section>
<button style={{width:"90px",
height:"50px", display:"flex",
justifyContent:"center",marginTop:"5%", marginLeft:"34%",
background:"#007ACC",fontSize:"20px"}} onClick={onclickReset} >RESET</button>
      </div>
  );
}

export default Index;
