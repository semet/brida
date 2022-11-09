import React from "react";
import type { NextPage } from "next";
import { Button } from "@chakra-ui/react";
import Layout from "../components/Layout";
import MainSlider from "../components/home/MainSlider";
import FeatureSection from "../components/home/FeatureSection";
import Head from "next/head";
import LatestNews from "../components/home/LatestNews";
import VideoSection from "../components/home/VideoSection";
import TeamMember from "../components/home/TeamMember";

const Home: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>Home</title>
			</Head>
			{/* Man Slider */}
			<MainSlider />
			{/* Features */}
			<FeatureSection />
			{/* Latest News */}
			<LatestNews />
			{/* Video */}
			<VideoSection />
			{/* Team */}
			<TeamMember />
		</Layout>
	);
};

export default Home;
