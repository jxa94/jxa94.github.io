import './App.css';
import Navbar from './components/Navbar'
/*import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'*/


function App() {
  return (
    <div className="relative">
      {/*<MusicPlayer />*/}
      <Navbar />
      <div className="bg-red-500 text-white p-2">TAILWIND TEST</div>

      <div className="pt-20 text-center"> 
        <h1 className="text-3xl font-bold">Hello World!</h1>
      </div>
      {/*<Hero />
      <About />
      <Resume />
      <Education />
      <Hobbies />
      <Footer />*/}
    </div>
  )
}

export default App
