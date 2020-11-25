import React from "react";
import Link from "@material-ui/core/Link";

function SidebarOption({ active, text, Icon, mobileHidden, href }) {
	return (
		<Link href={href} underline="none">
			<div
				className={`sidebar-option ${active && "sidebar-option--active"} ${
					mobileHidden && "mobileHidden"
				}`}
			>
				<Icon />
				<h2 className="sidebar-text">{text}</h2>
			</div>
		</Link>
	);
}

export default SidebarOption;
