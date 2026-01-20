import {Popcorn, Search} from 'lucide-react'

export default function Navbar(){
    return(
        <nav className='flex justify-around items-center bg-slate-900 p-5 rounded-2xl'>
            <a href="#" className='flex items-center transition-transform duration-150 hover:scale-110'>
                <Popcorn className='text-gray-300    ' size={52}/>
                <h1 className='text-gray-100 text-2xl'>USE POPCORN</h1>
            </a>
            <form className='relative w-max'>
                <Search className='absolute top-3 left-3 text-gray-600' size={20}/>

                <input className='
                    w-96 bg-slate-200 p-2 rounded-2xl px-10 py-3
                    text-gray-800
                    placeholder:text-gray-500 cursor-pointer outline-none'
                    type="search"
                    placeholder="Search..." 
                    maxLength={50}
                />
            </form>
        </nav>
    )
}