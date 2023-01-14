import React from "react";
import SeachHeader from "./SearchHeader";
import InfoHeader from './InfoHeader';
import MenuHeader from "./MenuHeader";
function Header(){
    return(
        <>
            <header id="site-header" className="site-header__v3">
                <InfoHeader/>
                <div className="masthead">
                    <MenuHeader/>
                    <SeachHeader/>
                </div>
            </header>
        </>
    )
}
export default Header;