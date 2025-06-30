import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { toggle } from '../features/Toggle/ToggleSlice';

function Navigation() {
    const dispatch = useDispatch();
    const isToggled = useSelector((state) => state.toggle.isToggled)

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full flex items-center gap-5 shadow-lg"
        style={isToggled?{backgroundColor:"black"}:{backgroundColor:"white"}}
    >

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/99adityapandey/"
          target="_blank"
          className="text-white hover:text-blue-500 transition-transform duration-700 ease-in-out hover:translate-y-[-20px]"
        >
          <i className="fa-brands fa-linkedin text-2xl"
            style={isToggled?{color:"white"}:{color:"black"}}
          ></i>
        </a>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="text-white hover:text-green-400 transition-transform duration-700 ease-in-out hover:translate-y-[-20px]"
        >
          <i className="fa-solid fa-file text-2xl"
            style={isToggled?{color:"white"}:{color:"black"}}
            >
          </i>
        </a>

        {/* Email */}
        <a
          href="adityapandey18501@gmail.com"
          className="text-white hover:text-pink-400 transition-transform duration-700 ease-in-out hover:translate-y-[-20px]"
        >
          <i className="fa-solid fa-envelope text-2xl"
          style={isToggled?{color:"white"}:{color:"black"}}
          >
          </i>
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/Adi_insights"
          className="text-white hover:text-pink-400 transition-transform duration-700 ease-in-out hover:translate-y-[-20px]"
        >
          <i className="fa-brands fa-x-twitter text-2xl"
            style={isToggled?{color:"white"}:{color:"black"}}
          ></i>
        </a>

        {/* Theme Toggle */}
        <button className="transition duration-300 focus:outline-none focus:ring-0"
            onClick={()=>dispatch(toggle())}
            style={isToggled?{backgroundColor:"black"}:{backgroundColor:"white"}}
        >
            {
                isToggled ? <i class="fa-solid fa-moon text-2xl text-white"></i> : <i className="fa-solid fa-sun text-2xl text-black"></i>
            }
          
        </button>
      </div>
  )
}

export default Navigation