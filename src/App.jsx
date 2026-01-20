import { Hero } from "./components/Hero"
import { Movies } from "./components/Movies"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
     <header className="font-display m-1">
        <Navbar/>
     </header>
      <main className="flex flex-col gap-5">
        <Hero/>
        <Movies/>
      </main>
    </>
  )
}

export default App
