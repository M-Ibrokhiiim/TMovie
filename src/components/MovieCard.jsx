function MovieCard({movie:{
    title,vote_average,poster_path,release_date,original_language
}}){

    return(
        <div className="active:scale-50">
            <img className="rounded-2xl shadow-md  shadow-amber-50" src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` :'null'} width='220' /> 
        </div>
    )

}
export default MovieCard