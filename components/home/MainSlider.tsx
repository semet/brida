import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Button, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./MainSlider.module.css";
import Image from "next/image";
import Banner1 from "../../public/images/banner/Banner.jpg";
import Banner2 from "../../public/images/banner/Banner IGA FIX.jpg";

const MainSlider = () => {
	return (
		<Box mt="4" padding={1}>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				navigation
				pagination={{ clickable: true }}
			>
				<SwiperSlide>
					<Box className={styles.bannerContainer}>
						<Image src={Banner1} alt="Dan Abramov" />
						<Container className={styles.bannerHeading}>
							<Flex flexDirection="column" align="center" gap="4" color="gray.600">
								<Heading>Selamat Datang di Brida NTB</Heading>
								<Heading as="h6" size="sm" letterSpacing="1px">
									Dimana inspirasi menjadi nyata
								</Heading>
								<Button
									variant="outline"
									border="1px solid"
									alignSelf="center"
									_hover={{
										background: "brida.100",
										color: "gray.50",
									}}
								>
									Call To Action
								</Button>
							</Flex>
						</Container>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box>
						<Image src={Banner2} alt="Dan Abramov" />
					</Box>
				</SwiperSlide>
			</Swiper>
		</Box>
	);
};

export default MainSlider;
