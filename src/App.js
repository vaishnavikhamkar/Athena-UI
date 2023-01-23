// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import LeftAnimation from './Components/LeftAnimation';
import RightAnimation from './Components/rightAnimation';
import gsap from "gsap";
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
  gsap.set(".left-content > *", {xPercent: -50, yPercent: -50});

  const ST = ScrollTrigger.create({
    trigger: ".Content",
    start: "top top",
    end: "bottom bottom",
    pin: ".right",
    
  });

  return (
    <div className="App">
      <NavBar/>
      <div className='Content'>
      <LeftAnimation/>
      <RightAnimation/>
      </div>
    </div>
  );
}

export default App;
