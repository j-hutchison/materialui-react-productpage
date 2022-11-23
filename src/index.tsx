import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

declare module "@mui/material/styles" {
	interface TypographyVariants {
		priceCurrent?: React.CSSProperties;
		priceOriginal?: React.CSSProperties;
		percentageDiscount: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		priceCurrent?: React.CSSProperties;
		priceOriginal?: React.CSSProperties;
		percentageDiscount?: React.CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		priceCurrent: true;
		priceOriginal: true;
		percentageDiscount: true;
	}
}

const colorPrimaryLight = "#FFAB6A";

const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
					padding: "0.8rem 6rem",
					fontWeight: 600,
					"&:hover": {
						backgroundColor: colorPrimaryLight,
					},
				},
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				root: {
					backgroundColor: "transparent",
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					padding: 0,
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					margin: 0,
				},
			},
		},
	},
	palette: {
		common: {
			black: "#1D2026",
		},
		primary: {
			main: "#FF7E1B",
			light: colorPrimaryLight,
			dark: "#FF7E1B",
			contrastText: "#fff",
		},
		secondary: {
			main: "#69707D",
			light: "#C3CAD9",
		},
	},
	typography: {
		h2: {
			fontSize: "44px",
			fontWeight: 700,
			lineHeight: "48px",
		},
		h3: {
			fontSize: "13px",
			fontWeight: 700,
			lineHeight: "16px",
			letterSpacing: "2px",
			textTransform: "uppercase",
		},
		h4: {
			fontSize: "16px",
			fontWeight: 700,
			lineHeight: "20px",
		},
		body1: {
			fontSize: "16px",
			fontWeight: 400,
			lineHeight: "26px",
		},
		priceCurrent: {
			fontSize: "2rem",
			fontWeight: 700,
			lineHeight: "2.5rem",
			color: "#1D2026",
		},
		priceOriginal: {
			textDecoration: "line-through",
			fontWeight: 700,
			fontSize: "1rem",
			lineHeight: "2rem",
			color: "#B6BCC8",
		},
		percentageDiscount: {
			fontSize: "1rem",
			textAlign: "center",
			fontWeight: 700,
		},
	},
});

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
