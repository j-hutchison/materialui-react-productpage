import React from "react";
import { styled } from "@mui/material/styles";

import { Box } from "@mui/material";
import { url } from "inspector";

interface ImageThumbnailPanelProps {
	images: string[];
	width?: number;
	thumbnailWidth?: number;
	handleClick?: (event: React.MouseEvent) => void;
}
interface ImagethumbnailProps {
	src: string;
}

const ImageThumbnailPanel: React.FC<ImageThumbnailPanelProps> = ({
	images,
	handleClick,
	width,
	thumbnailWidth,
}) => {
	const ImageThumbnail = styled("div")((props: ImagethumbnailProps) => ({
		width: thumbnailWidth ? `${thumbnailWidth}px` : `80px`,
		height: thumbnailWidth ? `${thumbnailWidth}px` : "80px",
		borderRadius: "10px",
		position: "relative",
		backgroundImage: `url(${props.src})`,
		backgroundSize: "cover",

		"&:hover": {
			cursor: "pointer",
			backgroundImage: `linear-gradient(45deg, rgba(255,255,255, 0.5), rgba(255,255,255, 0.5)), url(${props.src})`,
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
						onClick={handleClick}
					></ImageThumbnail>
				);
			})}
		</Box>
	);
};

export default ImageThumbnailPanel;
