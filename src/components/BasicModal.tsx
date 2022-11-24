import React from "react";

import { Box, IconButton, Modal } from "@mui/material";
import ImageThumbnailPanel from "./ImageThumbnailPanel";

import { styled } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

interface BasicModalProps {
	open: boolean;
	mainImageIndex: number;
	imageThumbnails: string[];
	imageArray: string[];
	handleClose: () => void;
	setModalImageIndex: (index: number) => void;
}

const BasicModal: React.FC<BasicModalProps> = (props) => {
	const mainImageWidth = 550;

	const Image = styled("img")(({ theme }) => ({
		borderRadius: "15px",
		width: "100%",
		height: "100%",
		border: "none",
		outline: "none",
	}));

	const handleThumbnailIconClick = (event: React.MouseEvent) => {
		const target = event.currentTarget;

		if (!props.setModalImageIndex) return;

		const imageIndex = target.getAttribute("data-arrayindex");

		props.setModalImageIndex(+imageIndex!);
	};

	const handlePreviousImageClick = () => {
		if (!props.setModalImageIndex) return;

		const nextImageIndex =
			props.mainImageIndex === 0
				? props.imageArray.length - 1
				: props.mainImageIndex - 1;

		props.setModalImageIndex(nextImageIndex);
	};

	const handleNextImageClick = () => {
		if (!props.setModalImageIndex) return;

		const nextImageIndex =
			props.mainImageIndex === props.imageArray.length - 1
				? 0
				: props.mainImageIndex + 1;

		props.setModalImageIndex(nextImageIndex);
	};

	return (
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
					width: mainImageWidth,

					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "2rem",
				}}
			>
				<Box>
					<IconButton
						color="default"
						onClick={props.handleClose}
						sx={{
							position: "absolute" as "absolute",
							right: "0%",
							transform: "translate(0, -100%)",
							zIndex: "9999",

							"&:hover": {
								color: "primary.main",
							},
						}}
					>
						<CloseIcon />
					</IconButton>
					<IconButton
						color="secondary"
						onClick={handlePreviousImageClick}
						sx={{
							position: "absolute" as "absolute",
							top: "50%",
							left: "0%",
							transform: "translate(-50%, -100%)",
							zIndex: "9999",
							backgroundColor: "#fff",

							"&:hover": {
								backgroundColor: "#fff",
								color: "primary.main",
							},
						}}
					>
						<ArrowBackIosIcon viewBox="0 0 16 24" />
					</IconButton>

					<IconButton
						color="secondary"
						onClick={handleNextImageClick}
						sx={{
							position: "absolute" as "absolute",
							top: "50%",
							right: "0%",
							transform: "translate(50%, -100%)",
							zIndex: "9999",
							backgroundColor: "#fff",

							"&:hover": {
								backgroundColor: "#fff",
								color: "primary.main",
							},
						}}
					>
						<ArrowForwardIosIcon />
					</IconButton>
					<Image src={props.imageArray[props.mainImageIndex]} alt="" />
				</Box>
				<ImageThumbnailPanel
					images={props.imageThumbnails}
					width={mainImageWidth}
					thumbnailWidth={90}
					handleClick={handleThumbnailIconClick}
				/>
			</Box>
		</Modal>
	);
};

export default BasicModal;
