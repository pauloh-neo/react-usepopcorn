import { useEffect, useState } from "react";
import { MovieBoxCard } from "./MovieBoxCard";

export function Movies(){   
    const TMDB_KEY = import.meta.env.VITE_TMDB_KEY;
    const TMBD_API_URL = import.meta.env.VITE_API_URL
    const [movies, setMovies] = useState([]);
    const [movieName, setMovieName] = useState("")
    
    console.log(TMDB_KEY);


    const arrNum = Array.from({length: 10}, (_, i) => i + 1)
  

    useEffect(() => {
        async function fetchMovies(){
            try{
                const res = await fetch(TMBD_API_URL)

                const data = await res.json()

                setMovies(data.results);

            }catch(error){
                console.error(error)
            }

        }
        fetchMovies()
       
    },[])

    useEffect(() => {
        console.log("Movies updated:", movies);
    }, [movies]);


    return(
        <section className="mt-5">
            <h3 className="text-5xl font-semibold text-center text-gray-800 mb-10">Popular Movies</h3>
            <ul className="grid grid-cols-6 gap-4 p-3">
                {movies.map((movie) => (
                    <MovieBoxCard key={movie.id} original_title={movie.original_title} poster={movie.poster_path} overview={movie.overview} release_date={movie.release_date} rate={movie.vote_average}/>
                ))}
            </ul>
        </section>
    );
}