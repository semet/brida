import React from "react";
import type { NextPage } from "next";
import { Button } from "@chakra-ui/react";
import Layout from "../components/Layout";
import MainSlider from "../components/home/MainSlider";

const Home: NextPage = () => {
	return (
		<Layout>
			{/* Man Slider */}
			<MainSlider />
		</Layout>
	);
};

export default Home;
