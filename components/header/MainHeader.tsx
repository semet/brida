import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import NtbLogo from "../../public/images/logo/ntb.webp";
import BridaLogo from "../../public/images/logo/brida.webp";
import MainMenu from "./MainMenu";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const MainHeader = () => {
	return (
		<Flex
			height={{ sm: "9rem", lg: "6rem" }}
			shadow="base"
			paddingX={{ sm: "10", md: "20" }}
			paddingY="12"
			justify="space-between"
			align="center"
			direction={{ sm: "row", md: "column", lg: "row" }}
		>
			{/* Logo */}
			<Flex align="center" gridGap="2">
				<Box as="div">
					<Image src={NtbLogo} alt="Nusa Tenggara Barat" />
				</Box>
				<Flex align="center">
					<Box as="div">
						<Image src={BridaLogo} alt="Nusa Tenggara Barat" />
					</Box>
					<Text color="brida.100" display={{ base: "none", lg: "block" }}>
						BRIDA Provinsi NTB
					</Text>
				</Flex>
			</Flex>
			{/* Menu */}
			<MainMenu />
			{/* Mobile Menu */}
			<MobileMenu />
		</Flex>
	);
};

export default MainHeader;
