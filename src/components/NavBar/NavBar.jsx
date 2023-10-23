import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "Home") {
      navigate("/");
    } else if (selectedOption === "Cart") {
      navigate("/cart"); 
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
              <option className="text-white" value="Home">
                Home
              </option>
              <option className="text-white" value="Cart">
                Cart
              </option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
