import {Star, CalendarHeart} from 'lucide-react'
export function MovieBoxCard({original_title, poster, overview, release_date, rate}){
    return(
        <li className="flex flex-col gap-x-2 gap-y-3 border border-gray-200 shadow-md rounded-t-lg overflow-hidden transition-all duration-200 ease-out hover:scale-105 cursor-pointer">
            {/* <img className="w-full bg-cover bg-center" src="https://placeholdpicsum.dev/300x200/4f46e5/ffffff" alt="Placeholder"></img> */}
            <img className="w-full bg-cover bg-center" src={`https://image.tmdb.org/t/p/w500${poster}`} alt="Movie Poster"></img>
            <div className="flex flex-col justify-center items-center p-2">
                <h3 className="text-[1.125rem] font-medium text-gray-900">{original_title}</h3>
                <div className='flex items-center gap-2 mt-1'>
                    <CalendarHeart size={18}/>
                    <span className="text-[0.9375rem] text-gray-400">{release_date}</span>
                </div>
                
                <div className='flex items-center gap-2 mt-1'>
                    <Star className='text-amber-500 fill-amber-500' size={18}/>
                    <span className="text-[0.9375rem] text-gray-500 font-bold">{rate}</span>
                </div>
                
            </div>
        </li>
    )
}