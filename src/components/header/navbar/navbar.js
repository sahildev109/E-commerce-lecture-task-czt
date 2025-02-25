import "./navbar.css";
import { NavLink } from "react-router";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div>
          <NavLink to="/Men" end>
            Men
          </NavLink>
        </div>
        <div>
          <NavLink to="/Women" end>
            Women
          </NavLink>
        </div>
        <div>
          <NavLink to="/kids" end>
            Kids
          </NavLink>
        </div>
        <div>
          <NavLink to="/New-&-featured" end>
            New & featured
          </NavLink>
        </div>
        <div>
          <NavLink to="/Gifts" end>
            Gifts
          </NavLink>
        </div>
      </div>
      <div className="navbar-logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 96 46"><path d="M0 0h95.293v5.728H0zm4.243 37.83v-7.085H0v-4.602h4.243V15.139h5.718v11.004h6.005v4.602H9.961v6.437c0 2.014 1.222 3.129 3.416 3.129.791 0 1.69-.108 2.589-.18v4.71a13.785 13.785 0 0 1-3.632.468c-4.89 0-8.127-2.985-8.127-7.48m15.535-1.222V26.143h5.717v9.96c0 2.59 1.654 4.315 4.1 4.315 2.445 0 4.1-1.726 4.1-4.315v-9.96h5.717v10.5c0 5.214-3.92 8.702-9.817 8.702-5.898 0-9.817-3.488-9.817-8.702m24.129-21.504h5.718V44.69h-5.718zm9.601 20.281c0-5.97 4.207-9.925 10.464-9.925 6.257 0 10.464 3.956 10.464 9.925 0 5.97-4.171 9.889-10.464 9.889s-10.464-3.956-10.464-9.889m15.498 0c0-3.092-2.013-5.178-5.034-5.178-3.02 0-5.034 2.05-5.034 5.178 0 3.129 2.013 5.142 5.034 5.142 3.02 0 5.034-2.013 5.034-5.142m7.983 3.129h5.106c.288 1.762 2.014 2.625 4.495 2.625 1.906 0 3.093-.684 3.093-1.69 0-3.632-11.903.035-11.903-7.948 0-3.595 3.345-6.005 8.45-6.005 5.107 0 8.487 2.158 8.919 6.293H89.97c-.252-1.546-2.05-2.337-3.848-2.337s-2.805.575-2.805 1.69c0 3.704 12.01.144 12.01 8.09 0 3.812-3.344 6.078-8.881 6.078-5.538 0-9.278-2.697-9.458-6.76" fill="currentColor"></path></svg>
      </div>
      <div className="navbar-user-info">
      <FaSearch size={20} cursor={'pointer'}/>
      <MdOutlineShoppingBag size={24} cursor={'pointer'}/>
      <button >Login</button>
        </div>
    </div>
  );
};

export default Navbar;
