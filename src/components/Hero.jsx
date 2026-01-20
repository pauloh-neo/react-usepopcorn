import {MoveRight, Star} from 'lucide-react'
import heroImg from "/hero-img.jpg"
import { useEffect, useState } from 'react'

/*thumbnail*/

export function Hero(){

    const [users, setUsers] = useState([]);
    

    const arrNum = Array.from({length:5}, (_, i) => i+1)

    useEffect(() => {
        async function fetchUsers(){
            try{
                const res = await fetch(
                    "https://randomuser.me/api/?results=5"
                );

                const data = await res.json();
                setUsers(data.results);
               
            }catch(error)
            {
                console.error(error);
            }
        }
        fetchUsers();
        
    }, [])

    return(
        <section className="grid grid-cols-2 gap-2 p-6 bg-slate-200 text-gray-900 items-center h-svh">
            <div className="flex flex-col gap-8 p-10">
                <h2 className="text-[3.25rem] font-bold">Step Into the World of Movies</h2>
                <p className="text-[1.25rem] font-semibold text-gray-500">Subscribe to discover new releases, timeless classics, and personalized recommendations made just for you.</p>
                <a className="text-gray-700 group inline-flex items-center justify-center gap-2
                    rounded-2xl bg-amber-300 px-6 py-4
                    text-2xl font-bold
                    w-fit
                    transition-all duration-200 ease-out
                    hover:bg-amber-400 hover:scale-105
                    focus:outline-none focus:ring-2 focus:ring-amber-500
                    active:scale-95" href="#" role="button"
                >
                    Subscribe Now
                    <MoveRight size={24}/> 
                </a>
                <ul className='relative flex items-center gap-1'>
                    
                    {users.map((user) => (
                        <li className='' key={user.login.uuid}>
                            <img className='rounded-full' src={user.picture.thumbnail} alt="User Picture" />
                        </li>
                    ))}
                </ul>  
                    <ul className='flex flex-row items-center'>
                        {arrNum.map((star) => (
                            <li key={star}>
                                <Star className='text-yellow-600 fill-amber-500' size={18}/>
                            </li>
                        ))}
                    </ul>
            </div>
            <div className='flex justify-center items-center'>
                <img className='rounded-2xl bg-center bg-cover' src={heroImg} alt="A banner of movies" />
            </div>
        </section>
    )
}