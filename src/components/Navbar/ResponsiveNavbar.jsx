import React from 'react';
import MobileNavbar from '@/components/Navbar/MobileNavbar';
import PCNavbar from '@/components/Navbar/PcNavbar';

const ResponsiveNavbar = () => {
  return (
    <>
      <div className="navbar-wrapper mobile">
        <MobileNavbar />
      </div>
      <div className="navbar-wrapper pc w-full">
        <PCNavbar />
      </div>
    </>
  );
};

export default ResponsiveNavbar;