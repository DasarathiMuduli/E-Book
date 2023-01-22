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
						<TabNavItem  id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} color="text-primary-indigo" icon="flaticon-gallery"  title="Arts & Photography"/>
						<TabNavItem  id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} icon="flaticon-cook" title="Food & Drink" color="text-tangerine"/>
						<TabNavItem  id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} icon="flaticon-like" title="Romance" color="text-chili"/>
						<TabNavItem  id="tab4" activeTab={activeTab} setActiveTab={setActiveTab} icon="flaticon-doctor" title="Health" color="text-carolina"/>
						<TabNavItem  id="tab5" activeTab={activeTab} setActiveTab={setActiveTab} icon="flaticon-resume" title="Biography" color="text-punch"/>
						<TabNavItem  id="tab6" activeTab={activeTab} setActiveTab={setActiveTab} icon="flaticon-jogging" title="Sports" />
						<TabNavItem  id="tab7" activeTab={activeTab} setActiveTab={setActiveTab} icon="flaticon-baby-boy" title="Children"/>
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