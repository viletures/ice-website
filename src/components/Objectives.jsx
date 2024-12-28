function Objectives(){
    return (
        <div className ="grid grid-cols-4">

          <div className="group font-semibold bg-black p-10 text-lg rounded-xl text-center w-72 h-60 mx-5 my-5 flex items-center justify-center 
          transition-all duration-300 ease-in-out hover:bg-black hover: text-white hover:border-white hover: border-3 hover:scale-105">
            <span className="group-hover:hidden text-cyan-600 text-bold text-mono text-3xl">Knowledge Sharing</span>
            <span className="hidden group-hover:inline">Build a platform for members to share insights, research, and best practices to stay 
              ahead of emerging cybersecurity threats and trends.
            </span>
          </div>

          

          <div className="group font-semibold p-10 bg-black text-lg rounded-xl text-center w-72 h-60 mx-5 my-5 flex items-center justify-center 
          transition-all duration-300 ease-in-out hover:bg-black hover: text-white hover:border-white hover: border-3 hover:scale-105">
            <span className="group-hover:hidden text-cyan-600 text-bold text-3xl">Skill Development</span>
            <span className="hidden group-hover:inline">Provide resources, workshops, and mentorship programs to help individuals enhance their 
              technical expertise and advance their careers in cybersecurity.</span>
          </div>

          

          <div className="group font-semibold p-10 bg-black text-lg rounded-xl text-center w-72 h-60 mx-5 my-5 flex items-center justify-center 
          transition-all duration-300 ease-in-out hover:bg-black hover: text-white hover:border-white hover: border-3 hover:scale-105">
            <span className="group-hover:hidden text-cyan-600 text-bold text-3xl">Community Collaboration</span>
            <span className="hidden group-hover:inline">Create opportunities for collaboration on projects, challenges, and initiatives that 
              tackle real-world security issues and drive innovation.</span>
          </div>

          

          <div className="group font-semibold p-10 bg-black text-lg rounded-xl text-center w-72 h-60 mx-5 my-5 flex items-center justify-center 
          transition-all duration-300 ease-in-out hover:bg-black hover: text-white hover:border-white hover: border-3 hover:scale-105">
            <span className="group-hover:hidden text-cyan-600 text-bold text-3xl">Ethics and Advocacy</span>
            <span className="hidden group-hover:inline">Promote ethical behavior in cybersecurity practices while advocating for privacy, data 
              protection, and the responsible use of technology in society.</span>
          </div>
    </div>
    
    )
}

export default Objectives