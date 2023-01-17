import React from "react";
const TabNavItem = ({ id, activeTab, setActiveTab,children }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
	<> 
		<li  onClick={handleClick} className={"nav-item flex-shrink-0 flex-xl-shrink-1" +( activeTab === id ? "active" : "")}>
			<a className="nav-link font-weight-medium active nav-link-caret" href="#">
				<div className="text-center">
					{children}
				</div>
			</a>
		</li>
		
	</>
          
 );
};
export default TabNavItem;