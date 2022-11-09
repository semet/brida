import {
	Box,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Icon,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { Fragment } from "react";
import { FaComments, FaLongArrowAltRight, FaUser } from "react-icons/fa";

const LatestNews = () => {
	return (
		<Fragment>
			<Box display="flex" flexDir="column" alignItems="center" my="16">
				<Heading
					as={"h2"}
					bgGradient="linear(to-r, red.100, red.300)"
					bgRepeat={"no-repeat"}
					bgSize={"100% 0.3em"}
					bgPosition={"0 88%"}
				>
					Berita Terakhir
				</Heading>
				<Divider
					orientation="horizontal"
					w="600px"
					borderWidth="medium"
					borderColor="gray.200"
					rounded="full"
					mt="2"
				/>
			</Box>
			<Grid
				templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
				justifyItems="center"
				columnGap={6}
				rowGap={8}
				p="4"
				mx="10"
				background="whiteAlpha.100"
			>
				{Array(4)
					.fill("")
					.map((_, index) => (
						<GridItem
							as={motion.div}
							w="100%"
							bg="white"
							mx="4"
							borderWidth="1px"
							rounded="lg"
							shadow="lg"
							_hover={{ bg: "gray.100" }}
							key={index}
							whileHover={{ scale: 1.01 }}
							whileTap={{ scale: 0.9 }}
							transition="0.2s linear"
						>
							<Box position="relative">
								<Box
									position="absolute"
									display="flex"
									flexDir="column"
									bottom="-25px"
									left="2"
									bg="white"
									w="24"
									h="90px"
									rounded="lg"
									boxShadow="md"
									justifyContent={"center"}
								>
									<Text
										align="center"
										fontWeight="extrabold"
										fontSize="2xl"
										color="blue.600"
									>
										12
									</Text>
									<Text align="center" fontSize="small">
										Jan, 2022
									</Text>
								</Box>
								<Image
									src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80"
									alt="news"
									roundedTop="lg"
								/>
							</Box>

							<Box p="6" mt="4">
								<Flex gridGap="8">
									<Flex alignItems="baseline">
										<Icon as={FaUser} fontSize="12px" />
										<Text ml="1" fontSize="12px">
											Admin
										</Text>
									</Flex>
									<Flex alignItems="center">
										<Icon as={FaComments} fontSize="12px" />
										<Text ml="1" fontSize="12px">
											0 Komentar
										</Text>
									</Flex>
								</Flex>
								<VStack alignItems="baseline" mt="4">
									<Heading as={"h6"} fontSize="medium" color="blue.600">
										Discovery incommode earnestly commanded
									</Heading>
									<Text align="justify" my="5" color="gray.700">
										Easy mind life fact with see has bore ten. Parish any chatty
										can elinor direct for former. Up as meant widow.
									</Text>
									<Flex align="center" gridGap="2">
										<Text fontWeight="semibold">read more</Text>
										<Icon as={FaLongArrowAltRight} />
									</Flex>
								</VStack>
							</Box>
						</GridItem>
					))}
			</Grid>
		</Fragment>
	);
};

export default LatestNews;
