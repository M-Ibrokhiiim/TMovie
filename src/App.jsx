import { useState,useEffect } from 'react'
import { useDebounce } from 'react-use'

import Pic1 from './assets/PICS/1.JPG'
import Pic2 from './assets/PICS/2.JPG'
import Pic3 from './assets/PICS/3.JPG'
import MovieIcon from './assets/SVG/movieIcon.jsx'

// Components
import Search from './components/Search.jsx'
import MovieCard from './components/MovieCard.jsx'
 



// API_KEY='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjI5OGRlMTQ4ZDQwMGU2YWU1ZTFlZWI1NjlkNzIyMSIsIm5iZiI6MTc1NzkyOTQxNC43NDgsInN1YiI6IjY4YzdkZmM2ZmUwZjM4MDdlZGNhNzNiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Njp2BhJUW4MkBX_Z5i5LQEZqex_VujQHzmt6mQu3KOY'

function App(){

  const [searchQuery,setSearchQuery]=useState()
  const [movies,setMovies]=useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)
  const [debounceSearchTerm,setDebounceSearchTerm] = useState('')


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

   <div className="#Container flex flex-col items-center bg-[#123163] p-10">
     <header className='text-center text-[12px]  -mt-6 flex flex-col items-center'>
        <MovieIcon setSearchQuery={setSearchQuery}/>
        <p>{searchQuery}</p>
        <div className='relative bg-red-50  ml-28 w-[400px]'>
         <img src={Pic1} alt="Pic1"  className='h-[220px] w-[130px] rounded-2xl shadow-2xl shadow-black absolute left-[20%] -top-4 z-2'/>
         <img src={Pic2} alt='Pic2'  className='h-[200px] w-[130px] rounded-2xl shadow-2xl shadow-black absolute -left-[10%] -rotate-14'/> 
         <img src={Pic3} alt='Pic2'  className='h-[200px] w-[130px] rounded-2xl shadow-2xl shadow-black absolute left-[52%] rotate-14'/> 
        </div>
       <h1 className="capitalize font-mono font-bold ml-6 text-white mt-62  max-w-[700px] text-center"> Find <span className="text-gradient"> movies</span> you'll love without  the hassle</h1>
     </header>
     
     <main className='flex flex-col items-center  relative text-[10px] '>
      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <h1 className='text-white absolute top-48 shadow-2xl text-shadow-2xs left-4 font-bold font-mono'> {movies.length >0 ? 'All Movies' :''}</h1>
      <section className='flex flex-col items-center mt-6'>
        <div className='flex flex-col items-center'>
          <p className='text-3xl mt-22 ml-10 text-white'>{loading && movies.length >0 ? <span class="loader"></span>  : " " }</p>
          <p className="text-2xl text-red-400 ml-10 mt-10">{error ? "Please reload page ! " : " "}</p>
        </div>
        <div className=' w-[68vw] min-w-[400px] text-amber-50 flex flex-wrap  flex-col justify-between gap-10 '>
         {movies.length > 0 
            ? <div className='flex flex-wrap justify-around gap-10'>
                {movies.map((movie)=>(
                <MovieCard  key={movie.id}  movie={movie}/>
                ))} 
              </div>
            : <div className='gap-4 flex flex-col  items-center'>
                <span className="retry"></span> <p className='text-2xl text-red-600 '>Please <span className='text-white underline'>research,</span> film not found</p>
              </div>}
        </div>
      </section>
     </main>
   </div>
   </>
 )
}

export default App