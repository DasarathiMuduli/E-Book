import React from "react";

function SalesBook(){
    return(
        <>
                <div className="product product__space border rounded-md bg-white">
                    <div className="product__inner overflow-hidden p-3 p-md-4d875">
                        <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                            <a href="../shop/single-product-v3.html" className="d-block">
                                <img src="img9.jpg" className="d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/>
                            </a>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                            <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="../shop/single-product-v3.html">Kindle edition</a>
                            </div>
                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                <a href="../shop/single-product-v3.html">Think Like a Monk: Train Your Mind for Peace and Purpose Everyday</a>
                            </h2>
                            <div className="font-size-2  mb-1 text-truncate">
                                <a href="../others/authors-single.html" className="text-gray-700">Jay Shetty</a>
                            </div>
                            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">$</span>37 </span>
                            </div>
                            <div className="product__rating d-none align-items-center font-size-2">
                                <div className="text-yellow-darker mr-2">
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="far fa-star"></small>
                                <small className="far fa-star"></small>
                                </div>
                                <div className="">(3,714)</div>
                            </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                            <a href="../shop/single-product-v3.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto">
                                <span className="product__add-to-cart">ADD TO CART</span>
                                <span className="product__add-to-cart-icon font-size-4">
                                <i className="flaticon-icon-126515"></i>
                                </span>
                            </a>
                            <a href="../shop/single-product-v3.html" className="mr-1 h-p-bg btn btn-outline-dark border-0">
                                <i className="flaticon-switch"></i>
                            </a>
                            <a href="../shop/single-product-v3.html" className="h-p-bg btn btn-outline-dark border-0">
                                <i className="flaticon-heart"></i>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default SalesBook;