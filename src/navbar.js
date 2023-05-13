import React from 'react';
import Room from './room';

const Navbar = () => {
  return (
    <div>
      <a href={<Room />}>
        <img src="https://img.freepik.com/premium-vector/hotel-logo-simple-illustration_434503-736.jpg?w=200" alt="Logo" />
      </a>
    </div>
  );
};

export default Navbar;
