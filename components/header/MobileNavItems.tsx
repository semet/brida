import {
	Box,
	Collapse,
	Flex,
	Icon,
	Link,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { FaChevronDown } from "react-icons/fa";

const MobileNavItems = () => {
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Stack
			display="flex"
			flexDirection="column"
			alignItems="start"
			listStyleType="none"
			justifyContent="start"
			gap="4"
			textTransform="uppercase"
			fontWeight="semibold"
			color={"gray.700"}
		>
			{/*  */}
			<Box width="full">
				<NextLink href="/" passHref>
					<Link _hover={{ textDecoration: "none", color: "brand.100" }}>Home</Link>
				</NextLink>
			</Box>
			{/*  */}
			<Box _hover={{ textDecoration: "none", cursor: "pointer" }} width="full">
				<Flex align="center" gap="2" onClick={onToggle}>
					<Text>Profile</Text>
					<Icon
						as={FaChevronDown}
						color="gray.500"
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
					/>
				</Flex>
				<Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
					<Stack
						mt={2}
						pl={4}
						borderLeft={1}
						borderStyle={"solid"}
						borderColor="gray.200"
						align={"start"}
					>
						<Link _hover={{ color: "brand.100" }}>Profil Badan</Link>
						<Link _hover={{ color: "brand.100" }}>Profil Kepala Badan</Link>
						<Link _hover={{ color: "brand.100" }}>Pofil Sekertaris Badan</Link>
						<Link _hover={{ color: "brand.100" }}>Profil Bidang</Link>
						<Link _hover={{ color: "brand.100" }}>Struktur Organisasi</Link>
						<Link _hover={{ color: "brand.100" }}>Kalender Kegiatan</Link>
						<Link _hover={{ color: "brand.100" }}>Maklumat Pelayan</Link>
					</Stack>
				</Collapse>
			</Box>
			{/*  */}
			<Box width="full">
				<Link _hover={{ textDecoration: "none", color: "brand.100" }} href="#">
					Berita
				</Link>
			</Box>
			{/*  */}
			<Box width="full">
				<Link _hover={{ textDecoration: "none", color: "brand.100" }} href="#">
					Program
				</Link>
			</Box>
			{/*  */}
			<Box width="full">
				<Link _hover={{ textDecoration: "none", color: "brand.100" }} href="#">
					Mitra
				</Link>
			</Box>
			{/*  */}
			<Box width="full">
				<Link _hover={{ textDecoration: "none", color: "brand.100" }} href="#">
					PPID
				</Link>
			</Box>
			{/*  */}
			<Box width="full">
				<Link _hover={{ textDecoration: "none", color: "brand.100" }} href="#">
					Layanan
				</Link>
			</Box>
			{/*  */}
			<Box width="full">
				<Link _hover={{ textDecoration: "none", color: "brand.100" }} href="#">
					Edukasi
				</Link>
			</Box>
		</Stack>
	);
};

export default MobileNavItems;
