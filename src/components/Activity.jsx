

function Activity(){
    return (
        <div className ="grid grid-cols-2 h-dvh">

          <div className = "w-70">
            <img src ="src/assets/activity.gif" alt = "ice activities"/>
          </div>

          <div className = "font-semibold">
            <h1 className = "text-cyan-600 text-9xl p-10">Our Activities</h1>
            <h1 className="text-white p-20">From CTFs to hackathons, this club empowers members to explore real-world cybersecurity 
              challenges, sharpen their ethical hacking skills, and collaborate to solve puzzles in digital security.</h1>
            <a 
              href="https://www.linkedin.com/company/ice-cybersecurity-enthusiast/posts/?feedView=all" 
              target="_blank" 
              className ="mx-10 inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Visit Us
            </a>
          </div>

          

    </div>
    
    )
}

export default Activity