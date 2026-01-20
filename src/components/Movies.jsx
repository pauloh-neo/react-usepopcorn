import { MovieBoxCard } from "./MovieBoxCard";

export function Movies(){

    const arrNum = Array.from({length: 10}, (_, i) => i + 1)
    console.log(arrNum)

    return(
        <section className="mt-2">
            <h2>Movies</h2>
            <ul className="grid grid-cols-6 gap-4 p-3">
                {arrNum.map((el) => (
                    <MovieBoxCard key={el}/>
                ))}
            </ul>
        </section>
    );
}