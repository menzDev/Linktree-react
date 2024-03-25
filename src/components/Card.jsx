import Boton from "./Boton"
import Imagen from "./Imagen"




const Card = () => {
  const redeSociales = [
    {nombre:"GitHub"},
    {nombre:"FrontEnd-Mentor"},
    {nombre:"Linkedin"},
    {nombre:"Twitter"},
    {nombre:"Instagram"}
  ]
  return (
    <div className='Card text-center w-[374px] h-[590px] bg-[#1f1f1f] rounded-[15px] p-[20px] grid place-items-center'>
        <Imagen/>    
        <Boton titulo={redeSociales}/>
    </div>
  )
}

export default Card