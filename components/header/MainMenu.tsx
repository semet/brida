import {
	Box,
	Flex,
	Icon,
	Link,
	Popover,
	PopoverArrow,
	PopoverContent,
	PopoverTrigger,
	Stack,
} from "@chakra-ui/react";
import React from "react";
import { FaChevronDown, FaEnvelope } from "react-icons/fa";

const MainMenu = () => {
	return (
		<Stack
			direction={"row"}
			spacing={4}
			textTransform="uppercase"
			display={{ sm: "none", md: "flex" }}
		>
			<Box shadow="2xl">
				<Link
					href="#"
					fontSize="md"
					fontWeight="medium"
					color="gray.500"
					_hover={{ textDecoration: "none", color: "brida.100" }}
				>
					Home
				</Link>
			</Box>
			{/*  */}
			<Box>
				<Popover trigger="hover" placement="bottom-start">
					<PopoverTrigger>
						<Link
							href="#"
							fontSize="md"
							fontWeight="medium"
							color="gray.500"
							_hover={{ textDecoration: "none", color: "brida.100" }}
						>
							Profile
						</Link>
					</PopoverTrigger>
					<PopoverContent
						border={0}
						boxShadow={"sm"}
						bg="gray.50"
						p={4}
						rounded={"xl"}
						minW={"sm"}
					>
						<PopoverArrow />
						<Stack>
							<Link _hover={{ textDecoration: "none", color: "brida.100" }}>
								Profil Badan
							</Link>
							<Link _hover={{ textDecoration: "none", color: "brida.100" }}>
								Profil Kepala Badan
							</Link>
							<Link _hover={{ textDecoration: "none", color: "brida.100" }}>
								Pofil Sekertaris Badan
							</Link>
							<Link _hover={{ textDecoration: "none", color: "brida.100" }}>
								Profil Bidang
							</Link>
							<Link _hover={{ textDecoration: "none", color: "brida.100" }}>
								Struktur Organisasi
							</Link>
							<Link _hover={{ textDecoration: "none", color: "brida.100" }}>
								Kalender Kegiatan
							</Link>
							<Link _hover={{ textDecoration: "none", color: "brida.100" }}>
								Maklumat Pelayan
							</Link>
						</Stack>
					</PopoverContent>
				</Popover>
			</Box>
			{/*  */}
			<Box>
				<Link
					href="#"
					fontSize="md"
					fontWeight="medium"
					color="gray.500"
					_hover={{ textDecoration: "none", color: "brida.100" }}
				>
					Berita
				</Link>
			</Box>
			{/*  */}
			<Box>
				<Link
					href="#"
					fontSize="md"
					fontWeight="medium"
					color="gray.500"
					_hover={{ textDecoration: "none", color: "brida.100" }}
				>
					Program
				</Link>
			</Box>
			{/*  */}
			<Box>
				<Link
					href="#"
					fontSize="md"
					fontWeight="medium"
					color="gray.500"
					_hover={{ textDecoration: "none", color: "brida.100" }}
				>
					Mitra
				</Link>
			</Box>
			{/*  */}
			<Box>
				<Link
					href="#"
					fontSize="md"
					fontWeight="medium"
					color="gray.500"
					_hover={{ textDecoration: "none", color: "brida.100" }}
				>
					PPID
				</Link>
			</Box>
			{/*  */}
			<Box>
				<Link
					href="#"
					fontSize="md"
					fontWeight="medium"
					color="gray.500"
					_hover={{ textDecoration: "none", color: "brida.100" }}
				>
					Layanan
				</Link>
			</Box>
			{/*  */}
			<Box>
				<Link
					href="#"
					fontSize="md"
					fontWeight="medium"
					color="gray.500"
					_hover={{ textDecoration: "none", color: "brida.100" }}
				>
					Edukasi
				</Link>
			</Box>
		</Stack>
	);
};

export default MainMenu;
