import React from "react";
function SeachHeader(){
    return (
        <>
            <div className="bg-primary-home-v3 py-2">
                <div className="container my-1">
                <div className="d-md-flex align-items-center position-relative py-1">
                    <div className="offcanvas-toggler mr-md-8 d-flex d-md-block align-items-center">
                    <a id="sidebarNavToggler2" href="javascript:;" role="button" className="cat-menu text-white" aria-controls="sidebarContent2" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent2" data-unfold-type="css-animation" data-unfold-overlay='{
                                            "className": "u-sidebar-bg-overlay",
                                            "background": "rgba(0, 0, 0, .7)",
                                            "animationSpeed": 100
                                        }' data-unfold-animation-in="fadeInLeft" data-unfold-animation-out="fadeOutLeft" data-unfold-duration="100">
                        <svg width="20px" height="18px">
                        <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M-0.000,-0.000 L20.000,-0.000 L20.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z" />
                        <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M-0.000,8.000 L15.000,8.000 L15.000,10.000 L-0.000,10.000 L-0.000,8.000 Z" />
                        <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M-0.000,16.000 L20.000,16.000 L20.000,18.000 L-0.000,18.000 L-0.000,16.000 Z" />
                        </svg>
                        <span className="ml-3">Browse categories</span>
                    </a>
                    <ul className="nav d-md-none ml-auto">
                        <li className="nav-item">
                        <a id="sidebarNavToggler9" href="javascript:;" role="button" className="px-2 nav-link text-white" aria-controls="sidebarContent9" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent9" data-unfold-type="css-animation" data-unfold-overlay='{
                                                    "className": "u-sidebar-bg-overlay",
                                                    "background": "rgba(0, 0, 0, .7)",
                                                    "animationSpeed": 500
                                                }' data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight" data-unfold-duration="500">
                            <i className="glph-icon flaticon-user"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="site-search ml-xl-0 ml-md-auto w-r-100 flex-grow-1 mr-md-5 mt-2 mt-md-0 py-2 py-md-0">
                    <form className="form-inline my-2 my-xl-0">
                        <div className="input-group input-group-borderless w-100">
                        <input type="text" className="form-control rounded-left-1 px-3 border-right" placeholder="Search for books by keyword" aria-label="Amount (to the nearest dollar)"/>
                        <div className="input-group-append ml-0">
                            <select className="d-none d-lg-block custom-select pr-7 pl-4 rounded-0 shadow-none border-0 text-dark" id="inputGroupSelect01">
                            <option selected>All Categories</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                            <button className="btn btn-primary-yellow px-3 py-2" type="submit">
                            <i className="mx-1 glph-icon flaticon-loupe text-dark"></i>
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                    <ul className="nav d-none d-md-flex">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-white">
                        <i className="glph-icon flaticon-heart font-size-4"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a id="sidebarNavToggler" href="javascript:;" role="button" className="nav-link text-white" aria-controls="sidebarContent" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent" data-unfold-type="css-animation" data-unfold-overlay='{
                                                "className": "u-sidebar-bg-overlay",
                                                "background": "rgba(0, 0, 0, .7)",
                                                "animationSpeed": 500
                                            }' data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight" data-unfold-duration="500">
                        <i className="glph-icon flaticon-user font-size-4"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a id="sidebarNavToggler1" href="javascript:;" role="button" className="nav-link pr-0 text-white position-relative" aria-controls="sidebarContent1" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent1" data-unfold-type="css-animation" data-unfold-overlay='{
                                                "className": "u-sidebar-bg-overlay",
                                                "background": "rgba(0, 0, 0, .7)",
                                                "animationSpeed": 500
                                            }' data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight" data-unfold-duration="500">
                        <span className="position-absolute bg-primary-yellow width-16 height-16 rounded-circle d-flex align-items-center justify-content-center text-dark font-size-n9 left-0">3</span>
                        <i className="glph-icon flaticon-icon-126515 font-size-4"></i>
                        <span className="d-none d-xl-inline h6 mb-0 ml-1">$40.93</span>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </>
    );
}
export default SeachHeader;