 import SearchIcon from '../assets/SVG/searchIcon.jsx'

 function Search({setSearchQuery}){
   return(
    <>
    <div className="bg-[#130738]  shadow-sm shadow-blue-300 rounded-2xl mt-15 w-[35vw] ml-10 h-[60px] p-4  flex items-center justify-center">
         <SearchIcon/>
         <input 
            className='text-blue-200 border-none ml-2   text-[20px] w-[32vw] outline-none h-10 '
            type='text'
            placeholder='Search films that you wanted'
            onChange={(e)=>setSearchQuery(e.target.value)}
            /> 
    </div>
    </>
   )
 }

 export default Search