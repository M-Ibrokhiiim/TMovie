import TG from '../assets/PICS/TG.png'
import Whatsapp from '../assets/PICS/Whatsapp.png'
import Phone from '../assets/PICS/Phone4.png'
import Insta from '../assets/PICS/INSTA.png'

function Menu(){
    return(
        <>
        <div  className='xl:w-[130px] xl:h-[200px] sm:w-[80px] lg:w-[40px] md:w-[20px] 2xl:right-[100px]  w-[45px] right-14  z-90 md:right-[100px] sm:-right-[1px] md:top-[20px] sm:top-[120px] fixed'>
                    <div className='relative'>
                         <img className='lg:w-[21px] lg:h-[21px]   sm:w-[15px] w-[16px]  absolute  sm:left-[7px] left-[16px]  cursor-pointer hover:scale-110 active:scale-90 duration-150  rounded-3xl ' src={TG}/>
                         <img className='lg:w-[25px] lg:h-[25px]   sm:w-[20px] w-[19px] absolute sm:top-[40px] top-[40px] sm:-left-[6px] left-[6px]  rounded-2xl cursor-pointer  shadow-md hover:scale-110 active:scale-90 duration-150' src={Phone }/>
                         <img className='lg:w-[40px] lg:h-[37px]   sm:w-[25px]  sm:h-[35px] w-[40px] h-[22px] absolute sm:top-[85px] top-[85px] sm:left-[4px] left-[9px] cursor-pointer  shadow-md hover:scale-110 active:scale-90 duration-150 rounded-3xl' src={Insta}/>
                         <img className='lg:w-[45px] lg:h-[40px]   sm:w-[50px] sm:h-[40px] absolute       top-[130px] sm:left-[45px] left-[45px] cursor-pointer  shadow-md hover:scale-110 active:scale-90 duration-150' src={Whatsapp}/>
                    </div>
        </div> 
        </>
    )
}

export default Menu