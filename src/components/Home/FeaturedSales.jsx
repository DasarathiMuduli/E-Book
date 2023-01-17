import React from "react";
import SalesBook from "./SalesBook";
function FeaturedSales(){
    return(
        <>
            <section className="space-bottom-3 product-with-banner">
                <div className="container">
                    <header className="d-md-flex justify-content-between mb-5">
                        <h2 className="font-size-7">Featured Books Sales</h2>
                    </header>
                    <div className="row">
                        <div className="col-lg-8 mb-5 mb-md-0">
                            <ul className="products row row-cols-2 row-cols-lg-2 row-cols-xl-3 row-cols-wd-4 list-unstyled mb-0">
                            <li className="col">
                                <div className="mb-5">
                                    <SalesBook/>
                                </div>
                            </li>
                            <li className="col">
                                <div className="mb-5">
                                    <SalesBook/>
                                </div>
                            </li>
                            <li className="col">
                                <div className="mb-5 mb-lg-0 mb-xl-5">
                                    <SalesBook/>
                                </div>
                            </li>
                            <li className="col">
                                <div className="mb-5 mb-lg-0 mb-wd-5">
                                    <SalesBook/>
                                </div>
                            </li>
                            <li className="col d-md-none d-xl-block">
                                <div className="mb-0">
                                    <SalesBook/>
                                </div>
                            </li>
                            <li className="col d-md-none d-xl-block">
                                <div className="mb-0">
                                    <SalesBook/>
                                </div>
                            </li>
                            <li className="col d-md-none d-wd-block">
                                <SalesBook/>
                            </li>
                            <li className="col d-md-none d-wd-block">
                                <SalesBook/>
                            </li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <div className="banner py-6 py-lg-0 px-3 px-md-4 px-xl-8 d-flex h-100 align-items-center rounded-md bg-primary-home-v3">
                            <div className="banner__body">
                                <div className="banner__image pb-1 mb-5">
                                <img src="simg1.png" className="img-fluid" alt="image-description"/>
                                </div>
                                <h3 className="banner_text m-0">
                                <span className="d-block mb-1 font-size-10 font-weight-regular text-white">Get Extra</span>
                                <span className="d-block mb-3 font-size-12 font-weight-medium text-white">Sale -25%</span>
                                <span className="d-block mb-5 text-uppercase font-size-4 font-weight-regular text-gray-400">On Order Over $100</span>
                                </h3>
                                <a href="../shop/v3.html" className="btn btn-warning btn-wide rounded-md">View More</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default FeaturedSales;