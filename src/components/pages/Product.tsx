import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";

import {
	Button,
	Box,
	Container,
	Grid,
	IconButton,
	Typography,
	TextField,
} from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import ImageThumbnailPanel from "../ImageThumbnailPanel";
import { AppContext, CartItem } from "../../context/AppContext";
import BasicModal from "../BasicModal";

// images
import product1 from "../../images/image-product-1.jpg";
import product2 from "../../images/image-product-2.jpg";
import product3 from "../../images/image-product-3.jpg";
import product4 from "../../images/image-product-4.jpg";

import productThumbnail1 from "../../images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../../images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../../images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../../images/image-product-4-thumbnail.jpg";

// Move to DB
const productId = 100;
const productName = "Fall Limited Edition Sneakers";
const productPrice = 75;
const thisProductThumbnail = productThumbnail1;

const Product: React.FC = () => {
	const ctx = useContext(AppContext);

	const [itemQty, setItemQty] = useState(1);
	// Add context to store if modal is open
	const [open, setOpen] = useState(false);

	const [modalImageIndex, setModalImageIndex] = useState<number>(-1);

	const imageThumbnails = [
		productThumbnail1,
		productThumbnail2,
		productThumbnail3,
		productThumbnail4,
	];

	const imagesFullResolution = [product1, product2, product3, product4];

	const handleOpen = (event: React.MouseEvent) => {
		const target = event.currentTarget;

		if (!ctx.handleActiveModalImage) return;

		const clickedImageIndex = target.getAttribute("data-arrayindex");

		setModalImageIndex(() => +clickedImageIndex!);

		setOpen(true);
	};
	const handleClose = () => setOpen(false);

	const handleChangeToModalImage = (index: number) => {
		setModalImageIndex(() => index);
	};

	const Image = styled("img")(({ theme }) => ({
		// display: "block",
		borderRadius: "10px",
		width: "400px",
	}));

	const reduceItemQuantity = () => {
		setItemQty((prevValue) => (prevValue > 1 ? prevValue - 1 : 1));
	};

	const increaseItemQuantity = () => {
		setItemQty((prevValue) => prevValue + 1);
	};

	const handleAddToCartBtnClick = () => {
		const thisCartItem: CartItem = {
			id: productId,
			image: thisProductThumbnail,
			itemName: productName,
			unitPrice: productPrice,
			quantity: itemQty,
		};

		if (!ctx.addToCart) return;
		ctx.addToCart(thisCartItem);

		setItemQty(() => 1);
	};

	return (
		<>
			<Container maxWidth="lg">
				<Grid container spacing={2} sx={{ mt: 10 }}>
					<Grid
						container
						md={6}
						sm={12}
						direction="column"
						justifyContent="center"
						alignItems="center"
						gap={2}
					>
						<Grid item>
							<Box>
								<Image src={product1} />
							</Box>
						</Grid>
						<Grid item>
							<ImageThumbnailPanel
								images={imageThumbnails}
								handleClick={handleOpen}
							/>
						</Grid>
					</Grid>
					<Grid
						container
						md={6}
						sm={12}
						alignContent="center"
						gap={4}
						direction="column"
					>
						<Typography variant="h3" component="h3" color="primary.main">
							Sneaker Company
						</Typography>

						<Typography variant="h2" component="h2">
							{productName}
						</Typography>

						<Typography variant="body1" component="p" color="secondary.main">
							These low-profile sneakers are your perfect casual wear companion.
							Featuring a durable rubber outer sole, they’ll withstand
							everything the weather can offer.
						</Typography>

						<Box
							sx={{
								display: "flex",
								width: "100%",
								gap: "1rem",
								alignItems: "center",
							}}
						>
							<Typography variant="priceCurrent" component="h3">
								${productPrice}
							</Typography>
							{/* Create new typography for discounts */}
							<Typography
								variant="percentageDiscount"
								component="p"
								color="primary.main"
								sx={{
									backgroundColor: "#FFEEE2",
									padding: "4px",
									borderRadius: "4px",
									marginRight: "auto",
								}}
							>
								50%
							</Typography>
						</Box>
						<Typography
							variant="priceOriginal"
							component="h3"
							sx={{ marginTop: "-1rem" }}
						>
							$150.00
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<IconButton
									onClick={reduceItemQuantity}
									color="primary"
									aria-label="remove"
								>
									<RemoveIcon />
								</IconButton>
								<TextField
									type="number"
									InputProps={{ inputProps: { min: 1 }, readOnly: true }}
									disabled
									size="small"
									id="item-qty"
									value={itemQty}
									// variant="filled"
									sx={{ width: "8ch", input: { textAlign: "center" } }}
								/>
								<IconButton
									onClick={increaseItemQuantity}
									color="primary"
									aria-label="add"
								>
									<AddIcon />
								</IconButton>
							</Box>
							<Button
								variant="contained"
								color="primary"
								startIcon={<ShoppingCartOutlinedIcon />}
								onClick={handleAddToCartBtnClick}
							>
								Add to cart
							</Button>
						</Box>
					</Grid>
				</Grid>
				{open ? (
					<BasicModal
						open={open}
						handleClose={handleClose}
						mainImageIndex={modalImageIndex}
						imageThumbnails={imageThumbnails}
						imageArray={imagesFullResolution}
						setModalImageIndex={handleChangeToModalImage}
					/>
				) : (
					""
				)}
			</Container>
		</>
	);
};

export default Product;
