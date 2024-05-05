import Navbar from './components/navbar/Navbar'
import './App.css'
import Banner from './components/banner/Banner'
import Features from './components/features/Features'
import Projects from './components/project/Project'

function App() {
  

  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
      <div className='max-w-screen-2xl mx-auto px-16'>
     <Navbar />
     <Banner />
     <Features />
     <Projects />
     </div>
     </div>
  )
}

export default App
