import { Star } from "lucide-react";

export function BoxCard({poster, original_title, rate}){
    return(
        <li className="flex flex-col justify-center items-center border border-gray-200 shadow-md transition-all duration-200 ease-out hover:scale-105 cursor-pointer">
            <img className="w-full h-full bg-cover bg-center" src={`https://image.tmdb.org/t/p/w500${poster}`} alt="Movie Poster"></img>
            <h3 className="text-[1.125rem] font-medium text-gray-900">{original_title}</h3>
            <div className='flex items-center gap-2 mt-1'>
                    <Star className='text-amber-500 fill-amber-500' size={18}/>
                    <span className="text-[0.9375rem] text-gray-500 font-bold">{rate}</span>
            </div>
        </li>
    )
}