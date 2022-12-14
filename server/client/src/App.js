import './App.css';
import Home from './pages/home';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Page6 from './pages/page6';
import Footer from './pages/page7';
import Notfound from './pages/notfound';
import Contact from './pages/contact';
import Resume from './pages/resume';
function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
    <Route path='/buynow' element={<Page6 />} />
    <Route path='/' element={[<Home/>,<Page2/>,<Page3 />,<Page4 />,<Page5 />]} />
    <Route path='*' element={<Notfound />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/resumeupload' element={<Resume />} />
    </Routes>
    <Footer />
   </BrowserRouter>

 
 
   </>
  );
}

export default App;
