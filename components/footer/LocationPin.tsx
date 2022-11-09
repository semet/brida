import { Box, Icon } from "@chakra-ui/react";
import React from "react";
import { MdLocationPin } from "react-icons/md";

const LocationPin: React.FC<{
	lat: number;
	lng: number;
	text: string;
}> = ({ lat, lng, text }) => {
	return (
		<Box>
			<Icon as={MdLocationPin} />
			{text}
		</Box>
	);
};

export default LocationPin;
