function MovieCard({movie:{
    title,vote_average,poster_path,release_date,original_language
}}){

    return(
        <>
        { poster_path 
           ?   <div className="active:scale-90 p-4  xl:p-[18px] bg-[#365991] rounded-2xl hover:scale-110  2xl:h-[280px] xl:w-[180px] xl:h-[260px] w-[200px] cursor-pointer duration-300 flex items-center flex-col">
            <img className="rounded-xl shadow-md xl:h-[180px] 2xl:w-[200px] 2xl:h-[200px] w-[220px] h-[250px]" src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` :'null'} width='220' height='350' />      
            <div className=" xl:w-[150px] w-[160px] mt-2">
                <p className="text-[12px] font-serif mb-2">{title.length > 20 ? title.slice(0,25) : title}</p>
                <div className="flex text-[10px] gap-[1px] ">
                <p>⭐️</p>
                <p>{vote_average ? vote_average.toFixed(1) : '0'}</p> 
                <p className="capitalize">•{original_language}</p>
                <p>•{release_date ? release_date.slice(0,4) : 'Old'}</p>
                </div>
            </div>
        </div>
        : ''
         }
      
        </>
    )

}
export default MovieCard