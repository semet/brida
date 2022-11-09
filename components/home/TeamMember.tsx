import {
	background,
	Box,
	Flex,
	Grid,
	GridItem,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import SectionTitle from "../shared/SectionTitle";

const TeamMember = () => {
	return (
		<Fragment>
			<SectionTitle title="Team Member" />
			<Flex
				flexDir={{ sm: "column", lg: "row" }}
				w="full"
				mb="20"
				px="16"
				py="4"
				gridGap={{ sm: "20", md: "6", xl: "6" }}
				justifyContent="center"
				align={"center"}
				bgImage="url('/images/bg/abstract_shape_2.png')"
				bgPosition="right"
				bgRepeat="no-repeat"
				bgSize={"auto"}
			>
				{Array(4)
					.fill("")
					.map((_, index) => (
						<Box
							display="flex"
							flexShrink="0"
							flexDir="column"
							alignItems="center"
							position="relative"
							w="300px"
							h="350px"
							role="group"
							key={index}
						>
							<Image
								boxSize="350px"
								objectFit="cover"
								src="/images/avatar.jpg"
								alt="member"
								rounded="md"
								boxShadow="md"
							/>

							<VStack
								w="270px"
								h="100px"
								bg="white"
								position={"absolute"}
								top="320px"
								rounded="md"
								boxShadow="md"
								justify="center"
								transition={"all 0.35s ease-in-out"}
								_groupHover={{
									background: "blue.600",
									color: "gray.50",
								}}
							>
								<Text fontSize="xl" fontWeight="bold">
									Hamdani Ash-Sidiq
								</Text>
								<Text>Ketua Ajak</Text>
							</VStack>
						</Box>
					))}
			</Flex>
		</Fragment>
	);
};

export default TeamMember;
