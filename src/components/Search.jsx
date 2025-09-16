 import SearchIcon from '../assets/SVG/searchIcon.jsx'

 function Search({setSearchQuery,searchQuery}){
   return(
    <>
    <div className="bg-[#130738]  shadow-sm shadow-blue-300 sm:rounded-2xl rounded-xl mt-15 sm:w-[35vw] w-[250px] md:w-[500px] lg:w-[500px] xl:w-[580px] xl:h-[50px] md:h-[50px] sm:ml-10 sm:h-[60px] h-[40px] p-4  flex items-center justify-center">
         <SearchIcon/>
         <input 
            value={searchQuery}
            type='text'
            className='text-blue-200 border-none ml-2  sm:text-[14px] 2xl:text-[20px] text-[13px] sm:-ml-1 md:ml-2  lg:ml-1   -mr-2 sm:w-[180px] md:w-[330px] lg:w-[430px] xl:text-[17px] xl:w-[570px] w-[90%] xl:ml-2 outline-none h-10 '
            placeholder='Search films that you wanted'
            onChange={(e)=>setSearchQuery(e.target.value)}
            /> 
    </div>
    </>
   )
 }

 export default Search