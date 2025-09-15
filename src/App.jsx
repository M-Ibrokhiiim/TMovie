import Pic1 from './assets/1.JPG'
import Pic2 from './assets/2.JPG'
import Pic3 from './assets/3.JPG'
import MovieIcon from './assets/movieIcon.jsx'



function App(){

 return(

   <>
   <div className="#Skeleton"></div>

   <div className="#Container">
     <header className='text-center text-[12px]  -mt-6 flex flex-col items-center'>
        <MovieIcon/>
        <div className='relative bg-red-50  ml-28 w-[400px]'>
         <img src={Pic1} alt="Pic1"  className='h-[220px] w-[130px] rounded-2xl shadow-2xl shadow-black absolute left-[20%] -top-4 z-2'/>
         <img src={Pic2} alt='Pic2'  className='h-[200px] w-[130px] rounded-2xl shadow-2xl shadow-black absolute -left-[10%] -rotate-14'/> 
         <img src={Pic3} alt='Pic2'  className='h-[200px] w-[130px] rounded-2xl shadow-2xl shadow-black absolute left-[52%] rotate-14'/> 
        </div>
       <h1 className="capitalize font-mono font-bold ml-6 text-white mt-62  max-w-[700px] text-center"> Find <span className="text-gradient"> movies</span> you'll love without  the hassle</h1>
     </header>
     <main>
      
     </main>
   </div>
   
   </>
 )
}

export default App