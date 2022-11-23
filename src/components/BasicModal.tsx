import React, { useContext } from "react";

import { Box, Button, Typography, Modal } from "@mui/material";
import { AppContext } from "../context/AppContext";
import ImageThumbnailPanel from "./ImageThumbnailPanel";

import { styled } from "@mui/material/styles";

import productThumbnail1 from "../images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../images/image-product-4-thumbnail.jpg";

import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";

interface BasicModalProps {
	open: boolean;
	mainImage: string;
	handleClose: () => void;
}

const BasicModal: React.FC<BasicModalProps> = (props) => {
	const ctx = useContext(AppContext);

	const productImages = [
		productThumbnail1,
		productThumbnail2,
		productThumbnail3,
		productThumbnail4,
	];

	const Image = styled("img")(({ theme }) => ({
		// display: "block",
		borderRadius: "15px",
		width: "100%",
		height: "100%",
		border: "none",
		outline: "none",
	}));

	const handleThumbnailIconClick = (event: React.MouseEvent) => {
		const target = event.currentTarget;

		if (!ctx.handleActiveModalImage) return;

		const imageName = target.getAttribute("data-imagename");
		let clickedImageLarge: string;
		switch (imageName) {
			case "product1":
				clickedImageLarge = product1;
				break;
			case "product2":
				clickedImageLarge = product2;
				break;
			case "product3":
				clickedImageLarge = product3;
				break;
			case "product4":
				clickedImageLarge = product4;
				break;
			default:
				clickedImageLarge = product1;
				break;
		}

		ctx.handleActiveModalImage(clickedImageLarge);
	};

	return (
		<div>
			<Modal
				disableAutoFocus={true}
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					sx={{
						position: "absolute" as "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 550,

						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "2rem",
					}}
				>
					<Box>
						<Image src={ctx.activeModalImage} alt="" />
					</Box>
					<ImageThumbnailPanel
						images={productImages}
						width={550}
						thumbnailWidth={90}
						handleClick={handleThumbnailIconClick}
					/>
				</Box>
			</Modal>
		</div>
	);
};

export default BasicModal;
