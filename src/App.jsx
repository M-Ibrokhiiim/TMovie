import { useState,useEffect } from 'react'
import { useDebounce } from 'react-use'

import Pic1 from './assets/PICS/1.JPG'
import Pic2 from './assets/PICS/2.JPG'
import Pic3 from './assets/PICS/3.JPG'
import MovieIcon from './assets/SVG/movieIcon.jsx'
import Threedots from './assets/SVG/verticalDots.jsx'
import Arrow from './assets/PICS/Arrow4.png'

// Components
import Search from './components/Search.jsx'
import MovieCard from './components/MovieCard.jsx'
import Bottom from './components/Footer.jsx'
import Menu from './components/Menu.jsx'
 



// API_KEY='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjI5OGRlMTQ4ZDQwMGU2YWU1ZTFlZWI1NjlkNzIyMSIsIm5iZiI6MTc1NzkyOTQxNC43NDgsInN1YiI6IjY4YzdkZmM2ZmUwZjM4MDdlZGNhNzNiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Njp2BhJUW4MkBX_Z5i5LQEZqex_VujQHzmt6mQu3KOY'

function App(){

  const [searchQuery,setSearchQuery]=useState()
  const [movies,setMovies]=useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)
  const [debounceSearchTerm,setDebounceSearchTerm] = useState('')
  const [toggle,setToggle] = useState(false)



//Toggle function

const toggleFunction= () => {
  setToggle(!toggle)
  console.log(toggle)
}

// API parameters
  const baseURL=import.meta.env.VITE_API_BASE_URL
  const token=localStorage.getItem("token")

  const getMovies = async (query) =>{
    try{
      setLoading(true)

      const response = await fetch( query 
        ?  `${baseURL}/search/movie?query=${encodeURIComponent(query)}` 
        :  `${baseURL}/discover/movie?sort_by=popularity.desc`,{
         method:'GET',
         headers:{
          'Authorization':`Bearer ${token}`,
          'Accept':'application/json',
         }
      })

      if(!response.ok){
        setLoading(false)
        throw new Error('Error')
      }
       
      const data = await response.json()
      console.log(data)

      setMovies(data.results) 
    }catch(err){
      setError(true)
      console.log(err)
    }finally{
      setLoading(false)
    }
  }
  useDebounce(()=>setDebounceSearchTerm(searchQuery),1000,[searchQuery])

  useEffect(()=>{
    getMovies(debounceSearchTerm)
  },[debounceSearchTerm])

 return(
   <>
   <div className="#Skeleton"></div>

   <div className="#Container flex flex-col items-center bg-[#123163] p-10 ">
     <header className='text-center sm:text-[12px] xl:text-[8px]  text-[5px] -mt-6 flex flex-col items-center'>
          <MovieIcon setSearchQuery={setSearchQuery}/>
           <div className='text-white text-2xl 2xl:left-[94%] md:left-[95%]   mt-2 left-[85%] fixed z-50 cursor-pointer'> 
           {toggle 
                ? <img  onClick={toggleFunction} className='md:w-[25px] w-[20px]    duration-150  cursor-pointer    hover:scale-120 active:-translate-y-[1px] hover:cursor-pointer active:rotate-20 active:scale-90 h-[30px] mr-10 mt-1' src={Arrow}/>
                : <Threedots toggleFunction={toggleFunction} />
            } 
      
          </div>  
          {
            toggle
            ?  <Menu/>
            : ''
          }
          
        <div className='relative  md:w-[300px] md:ml-14  xl:-mt-2 xl:ml-16 -ml-4  w-[180px]  '>
         <img src={Pic1} alt="Pic1"  className='md:h-[220px] md:w-[130px] xl:w-[130px] xl:h-[190px] h-[180px] w-[120px] rounded-2xl shadow-2xl shadow-black absolute left-[20%] -top-4 z-2'/>
         <img src={Pic2} alt='Pic2'  className='md:h-[200px] md:w-[130px] xl:w-[110px] xl:h-[180px] h-[160px] w-[120px] rounded-2xl shadow-2xl shadow-black absolute -left-[10%] -rotate-14'/> 
         <img src={Pic3} alt='Pic2'  className='md:h-[200px] md:w-[130px] xl:w-[110px] xl:h-[180px] h-[160px] w-[120px] rounded-2xl shadow-2xl shadow-black absolute left-[52%] rotate-14'/> 
        </div>
       <h1 className="capitalize font-mono font-bold  text-white sm:mt-62 mt-50  xl:mt-54 xl:w-[450px]   sm:max-w-[700px] text-center"> Find <span className="text-gradient"> movies</span> you'll love without  the hassle</h1>
     </header>
     
     <main className=' flex flex-col items-center w-full xl:text-[8px] relative sm:text-[10px] md:text-[8px] -mt-8 text-[6px] '>
      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <h1 className='text-white absolute  top-38 lg:top-38  shadow-2xl text-shadow-2xs xl:-mt-1 2xl:top-60 sm:left-26  md:left-26  lg:left-32 xl:left-55 2xl:left-83    font-bold font-mono'> {movies.length >0 ? 'All Movies' :''}</h1>
      <section className='flex flex-col items-center mt-6  w-full'>
        <div className='flex flex-col items-center'>
          <p className='text-3xl mt-22 ml-10 text-white'>{loading && movies.length >0 ? <span class="loader"></span>  : " " }</p>
          <p className="text-2xl text-red-400 ml-10 mt-10">{error ? "Please reload page ! " : " "}</p>
        </div>
        <div className=' 2xl:w-[1200px] w-[68vw] min-w-[400px] text-amber-50 flex flex-wrap -mt-14 flex-col 2xl:mt-10 justify-between gap-10 '>
         {movies.length > 0 
            ? <div className='flex flex-wrap justify-around gap-10'>
                {movies.map((movie)=>(
                <MovieCard  key={movie.id}  movie={movie}/>
                ))} 
              </div>
            : <div className='gap-4 flex flex-col -mt-16 items-center'>
                <span className="retry"></span> <p className='sm:text-2xl text-lg text-red-600 '>Please <span className='text-white underline'>research,</span> film not found</p>
              </div>}
        </div>
      </section>
     </main>
   </div>
    <footer className={movies.length >0 ? 'bg-[#6640a3] w-full sm:h-[170px] lg:h-[160px] p-4 flex justify-center items-center' : 'bg-[#6640a3] mt-[88px] w-full flex justify-center items-center h-[150px]'}>
       <Bottom/>
     </footer>
   </>
 )
}

export default App