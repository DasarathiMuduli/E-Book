import React, { useState }  from "react";
import ArtPhoto from "../tabComponent/AllTabs/ArtPhoto";
import Food from "../tabComponent/AllTabs/Food";
import TabContent from "../tabComponent/tabController/TabContent";
import TabNavItem from "../tabComponent/tabController/TabNavItem";
const FeaturedCategory = () => {
	const [activeTab, setActiveTab] = useState("tab1");
    return(
        <>
			<section className="space-bottom-3">
				<div className="container">
					<header className="d-md-flex justify-content-between align-items-center mb-5">
						<h2 className="font-size-7 mb-4 mb-md-0">Featured Categories</h2>
						<a href="../shop/v3.html" className="d-flex h-primary">All Categories <span className="flaticon-next font-size-3 ml-2"></span>
						</a>
					</header>
					<ul className="px-5 nav justify-content-between bg-gray-200 rounded-md pb-2 py-md-3 mb-5 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visible" role="tablist">
						<TabNavItem  id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}>
							<figure className="d-md-block mb-0 text-primary-indigo">
								<i className="glyph-icon flaticon-gallery font-size-12"></i>
							</figure>
							<span className="tabtext font-size-3 font-weight-medium text-dark">Arts & Photography</span>
						</TabNavItem>
						<TabNavItem  id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}>
							<figure className="d-md-block mb-0 text-tangerine">
							<i className="glyph-icon flaticon-cook font-size-12"></i>
							</figure>
							<span className="tabtext font-size-3 font-weight-medium text-dark">Food & Drink</span>
						</TabNavItem>
						<TabNavItem  id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}>
							<figure className="d-md-block mb-0 text-chili">
								<i className="glyph-icon flaticon-like font-size-12"></i>
							</figure>
							<span className="tabtext font-size-3 font-weight-medium text-dark">Romance</span>
						</TabNavItem>
						<TabNavItem  id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}>
							<figure className="d-md-block mb-0 text-carolina">
								<i className="glyph-icon flaticon-doctor font-size-12"></i>
							</figure>
							<span className="tabtext font-size-3 font-weight-medium text-dark">Health</span>
						</TabNavItem>
						<TabNavItem  id="tab5" activeTab={activeTab} setActiveTab={setActiveTab}>
							<figure className="d-md-block mb-0 text-punch">
								<i className="glyph-icon flaticon-resume font-size-12"></i>
							</figure>
							<span className="tabtext font-size-3 font-weight-medium text-dark">Biography</span>
						</TabNavItem>
						<TabNavItem  id="tab6" activeTab={activeTab} setActiveTab={setActiveTab}>
							<figure className="d-md-block mb-0">
								<i className="icon glyph-icon flaticon-jogging font-size-12"></i>
							</figure>
							<span className="tabtext font-size-3 font-weight-medium text-dark">Sports</span>
						</TabNavItem>
						<TabNavItem  id="tab7" activeTab={activeTab} setActiveTab={setActiveTab}>
							<figure className="d-md-block mb-0">
								<i className="icon glyph-icon flaticon-baby-boy font-size-12"></i>
							</figure>
							<span className="tabtext font-size-3 font-weight-medium text-dark">Children</span>
						</TabNavItem>
					</ul>
				</div>
				<div className="container">
					<div className="tab-content">
						<TabContent id="tab1" activeTab={activeTab}>
							<div className="pt-2">
            					<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-wd-6 ">
									<ArtPhoto/>
									<ArtPhoto/>
									<ArtPhoto/>
									<ArtPhoto/>
									<ArtPhoto/>
									<ArtPhoto/>
								</div>
							</div>
						</TabContent>
						<TabContent id="tab2" activeTab={activeTab}>
							<div className="pt-2">
								<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-wd-6 ">
									<Food/>
									<Food/>
									<Food/>
									<Food/>
									<Food/>
									<Food/>
								</div>
							</div>
						</TabContent>
						<TabContent id="tab3" activeTab={activeTab}>
							<h1> Romance Content Awaited</h1>
						</TabContent>
						<TabContent id="tab4" activeTab={activeTab}>
							<h1> Health Content Awaited</h1>
						</TabContent>
						<TabContent id="tab5" activeTab={activeTab}>
							<h1> Bio Content Awaited</h1>
						</TabContent>
						<TabContent id="tab6" activeTab={activeTab}>
							<h1> Sports Content Awaited</h1>
						</TabContent>
						<TabContent id="tab7" activeTab={activeTab}>
							<h1> Children Content Awaited</h1>
						</TabContent>
					</div>
				</div>
			</section>
        </>
    );
};
export default FeaturedCategory;