import React from 'react'

const Linguagens = ({Linguagem, Descricao}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 text-center border-neutral-400 p-5 border w-100 duration-700 hover:scale-112">
            <h3 className="text-2xl font-bold">{Linguagem}</h3>
            <p>{Descricao}</p>
          </div>
  )
}

export default Linguagens
