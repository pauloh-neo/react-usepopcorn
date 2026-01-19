import { Hero } from "./components/Hero"
import Navbar from "./components/NavBar"


function App() {
  return (
     <header className="font-display bg-slate-200 h-svh">
        <Navbar/>
        <main className="h-full">
          <Hero/>
        </main>
     </header>
  )
}

export default App
