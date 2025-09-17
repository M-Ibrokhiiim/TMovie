import TG from '../assets/PICS/TG.png'
import Whatsapp from '../assets/PICS/Whatsapp.png'
import Phone from '../assets/PICS/Phone4.png'
import Insta from '../assets/PICS/INSTA.png'

function Menu(){
    return(
        <>
        <div  className='xl:w-[130px] xl:h-[200px] sm:w-[20px] lg:w-[40px] md:w-[20px] bg-red-200  2xl:right-[100px]  z-90 right-[100px] top-[20px] fixed'>
                    <div className='relative'>
                         <img className='lg:w-[21px] lg:h-[21px]  md:w-[10px] sm:w-1 w-[1px] h-[1px] absolute  left-[7px]  cursor-pointer hover:scale-110 active:scale-90 duration-150  rounded-3xl ' src={TG}/>
                         <img className='lg:w-[25px] lg:h-[25px]  md:w-[14px] sm:w-1 w-[1px] h-[1px] absolute top-[40px] -left-[6px]  rounded-2xl cursor-pointer  shadow-md hover:scale-110 active:scale-90 duration-150' src={Phone }/>
                         <img className='lg:w-[40px] lg:h-[37px]  md:w-[20px] sm:w-1 w-[1px] h-[1px] md:h-[22px] absolute top-[85px] left-[4px] cursor-pointer  shadow-md hover:scale-110 active:scale-90 duration-150 rounded-3xl' src={Insta}/>
                         <img className='lg:w-[45px] lg:h-[40px]  absolute    sm:w-1 w-[1px] h-[1px] top-[130px] left-[45px] cursor-pointer  shadow-md hover:scale-110 active:scale-90 duration-150' src={Whatsapp}/>
                    </div>
        </div> 
        </>
    )
}

export default Menu