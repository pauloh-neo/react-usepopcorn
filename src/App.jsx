import { useState } from "react"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Movies } from "./components/Movies"
import Navbar from "./components/Navbar"
import { DialogBox } from "./components/ui/DialogBox"


function App() {
  const [movies, setMovies] = useState([])
  const [movieName, setMovieName] = useState("")

  return (
    <>
     <header className="font-display m-1">
        <Navbar movies={movies} movieName={movieName} setMovies={setMovies} setMovieName={setMovieName}/>
       
     </header>
      <main className="flex flex-col gap-5">
        <Hero/>
        <Movies/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
