import {
	Box,
	Divider,
	Flex,
	HStack,
	Icon,
	Image,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import NtbLogo from "../../public/images/logo/ntb.webp";
import BridaLogo from "../../public/images/logo/brida.webp";
import { MdHome, MdEmail, MdCall, MdWatchLater } from "react-icons/md";
import Map from "./Map";
import { FaFacebook, FaInstagram, FaLock, FaYoutube } from "react-icons/fa";

const AppFooter = () => {
	return (
		<Fragment>
			{/* Footer top */}
			<Flex w="full" mb="2" mt="36" px="4" justify="space-between">
				<Flex
					flexDir="column"
					gridGap="4"
					w="50%"
					boxShadow="lg"
					rounded="md"
					m="4"
					px="14"
					pt="4"
					pb="4"
				>
					<Flex align="start" gridGap="2">
						<Box as="div">
							<Image
								src="/images/logo/ntb.webp"
								w={"10"}
								alt="Nusa Tenggara Barat"
							/>
						</Box>
						<Flex align="center" gridGap="2">
							<Box as="div">
								<Image
									src="/images/logo/brida.webp"
									w={"14"}
									alt="Nusa Tenggara Barat"
								/>
							</Box>
							<Text color="brida.100" fontSize="2xl" fontWeight="bold">
								BRIDA Provinsi NTB
							</Text>
						</Flex>
					</Flex>
					<VStack align={"start"} gridGap="2">
						<Flex align="center" gridGap={"4"}>
							<Icon as={MdHome} fontSize="3xl" color="brida.100" />
							<Text fontSize="md" color="gray.700">
								Jalan Raya Zamia, No.2 Desa Lelede, Lombok Barat, Nusa Tenggara
								Barat
							</Text>
						</Flex>
						<Flex align="center" gridGap={"4"}>
							<Icon as={MdEmail} fontSize="3xl" color="brida.100" />
							<Text fontSize="md" color="gray.700">
								brida.ntbprov@gmail.com
							</Text>
						</Flex>
						<Flex align="center" gridGap={"4"}>
							<Icon as={MdCall} fontSize="3xl" color="brida.100" />
							<Text fontSize="md" color="gray.700">
								+62 878 5553 9094
							</Text>
						</Flex>
						<Flex align="center" gridGap={"4"}>
							<Icon as={MdWatchLater} fontSize="3xl" color="brida.100" />
							<Text fontSize="md" color="gray.700">
								Senin - Kamis, 08:00 - 16:00 WITA Jumat, 08:00 - 17:00 WITA
							</Text>
						</Flex>
					</VStack>
				</Flex>

				<Flex w="50%" boxShadow="lg" rounded="md" m="4" px="14" pt="4">
					<Map />
				</Flex>
			</Flex>
			{/* Footer Bottom */}
			<FooterBottom />
		</Fragment>
	);
};

export default AppFooter;

const FooterBottom: React.FC<{}> = () => {
	return (
		<Box w="full" mb="-6" mt="2" px="8">
			<Flex
				bgColor="brand.100"
				h="16"
				px="14"
				justify="space-between"
				align="center"
				rounded="md"
			>
				<Box color="gray.50">
					<Text fontSize="lg">
						© 2022, Badan Riset dan Inovasi Daerah Provinsi NTB
					</Text>
				</Box>
				<Flex gridGap="4">
					<Icon
						as={FaFacebook}
						color="gray.100"
						rounded="full"
						padding="0.5"
						fontSize="4xl"
						_hover={{ background: "blue.400", cursor: "pointer" }}
					/>
					<Icon
						as={FaInstagram}
						color="gray.100"
						rounded="full"
						boxShadow="2xl"
						padding="0.5"
						fontSize="4xl"
						_hover={{ background: "blue.400", cursor: "pointer" }}
					/>
					<Icon
						as={FaYoutube}
						color="gray.100"
						rounded="full"
						padding="0.5"
						fontSize="4xl"
						_hover={{ background: "blue.400", cursor: "pointer" }}
					/>
				</Flex>
			</Flex>
		</Box>
	);
};
