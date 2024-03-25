import React from 'react'

const Boton = ({titulo}) => {
    console.log(titulo);
  return (
    <div className='w-full '>
    
    {titulo.map((item, index)=>(
        <div key={index}>
            <button  className='bg-[#111] text-white font-bold text-base w-full px-[20px] py-[15px] mb-4 hover:bg-lime-500 hover:text-black '>
                {item.nombre}
        </button>
        </div>
    ))}
    </div>
  )
}

export default Boton