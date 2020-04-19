import React from 'react';
import Navbar from '../Navbars/Navbar';

const Header = ({ loaded }) => {
  return (
    <div>
      <Navbar loaded={loaded}/>
    </div>
  );
};

export default Header;