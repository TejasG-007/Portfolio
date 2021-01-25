import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/ScrollToTop';
import {React,useEffect,useState} from 'react';
import Loader from 'react-loader-spinner';
import NavbarR from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


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
        <Loader style={{marginTop:'20%',}} className="text-center"
         type="Bars"
         color="#bc2a8d"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />:



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
