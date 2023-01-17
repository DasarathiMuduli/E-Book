import React from "react";
function InfoHeader(){
    return (
        <>
        <div className="topbar border-bottom d-none d-md-block">
            <div className="container">
                <div className="topbar__nav d-md-flex justify-content-between align-items-center font-size-2">
                <ul className="topbar__nav--left nav">
                    <li className="nav-item">
                    <span className="link-black-100">Free Shipping on Orders Over $99 </span>
                    </li>
                </ul>
                <ul className="topbar__nav--right nav">
                    <li className="nav-item">
                    <a href="#" className="nav-link p-2 link-black-100 d-flex align-items-center">
                        <i className="glph-icon flaticon-pin mr-2 font-size-3"></i>Store Location </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link p-2 link-black-100 d-flex align-items-center">
                        <i className="glph-icon flaticon-sent mr-2 font-size-3"></i>Track Your Order </a>
                    </li>
                    <li className="nav-item">
                    <div className="position-relative h-100">
                        <a id="basicDropdownHoverInvoker" className="d-flex align-items-center h-100 dropdown-nav-link p-2 dropdown-toggle nav-link link-black-100" href="javascript:;" role="button" aria-controls="basicDropdownHover" aria-haspopup="true" aria-expanded="false" data-unfold-event="hover" data-unfold-target="#basicDropdownHover" data-unfold-type="css-animation" data-unfold-duration="300" data-unfold-delay="300" data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut"> USD <i className=""></i>
                        </a>
                        <div id="basicDropdownHover" className="dropdown-menu dropdown-unfold right-0 left-auto" aria-labelledby="basicDropdownHoverInvoker">
                        <a className="dropdown-item active" href="#">INR</a>
                        <a className="dropdown-item" href="#">Euro</a>
                        <a className="dropdown-item" href="#">Yen</a>
                        </div>
                    </div>
                    </li>
                    <li className="nav-item">
                    <div className="position-relative h-100">
                        <a id="basicDropdownHoverInvoker1" className="d-flex align-items-center h-100 dropdown-nav-link p-2 dropdown-toggle nav-link link-black-100" href="javascript:;" role="button" aria-controls="basicDropdownHover1" aria-haspopup="true" aria-expanded="false" data-unfold-event="hover" data-unfold-target="#basicDropdownHover1" data-unfold-type="css-animation" data-unfold-duration="300" data-unfold-delay="300" data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut"> English <i className=""></i>
                        </a>
                        <div id="basicDropdownHover1" className="dropdown-menu dropdown-unfold right-0 left-auto" aria-labelledby="basicDropdownHoverInvoker1">
                        <a className="dropdown-item active" href="#">Tamil</a>
                        <a className="dropdown-item" href="#">Arabic</a>
                        <a className="dropdown-item" href="#">French</a>
                        </div>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </>
    );
}
export default InfoHeader;