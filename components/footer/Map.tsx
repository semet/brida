import React from "react";
import GoogleMapReact from "google-map-react";
import { Box, Icon } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";

const Map = () => {
	// AIzaSyCQMRuFn0fA3Kjf7mCvAt5Jsd5nFZ-4HWI

	const defaultProps = {
		center: {
			lat: -8.643906865670736,
			lng: 116.11558623806349,
		},
		zoom: 11,
	};
	return (
		<Box w="full" mb="4">
			<GoogleMapReact
				bootstrapURLKeys={{ key: "" }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<PinLocation lat={59.955413} lng={30.337844} text="My Marker" />
			</GoogleMapReact>
		</Box>
	);
};

export default Map;

const PinLocation: React.FC<{
	text: string;
	lat: number;
	lng: number;
}> = ({ text, lat, lng }) => {
	return <Icon as={MdLocationPin}>{text}</Icon>;
};
