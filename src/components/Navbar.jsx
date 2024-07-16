import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        {/* <img src={logo} alt='logo' className='w-10 h-10 object-contain' /> */}
        <img src="https://img.freepik.com/free-vector/p-gradient-creative-logo-design-vector_474888-3916.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720828800&semt=ais_user" alt='logo' className='w-10 h-10 object-contain rounded-md' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
