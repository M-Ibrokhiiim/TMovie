import Pic1 from './assets/1.JPG'
import Pic2 from './assets/2.JPG'
import Pic3 from './assets/3.JPG'


function App(){

 return(

   <>
   <div className="#Skeleton"></div>

   <div className="#Container">
     <header className='text-center flex flex-col items-center' >
       <h1 className="capitalize font-mono font-bold text-white  text-center"> Find <span className="text-gradient"> movies</span> you'll enjoy without hassle</h1>
        <div className='relative bg-red-50 mt-10 w-[400px]'>
         <img src={Pic1} alt="Pic1"  className='h-[270px] w-[170px] rounded-2xl shadow-2xl shadow-black absolute left-[20%] -top-4 z-2'/>
         <img src={Pic2} alt='Pic2'  className='h-[250px] w-[170px] rounded-2xl shadow-2xl shadow-black absolute -left-[10%] -rotate-14'/> 
         <img src={Pic3} alt='Pic2'  className='h-[250px] w-[170px] rounded-2xl shadow-2xl shadow-black absolute left-[52%] rotate-14'/> 
       </div>
     </header>
   </div>
   
   </>
 )
}

export default App