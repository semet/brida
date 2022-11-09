import React from "react";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Icon,
	IconButton,
	Image,
	Text,
	useBreakpointValue,
	VStack,
} from "@chakra-ui/react";
import Slider from "react-slick";
import styles from "./MainSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLeftArrowAlt, BiRightArrow, BiRightArrowAlt } from "react-icons/bi";

const settings = {
	dots: true,
	arrows: false,
	infinite: true,
	autoplay: false,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
};
const MainSlider = () => {
	const [slider, setSlider] = React.useState<Slider | null>(null);

	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const top = useBreakpointValue({ base: "90%", md: "50%" });
	const side = useBreakpointValue({ base: "30%", md: "10px" });

	// These are the images used in the slide
	const cards = ["/images/banner/1.jpg", "/images/banner/2.jpg", "/images/banner/3.jpg"];

	return (
		<Box
			position={"relative"}
			height={"600px"}
			width={"full"}
			overflow={"hidden"}
			shadow="md"
		>
			{/* Left Icon */}
			<IconButton
				aria-label="left-arrow"
				colorScheme="messenger"
				borderRadius="full"
				position="absolute"
				left={side}
				top={top}
				transform={"translate(0%, -50%)"}
				zIndex={2}
				onClick={() => slider?.slickPrev()}
			>
				<BiLeftArrowAlt />
			</IconButton>
			{/* Right Icon */}
			<IconButton
				aria-label="right-arrow"
				colorScheme="messenger"
				borderRadius="full"
				position="absolute"
				right={side}
				top={top}
				transform={"translate(0%, -50%)"}
				zIndex={2}
				onClick={() => slider?.slickNext()}
			>
				<BiRightArrowAlt />
			</IconButton>
			{/* Slider */}
			<Slider {...settings} ref={(slider) => setSlider(slider)}>
				{cards.map((url, index) => (
					<Box
						key={index}
						height={"6xl"}
						position="relative"
						backgroundPosition="center"
						backgroundRepeat="no-repeat"
						backgroundSize="cover"
						backgroundImage={`url(${url})`}
					>
						<VStack position="absolute" left="14" top="35%" alignItems={"start"}>
							<Flex>
								<Heading
									bgGradient="linear(to-l, #7928CA, #FF0080)"
									bgClip="text"
									fontSize="5xl"
									display={"inline-flex"}
								>
									Selamat Datang di
								</Heading>
								<Heading
									color="blue.600"
									bgGradient="linear(to-r, blue.100, red.200)'"
									bgRepeat={"no-repeat"}
									bgSize={"100% 0.3em"}
									bgPosition={"0 88%"}
									fontSize={"5xl"}
									ml="4"
								>
									Brida NTB
								</Heading>
							</Flex>
							<Heading
								as={"h6"}
								fontSize="md"
								color="gray.800"
								letterSpacing={"wide"}
								fontStyle={"italic"}
							>
								Dimana impian menjadi kenyataan
							</Heading>
						</VStack>
					</Box>
				))}
			</Slider>
		</Box>
	);
};

export default MainSlider;
