import React from "react";
import type { NextPage } from "next";
import { Button } from "@chakra-ui/react";
import Layout from "../components/Layout";

const Home: NextPage = () => {
	return (
		<Layout>
			<Button color="brand.100">index</Button>
		</Layout>
	);
};

export default Home;
