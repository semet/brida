import { Box, Divider, Heading } from "@chakra-ui/react";
import React from "react";

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
	return (
		<Box display="flex" flexDir="column" alignItems="center" my="12">
			<Heading
				as={"h2"}
				bgGradient="linear(to-r, red.100, red.300)'"
				bgRepeat={"no-repeat"}
				bgSize={"100% 0.3em"}
				bgPosition={"0 88%"}
			>
				{title}
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
	);
};

export default SectionTitle;
