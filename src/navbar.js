import React from "react";

const menuItems = {
  home: "Home",
  about: "About",
  contact: "Contact",
  categories: "categories"
};
// Navbar component
const Navbar = () => {
  return (
    <div className="d-inline-flex bg-dark px-3 rounded w-100 fix-top">
      <a href="#home">
        <img
          src="https://img.freepik.com/premium-vector/hotel-logo-simple-illustration_434503-736.jpg?w=200"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-circle mt-2"
        />
      </a>
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
