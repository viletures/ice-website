import Header from "./components/Header"
import Objectives from "./components/Objectives";
import Activity from "./components/Activity";
import yi from "./assets/yi.png";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className = "bg-black">
      <Header/>
      <div>
        
        <div className = "grid grid-cols-2 bg-white mx-10 rounded-xl">
          <img src = {yi} className = "items-center"/>
          <h1 className = "text-xl text-black text-center p-20">A better cybersecurity for the community</h1>
        </div>

        

        <div className = "text-xl text-white p-10 text-center">Who are we?</div>
        <div className = "border-white border-3 p-3"></div>

        <div className = "text-xl text-white p-10 text-center">Our Objectives</div>
        <Objectives></Objectives>   

        <div className = "text-xl text-white p-10">Activity</div>
        <Activity></Activity>

        <Footer></Footer>

      </div>
      </div>
    
    
  )
}


export default App