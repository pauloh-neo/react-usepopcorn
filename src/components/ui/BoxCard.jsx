export function BoxCard({poster, original_title}){
    return(
        <li className="flex flex-col justify-center items-center border border-gray-200 shadow-md transition-all duration-200 ease-out hover:scale-105 cursor-pointer">
            <img className="w-full h-full bg-cover bg-center" src={`https://image.tmdb.org/t/p/w500${poster}`} alt="Movie Poster"></img>
            <h3 className="text-[1.125rem] font-medium text-gray-900">{original_title}</h3>
        </li>
    )
}