import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import NtbLogo from "../../public/images/logo/ntb.webp";
import BridaLogo from "../../public/images/logo/brida.webp";
import MainMenu from "./MainMenu";

const MainHeader = () => {
	return (
		<Flex
			height="50px"
			shadow="base"
			paddingX="36"
			paddingY="12"
			justify="space-between"
		>
			{/* Logo */}
			<Flex align="center" gridGap="2">
				<Image src={NtbLogo} alt="Nusa Tenggara Barat" />
				<Flex align="center">
					<Image src={BridaLogo} alt="Nusa Tenggara Barat" />
					<Text color="brida.100" display={{ sm: "none", md: "inline" }}>
						BRIDA Provinsi NTB
					</Text>
				</Flex>
			</Flex>
			{/* Menu */}
			<MainMenu />
		</Flex>
	);
};

export default MainHeader;
