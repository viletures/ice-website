import Header from "./components/Header";
import Objectives from "./components/Objectives";
import Activity from "./components/Activity";
import Spline from '@splinetool/react-spline'


function App() {
  return (
    <div className = "bg-black">
      <Header/>
      <Spline scene="https://prod.spline.design/Bhzjblck6mOnLvXV/scene.splinecode" className="p-10" />
      <div>
        
          <h1 className = "text-8xl text-white font-semibold text-center">What is ICE?</h1>
          <h1 className = "text-xl text-white text-center p-40">
          ICE is a small but growing student-led cybersecurity community aiming to cultivate more cybersecurity enthusiasts, 
          cyber defenders and hackers from students. We do what we love and share what we know. Join us as we work together 
          to build a stronger cybersecurity community around students!</h1>
          
        <div className = "bg-cyan-700 text-xl text-white text-center text-top text-4xl h-dvh">
          <h1 className = " text-white font-semibold  font-sans p-20 text-8xl">Our Objectives</h1>
          <Objectives></Objectives>  
        </div>
     
        <div className = "p-10">
        <Activity></Activity>
        </div>
          
        <div className = "grid grid-cols-6 mx-10 bg-cyan-600 rounded p-5">
          <h1 className ="text-xl font-semibold text-white">CONTACT US</h1>
          <div className = "bg-white h-10 w-0.5"/>
          <a href = "https://www.linkedin.com/company/ice-cybersecurity-enthusiast/posts/?feedView=all">
            <img src = "src/assets/linked in.png" className = "w-10"/>
          </a>
        </div>

      </div>
      </div>
    
    
  )
}


export default App