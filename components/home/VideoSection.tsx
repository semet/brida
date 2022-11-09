import {
	AspectRatio,
	Box,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading,
	Highlight,
	VStack,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import SectionTitle from "../shared/SectionTitle";

const VideoSection = () => {
	return (
		<Fragment>
			<SectionTitle title="Video Terkini" />
			<Flex
				flexDir={"column"}
				mb="20"
				px="14"
				py="4"
				align="center"
				gap="2"
				bgImage="url('/images/bg/Dotted_Shape.png')"
			>
				<Box w="full">
					<AspectRatio maxW="full" ratio={5 / 2}>
						<iframe
							style={{ borderRadius: "10px" }}
							width="1220"
							height="400"
							src="https://www.youtube.com/embed/qMYoHUiSJAQ"
							title="Official Video Profile BRIDA NTB 2022"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</AspectRatio>
				</Box>
				<Flex w="full" gridGap="2">
					{Array(4)
						.fill("")
						.map((_, index) => (
							<Box w="full" h="auto" key={index}>
								<AspectRatio maxW="auto" ratio={2 / 1}>
									<iframe
										style={{ borderRadius: "10px" }}
										width="400"
										height="315"
										src="https://www.youtube.com/embed/Ng2Yvj1lxfA"
										title="Petunjuk Pengisian Aplikasi Indeks Inovasi Daerah IGA || Innovative Government Award || iga 2022"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</AspectRatio>
							</Box>
						))}
				</Flex>
			</Flex>
		</Fragment>
	);
};

export default VideoSection;
