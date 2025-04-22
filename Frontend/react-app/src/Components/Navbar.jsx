function Navbar() {
    return (
      <nav className="bg-blue-700 w-full py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-white rounded-full p-2">
            {/* <img src={logo} alt="Logo" width="32" height="32" /> */}
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <NavLink text="About us" />
            <NavLink text="What we do" />
            <NavLink text="Our Team" />
            <NavLink text="Get involved" />
            <button className="bg-red-500 text-white px-6 py-2 rounded-full font-bold">
              Donate Now
            </button>
          </div>
        </div>
      </nav>
    );
  }
  
  function NavLink({ text }) {
    return (
      <a href="#" className="text-white hover:text-gray-200 font-medium">
        {text}
      </a>
    );
  }


  export default Navbar;