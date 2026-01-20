export function MovieBoxCard(){
    return(
        <li className="flex flex-col gap-x-2 gap-y-3 border border-gray-200 shadow-md rounded-t-lg overflow-hidden">
            <img className="w-full bg-cover bg-center" src="https://placeholdpicsum.dev/300x200/4f46e5/ffffff" alt="Placeholder"></img>
            <div className="flex flex-col justify-center items-center p-2">
                <h3 className="text-[1.125rem] font-medium text-gray-900">Scope of Work</h3>
                <p className="text-[0.9375rem] text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </li>
    )
}