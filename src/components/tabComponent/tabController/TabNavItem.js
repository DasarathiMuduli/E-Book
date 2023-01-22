import React from "react";
const TabNavItem = (props) => {
	const handleClick = () => {
		props.setActiveTab(props.id);
 };
 
return (
	<> 
		<li  onClick={handleClick} className={"nav-item flex-shrink-0 flex-xl-shrink-1" +( props.activeTab === props.id ? "active" : "")}>
			<a className="nav-link font-weight-medium active nav-link-caret" href="javascript:;">
				<div className="text-center">
					<figure className={`d-md-block mb-0 ${props.color}`}>
						<i className={`glyph-icon font-size-12 ${props.icon}`}></i>
					</figure>
					<span className="tabtext font-size-3 font-weight-medium text-dark">{props.title}</span>
				</div>
			</a>
		</li>
		
	</>
          
 );
};
export default TabNavItem;