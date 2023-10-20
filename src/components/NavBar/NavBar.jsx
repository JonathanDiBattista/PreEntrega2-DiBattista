import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption) {
      navigate(`/category/${selectedOption}`);
    }
  };

  return (
    <div>
      <nav className="m-auto h-20 bg-neutral-400 flex">
        <ul className="flex justify-around items-center gap-10">
          <li>
            <Link className="no-underline text-2xl text-red-700" to="/">
              MOVIEZ
            </Link>
          </li>
          <li>
            <select
              className="bg-neutral-900 p-2 rounded-md text-white"
              onChange={handleSelectChange}
              defaultValue=""
            >
              <option className="text-white" value="" disabled>
                Category
              </option>
              <option className="text-white" value="Avengers">
                Avengers
              </option>
              <option className="text-white" value="Batman">
                Batman
              </option>
              <option className="text-white" value="Matrix">
                Matrix  
              </option>
            </select>
          </li>
          <li>
            <Link className="bg-neutral-900 p-2 rounded-md text-white no-underline" to="/Cart">
            CART
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
