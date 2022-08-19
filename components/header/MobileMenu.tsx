import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Icon,
	IconButton,
	Link,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React, { Fragment, RefObject, useRef } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import MobileNavItems from "./MobileNavItems";

const MobileMenu = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<any>();
	return (
		<Fragment>
			<Box display={{ sm: "block", md: "none" }}>
				<IconButton
					icon={<FaBars />}
					ref={btnRef}
					onClick={onOpen}
					fontSize="2xl"
					color="gray.400"
					aria-label={"Toggle Navigation"}
				/>
			</Box>
			{/* Drawer */}
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>
						<Text color="brida.100">BRIDA Provinsi NTB </Text>
					</DrawerHeader>
					<DrawerBody>
						<MobileNavItems />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Fragment>
	);
};

export default MobileMenu;
