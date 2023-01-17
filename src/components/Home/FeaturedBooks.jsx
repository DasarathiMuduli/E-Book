import React from "react";
import ArtPhoto from "../tabComponent/AllTabs/ArtPhoto";
import Food from "../tabComponent/AllTabs/Food";
function FeaturedBooks(){
    return(
        <>
            <section className="space-bottom-3">
                <div className="space-3 bg-gray-200">
                    <div className="container">
                        <header className="d-md-flex justify-content-between align-items-center mb-5">
                            <h2 className="font-size-7 mb-0">Featured Books</h2>
                            <a href="../shop/v3.html" className="d-flex align-items-center text-dark">View All <span className="flaticon-next font-size-3 ml-2"></span>
                            </a>
                        </header>
                        <div className="pt-2">
                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-wd-6 ">
                                <ArtPhoto/>
                                <ArtPhoto/>
                                <ArtPhoto/>
                                <Food/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default FeaturedBooks;