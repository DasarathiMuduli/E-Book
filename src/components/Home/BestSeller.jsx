import React from "react";
function BestSeller(){
    return(
        <>
            <section class="space-bottom-3 product-single">
                <div class="bg-gray-200 space-top-2">
                <div class="container">
                    <div class="js-slick-carousel u-slick" data-pagi-classes="d-xl-none text-center u-slick__pagination my-4 position-absolute right-0 left-0" data-arrows-classes="d-none d-xl-block u-slick__arrow u-slick__arrow--v1 u-slick__arrow-centered--y rounded-circle box-shadow-1" data-arrow-left-classes="flaticon-back u-slick__arrow-inner u-slick__arrow-inner--left ml-lg-n10" data-arrow-right-classes="flaticon-next u-slick__arrow-inner u-slick__arrow-inner--right mr-lg-n10">
                    <div class="product position-relative">
                        <div class="d-md-flex justify-content-center space-top-lg-2 space-bottom-lg-4 z-index-2 position-relative">
                        <div class="woocommerce-loop-product__thumbnail mb-6 mb-md-10 mb-lg-0">
                            <div class="position-relative">
                                <a href="../shop/single-product-v3.html" class="d-block">
                                    <img src="img1.jpg" class="img-fluid" alt="image-description"/>
                                </a>
                                <div class="d-none badge badge-lg badge-primary-home-v3 position-absolute badge-pos--top-left text-gray-200 rounded-circle d-lg-flex flex-column align-items-center justify-content-center">
                                    <h6 class="font-weight-medium mb-n2">save</h6>
                                    <span class="font-size-5 font-weight-medium">$49</span>
                                </div>
                            </div>
                        </div>
                        <div class="woocommerce-loop-product__body ml-md-5 ml-lg-10 max-width-410 pt-lg-10 mb-6 mb-md-0">
                            <div class="text-uppercase font-size-1 mb-1 text-truncate">
                            <a href="../shop/single-product-v3.html" tabindex="0">Kindle Edition</a>
                            </div>
                            <h2 class="woocommerce-loop-product__title product__title font-weight-bold mb-2 h-dark font-size-10">
                            <a href="../shop/single-product-v3.html" tabindex="0">Where the Crawdads Sing</a>
                            </h2>
                            <div class="font-size-2  mb-1 text-truncate">
                            <a href="../others/authors-single.html" class="text-gray-700" tabindex="0">Kelly Harms</a>
                            </div>
                            <div class="price d-flex align-items-center font-weight-medium font-size-26 mb-4">
                            <ins class="text-decoration-none mr-2">
                                <span class="woocommerce-Price-amount amount text-dark">
                                <span class="woocommerce-Price-currencySymbol">$</span>37 </span>
                            </ins>
                            <del class="font-size-1 font-weight-regular text-gray-700">
                                <span class="woocommerce-Price-amount amount font-size-1">
                                <span class="woocommerce-Price-currencySymbol">$</span>78,96 </span>
                            </del>
                            </div>
                            <div class="product__rating d-none align-items-center font-size-2 mb-3">
                            <div class="text-yellow-darker mr-2">
                                <small class="fas fa-star"></small>
                                <small class="fas fa-star"></small>
                                <small class="fas fa-star"></small>
                                <small class="far fa-star"></small>
                                <small class="far fa-star"></small>
                            </div>
                            <div class="">(3,714)</div>
                            </div>
                            <div class="d-flex align-items-center">
                            <a href="../shop/single-product-v3.html" class="text-uppercase text-dark h-dark font-weight-medium mr-2">
                                <span class="product__add-to-cart">ADD TO CART</span>
                                <span class="product__add-to-cart-icon font-size-4">
                                <i class="flaticon-icon-126515"></i>
                                </span>
                            </a>
                            <a href="../shop/single-product-v3.html" class="mr-1 h-p-bg btn btn-outline-dark border-0">
                                <i class="flaticon-switch"></i>
                            </a>
                            <a href="../shop/single-product-v3.html" class="h-p-bg btn btn-outline-dark border-0">
                                <i class="flaticon-heart"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div class="text-stroke-1 font-size-xl-160 mb-0 position-absolute bottom-0 text-center right-0 left-0">Best Seller</div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}
export default BestSeller;