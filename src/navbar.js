import React from "react";

// Navbar component
const Navbar = () => {
  const menuItems = {
    home: "Home",
    about: "About",
    contact: "Contact",
    categories: "categories"
  };
  return (
    <div className="d-inline-flex px-3 w-100">
      <a href="#home" className="text-decoration-none">
        <img
          src="https://img.freepik.com/premium-vector/hotel-logo-simple-illustration_434503-736.jpg?w=200"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-circle mt-2"
        />
      </a>
      <h3 className="mt-2 col-2">My Hotel</h3>
      <ul className="d-flex justify-content-end gap-5 w-100 mt-2">
        {Object.keys(menuItems).map((item) => (
          <li key={item} className="list-group-item">
            <a href={`#${item}`} className="text-decoration-none text-white">{menuItems[item]}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
