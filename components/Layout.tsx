import React, { Fragment } from "react";
import HeaderTop from "./header/HeaderTop";
import MainHeader from "./header/MainHeader";

interface Props {
	children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Fragment>
			{/* Header */}
			<HeaderTop />
			{/* Main Header */}
			<MainHeader />
			{/* Content */}
			{children}
		</Fragment>
	);
};

export default Layout;
