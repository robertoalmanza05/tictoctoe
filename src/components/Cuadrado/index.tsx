import React from 'react'

type Player = "X" | "O" | "BOTH" | null;


export default function Index({
  value,
  onClick,
  ganador
}:{
  ganador: string | null
  value:string | null
  onClick: ()=>void
}
) 

{
  if(!value){
    return <button className='square' onClick={onClick} disabled={Boolean(ganador)}></button>
  }
  return (
    <button className='square' disabled>{value} </button>
  )
}
