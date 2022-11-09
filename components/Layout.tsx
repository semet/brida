import React, { Fragment } from "react";
import AppFooter from "./footer/AppFooter";
import HeaderTop from "./header/HeaderTop";
import MainHeader from "./header/MainHeader";
import ScrollTop from "./shared/ScrollTop";

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
			{/* Footer */}
			<AppFooter />
			{/* Scroll Top */}
			<ScrollTop />
		</Fragment>
	);
};

export default Layout;
