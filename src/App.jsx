import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.Jsx'
import Katikaw from './pages/Katika wallet/Katikaw'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import Apropos from './pages/A propos/Apropos'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router basename="/katika-ui-proposal">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/katika_wallet' element={<Katikaw/>}/>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<Apropos/>}></Route>
        

 
       
     

 
      </Routes>

     </Router>
    

 

     
    </>
  )
}

export default App
