import React from "react";
import CommingBooks from "./CommingBooks";
function CommingSoon(){
    return(
        <>
            <section class="space-bottom-3 product-with-sidebar">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-6 mb-lg-0">
                            <header class="mb-5">
                                <h2 class="font-size-7 mb-0">Comming Soon</h2>
                            </header>
                            <div class="product product__card border rounded-md mb-5">
                                <div class="media p-4d875">
                                <a class="d-block" href="../shop/single-product-v3.html">
                                    <img src="img3.jpg" class="img-fluid" alt="image-description"/>
                                </a>
                                <div class="media-body ml-4d875">
                                    <div class="text-primary text-uppercase font-size-1 mb-1 text-truncate">
                                    <a href="../shop/single-product-v3.html">Hard Cover</a>
                                    </div>
                                    <h2 class="woocommerce-loop-product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                    <a href="../shop/single-product-v3.html">Dark in Death: An Eve Dallas Novel (In Death, Book 46)</a>
                                    </h2>
                                    <div class="font-size-2 text-gray-700 mb-1 text-truncate">
                                    <a href="../others/author-single.html" class="text-gray-700">Hillary Burton</a>
                                    </div>
                                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                    <span class="woocommerce-Price-amount amount">
                                        <span class="woocommerce-Price-currencySymbol">$</span>15 </span>
                                    </div>
                                    <div class="product__rating d-none align-items-center font-size-2">
                                    <div class="text-yellow-darker mr-2">
                                        <small class="fas fa-star"></small>
                                        <small class="fas fa-star"></small>
                                        <small class="fas fa-star"></small>
                                        <small class="far fa-star"></small>
                                        <small class="far fa-star"></small>
                                    </div>
                                    <div class="">(3,714)</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="product product__card border rounded-md">
                                <div class="media p-4d875">
                                <a class="d-block" href="../shop/single-product-v3.html">
                                    <img src="img6.jpg" class="img-fluid" alt="image-description"/>
                                </a>
                                <div class="media-body ml-4d875">
                                    <div class="text-primary text-uppercase font-size-1 mb-1 text-truncate">
                                    <a href="../shop/single-product-v3.html">Hard Cover</a>
                                    </div>
                                    <h2 class="woocommerce-loop-product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                    <a href="../shop/single-product-v3.html">The Rural Diaries: Love, Livestock, and Big Life Lessons Down on Mischief Farm</a>
                                    </h2>
                                    <div class="font-size-2 text-gray-700 mb-1 text-truncate">
                                    <a href="../others/author-single.html" class="text-gray-700">Hillary Burton</a>
                                    </div>
                                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                    <span class="woocommerce-Price-amount amount">
                                        <span class="woocommerce-Price-currencySymbol">$</span>15 </span>
                                    </div>
                                    <div class="product__rating d-none align-items-center font-size-2">
                                    <div class="text-yellow-darker mr-2">
                                        <small class="fas fa-star"></small>
                                        <small class="fas fa-star"></small>
                                        <small class="fas fa-star"></small>
                                        <small class="far fa-star"></small>
                                        <small class="far fa-star"></small>
                                    </div>
                                    <div class="">(3,714)</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                        <header class="mb-5">
                                <h2 class="font-size-7 mb-0">Comming Soon</h2>
                            </header>
                            <div className="row">
                                <CommingBooks/>
                                <CommingBooks/>
                                <CommingBooks/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CommingSoon;