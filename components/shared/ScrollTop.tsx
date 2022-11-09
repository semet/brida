import { Box, Icon } from "@chakra-ui/react";
import React from "react";
import { MdArrowCircleUp } from "react-icons/md";

const ScrollTop = () => {
	return (
		<Box position="sticky" bottom={"10"} left={"2"} mb={"-0.5"}>
			<Icon as={MdArrowCircleUp} />
		</Box>
	);
};

export default ScrollTop;
