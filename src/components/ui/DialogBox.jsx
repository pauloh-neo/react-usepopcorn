import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MovieBoxCard } from "../MovieBoxCard"
import { BoxCard } from "./BoxCard"
import { useEffect, useState } from "react"
import { Search } from "lucide-react"
import { ErrorBox } from "./ErrorBox"


export function DialogBox({movies, movieName, setMovies, setMovieName}) {
    const[isOpen, setIsOpen] = useState(false);

    const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL


     useEffect(() => {
            async function fetchMovies(){
                if (!movieName.trim()) {
                    setMovies([])
                    return
                }
                try{
                    const res = await fetch(`${BASE_URL}&query=${
                        encodeURIComponent(movieName
                )}&include_adult=false&language=en-US&page=1`,
               )
    
                    const data = await res.json()
    
                    setMovies(data.results?? [])
    
                }catch(error){
                    console.error(error)
                }
    
            }
            fetchMovies()
           
           
        },[movieName, setMovies, BASE_URL])
    

    return (
        <Dialog >
        <DialogTrigger asChild>
            <Button className="border-none font-semibold bg-slate-700 text-gray-100 text-[15px] p-5 cursor-pointer" variant="outline">Search...</Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col justify-center items-center h-[90vh] overflow-hidden">
            <form className='relative w-max'>
                <Search className='absolute top-3 left-3 text-gray-600' size={20}/>

                <input className='
                    w-96 bg-slate-200 p-2 rounded-2xl px-10 py-3
                    text-gray-800
                    placeholder:text-gray-500 cursor-pointer outline-none'
                    type="search"
                    placeholder="Search..." 
                    maxLength={50}
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}
                   
                />
            </form>
            <ul className="grid grid-cols-4 overflow-y-auto px-4 gap-4">
                {movies.map((movie) => (
                    <BoxCard key={movie.id} original_title={movie.original_title} poster={movie.poster_path}/>
                ))}
            </ul>
            {movieName == 0 && <ErrorBox>Find your movie...</ErrorBox>}
        </DialogContent>
        </Dialog>
    )
}
