function Header(){
    return (
        <div className = " bg-black text-center"> 
            <div className ="grid grid-cols-6 flex justify-between">
                <img src="src/assets/ice logo.jpg" alt="ice logo" className="w-24 p-10"/>
                <div className = "bg-black h-0.5 my-12"></div>
                <div className = "bg-black h-0.5 my-12"></div>
                <div className="text-white text-lg hover:text-sky-500 my-10 font-semibold ">OUR LINE UP</div>
                <div className="text-white text-lg hover:text-sky-500 my-10 font-semibold ">ABOUT</div>
                <div className="text-white text-lg hover:text-sky-500 my-10 font-semibold ">CONTACT US</div>
            </div>

            </div>
            

        
        
    )
}
export default Header;