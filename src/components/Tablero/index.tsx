import { useEffect, useState } from "react";
import Cuadrado from "../Cuadrado";

function Index() {
  

  const [cuadrados, setCuadrados] = useState(Array(9).fill(null));
  const [playerActual, setPlayerActual] = useState<"X" | "O">();
  const [ganador, setGanador] = useState(null);

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
      
      </div>
  );
}

export default Index;
