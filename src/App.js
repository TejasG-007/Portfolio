import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/ScrollToTop';
import {React,useEffect,useState} from 'react';
import NavbarR from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loader from './components/Project/P-Images/tejasg.gif';


function App() {

  const [isloading,setloading]=useState(false);

useEffect(() => {
    showing();
}, [])

const showing=()=>{
    setloading(true)
    setTimeout(()=>{
        setloading(false);

    },2000
    )
}

  return (

    
    <>
    {
        isloading?
     <div style={{ position: 'absolute', left: '50%', top: '50%',
     transform: 'translate(-50%, -50%)'}}>
       <img height="350" width="350"  src={Loader}></img>
     </div>
       :



    <Router>
      <NavbarR />
     <ScrollToTop />
     <Footer/>
    </Router>
}
</>

  );
}

export default App;
