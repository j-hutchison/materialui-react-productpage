import React from "react";
import { styled } from "@mui/material/styles";

import { Box } from "@mui/material";

interface ImageThumbnailPanelProps {
	images: string[];
	width?: number;
	thumbnailWidth?: number;
	handleClick?: (event: React.MouseEvent) => void;
}

const ImageThumbnailPanel: React.FC<ImageThumbnailPanelProps> = ({
	images,
	handleClick,
	width,
	thumbnailWidth,
}) => {
	const ImageThumbnail = styled("img")(({ theme }) => ({
		width: thumbnailWidth ? `${thumbnailWidth}px` : `80px`,
		borderRadius: "10px",
		"&:hover": {
			cursor: "pointer",
			opacity: 0.25,
		},
	}));

	return (
		<Box
			sx={{
				display: "flex",
				width: width ? `${width}px` : `400px`,
				justifyContent: "space-between",
			}}
		>
			{images.map((productThumbnail, index) => {
				return (
					<ImageThumbnail
						src={productThumbnail}
						data-arrayindex={index}
						alt="shoes"
						onClick={handleClick}
					></ImageThumbnail>
				);
			})}
		</Box>
	);
};

export default ImageThumbnailPanel;
