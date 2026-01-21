import {Popcorn} from 'lucide-react'
import { DialogBox } from './ui/DialogBox'

export default function Navbar({movies, movieName, setMovies, setMovieName,}){
    return(
        <nav className='flex justify-around items-center bg-slate-900 p-5 rounded-2xl'>
            <a href="#" className='flex items-center transition-transform duration-150 hover:scale-110'>
                <Popcorn className='text-gray-300' size={52}/>
                <h1 className='text-gray-100 text-2xl'>USE POPCORN</h1>
            </a>
            <DialogBox movies={movies} movieName={movieName} setMovies={setMovies} setMovieName={setMovieName}/>
        </nav>
    )
}