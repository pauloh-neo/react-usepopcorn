import { Hero } from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {
  return (
     <header className="font-display bg-slate-200 h-svh m-1">
        <Navbar/>
        <main className="h-full">
          <Hero/>
        </main>
     </header>
  )
}

export default App
