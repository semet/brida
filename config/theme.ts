import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			100: "#77c720",
		},
		brida: {
			100: "#ec2325",
		},
	},
	fonts: {
		body: `'Open Sans', sans-serif`,
	},
});

export default theme;
