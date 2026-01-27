import { useEffect, useState } from "react";
import { MovieBoxCard } from "./MovieBoxCard";

export function Movies(){   
    const TMBD_API_URL = import.meta.env.VITE_API_URL
    const [movies, setMovies] = useState([]);
  

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
       
    },[setMovies, TMBD_API_URL])


    return(
        <section className="">
            <h3 className="flex justify-center items-center text-3xl font-semibold text-center text-gray-800 mb-10 md:text-4xl lg:text-5xl"><ion-icon className="text-amber-600 fill-amber-600 text-5xl"  name="flame-outline"></ion-icon><span>Popular Movies</span></h3>
            <ul className="grid grid-cols-3 gap-4 p-3 lg:grid-cols-4 2xl:grid-cols-6">
                {movies.map((movie) => (
                    <MovieBoxCard key={movie.id} original_title={movie.original_title} poster={movie.poster_path} overview={movie.overview} release_date={movie.release_date} rate={movie.vote_average}/>
                ))}
            </ul>
        </section>
    );
}