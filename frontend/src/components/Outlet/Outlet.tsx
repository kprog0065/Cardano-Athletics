import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Outlet = ({ page, isNavbar }: { page: JSX.Element, isNavbar: Boolean }) => {


    return <div className="body_wrapper">
        {isNavbar && <Navbar mClass={"menu_four hosting_menu"} cClass={"w_menu"} slogo={"sticky_logo"} />}
        {page}
        <Footer />
    </div>
};

export default Outlet;