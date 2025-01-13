import React from 'react';
import MobileNavbar from '@/components/Navbar/MobileNavbar';
import PCNavbar from '@/components/Navbar/PcNavbar';

const ResponsiveNavbar = () => {
  return (
    <>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden md:block w-full">
        <PCNavbar />
      </div>
    </>
  );
};

export default ResponsiveNavbar;