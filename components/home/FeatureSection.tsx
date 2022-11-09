import React from "react";
import { Box, Flex, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { FaGraduationCap, FaLightbulb, FaMicroscope, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const FeatureSection = () => {
	return (
		<Flex
			gridGap="8"
			mb="4"
			pb="4"
			pt="10"
			justify="center"
			flexDir={{ sm: "column", md: "row" }}
			align="center"
			bgImage="url('/images/bg/wave.svg')"
		>
			<VStack
				as={motion.div}
				w={{ sm: "100%", md: "300px" }}
				h="250px"
				p="20px"
				justify="center"
				align="center"
				shadow="md"
				borderWidth="1px"
				background="white"
				rounded="lg"
				gap="20px"
				role="group"
				_hover={{ background: "blue.800", color: "gray.50", cursor: "pointer" }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition="0.2s linear"
			>
				<Icon
					as={FaLightbulb}
					fontSize="6xl"
					color="brand.100"
					_groupHover={{ color: "gray.50" }}
				/>
				<Text
					align="center"
					fontWeight="medium"
					textTransform="uppercase"
					fontSize={{ md: "12px", lg: "unset" }}
				>
					Penelitian Pengembangan Inovasi dan Teknologi
				</Text>
			</VStack>
			<VStack
				as={motion.div}
				w={{ sm: "100%", md: "300px" }}
				h="250px"
				p="20px"
				justify="center"
				align="center"
				shadow="md"
				borderWidth="1px"
				background="white"
				rounded="lg"
				gap="20px"
				role="group"
				_hover={{ background: "blue.800", color: "gray.50", cursor: "pointer" }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition="0.2s linear"
			>
				<Icon
					as={FaMicroscope}
					fontSize="6xl"
					color="brand.100"
					_groupHover={{ color: "gray.50" }}
				/>
				<Text
					align="center"
					fontWeight="medium"
					textTransform="uppercase"
					fontSize={{ md: "12px", lg: "unset" }}
				>
					bidang pemanfaatan riset dan inovasi
				</Text>
			</VStack>
			<VStack
				as={motion.div}
				w={{ sm: "100%", md: "300px" }}
				h="250px"
				p="20px"
				justify="center"
				align="center"
				shadow="md"
				borderWidth="1px"
				background="white"
				rounded="lg"
				gap="20px"
				role="group"
				_hover={{ background: "blue.800", color: "gray.50", cursor: "pointer" }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition="0.2s linear"
			>
				<Icon
					as={FaUsers}
					fontSize="6xl"
					color="brand.100"
					_groupHover={{ color: "gray.50" }}
				/>
				<Text
					align="center"
					fontWeight="medium"
					textTransform="uppercase"
					fontSize={{ md: "12px", lg: "unset" }}
				>
					bidang kemitraan dan inkubasi bisnis
				</Text>
			</VStack>
			<VStack
				as={motion.div}
				w={{ sm: "100%", md: "300px" }}
				h="250px"
				p="20px"
				justify="center"
				align="center"
				shadow="md"
				borderWidth="1px"
				background="white"
				rounded="lg"
				gap="20px"
				role="group"
				_hover={{ background: "blue.800", color: "gray.50", cursor: "pointer" }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition="0.2s linear"
			>
				<Icon
					as={FaGraduationCap}
					fontSize="6xl"
					color="brand.100"
					_groupHover={{ color: "gray.50" }}
				/>
				<Text
					align="center"
					fontWeight="medium"
					textTransform="uppercase"
					fontSize={{ md: "12px", lg: "unset" }}
				>
					Bidang pengembangan sumberdaya ilmu pengetahuan dan teknologi
				</Text>
			</VStack>
		</Flex>
	);
};

export default FeatureSection;
