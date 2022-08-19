import { Divider, Flex, Icon, Text } from "@chakra-ui/react";
import {
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaLock,
	FaPhone,
	FaYoutube,
} from "react-icons/fa";
import React from "react";

const HeaderTop = () => {
	return (
		<Flex
			paddingX="20"
			paddingY="2"
			background="gray.700"
			justify="space-between"
			display={{ sm: "none", lg: "flex" }}
		>
			{/* Left */}
			<Flex gridGap="4" color="gray.100">
				<Flex align="center" fontSize="smaller" gridGap="2">
					<Icon as={FaPhone} color="brand.100" />
					<Text fontWeight="bold"> +62 878 5553 9094</Text>
				</Flex>
				<Flex align="center" fontSize="smaller" gridGap="2">
					<Icon as={FaEnvelope} color="brand.100" />
					<Text fontWeight="bold"> brida.ntbprov@gmail.com</Text>
				</Flex>
			</Flex>
			{/* Right */}
			<Flex gridGap="4">
				<Icon
					as={FaFacebook}
					color="gray.100"
					background="blue.600"
					rounded="full"
					padding="0.5"
					fontSize="xl"
					_hover={{ background: "blue.400", cursor: "pointer" }}
				/>
				<Icon
					as={FaInstagram}
					color="gray.100"
					background="red.600"
					rounded="full"
					padding="0.5"
					fontSize="xl"
					_hover={{ background: "red.400", cursor: "pointer" }}
				/>
				<Icon
					as={FaYoutube}
					color="red.600"
					background="gray.300"
					rounded="full"
					padding="0.5"
					fontSize="xl"
					_hover={{ background: "gray.100", cursor: "pointer" }}
				/>
				<Divider orientation="vertical" variant="solid" color="gray.100" />
				<Flex
					align="center"
					color="gray.300"
					gridGap="2"
					_hover={{ color: "gray.100", cursor: "pointer" }}
				>
					<Icon as={FaLock} padding="0.5" fontSize="xl" />
					<Text fontSize="smaller"> Login</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default HeaderTop;
