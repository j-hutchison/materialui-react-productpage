import React, { useContext } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

import DeleteIcon from "@mui/icons-material/Delete";
import { AppContext } from "../context/AppContext";

interface CartDropdownEntryProps {
	image: string;
	itemName: string;
	quantity: number;
	price: number;
}

const CartDropdownEntry: React.FC<CartDropdownEntryProps> = (props) => {
	const ctx = useContext(AppContext);

	const ImageThumbnail = styled("img")(({ theme }) => ({
		width: "50px",
		height: "50px",
		borderRadius: "4px",
	}));

	const handleRemoveButtonClick = () => {
		if (!ctx.removeFromCart) return;
		ctx.removeFromCart(100);
	};

	return (
		<Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
			<ImageThumbnail src={props.image} alt={props.itemName} />
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<Typography variant="body1" component="p">
					{props.itemName}
				</Typography>
				<Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
					<Typography variant="body1" component="p">
						${props.price} x {props.quantity}
					</Typography>
					<Typography variant="h4" component="p">
						${props.price * props.quantity}
					</Typography>
				</Box>
			</Box>
			<IconButton
				size="small"
				aria-label="delete cart item"
				onClick={handleRemoveButtonClick}
				color="secondary"
			>
				<DeleteIcon />
			</IconButton>
		</Box>
	);
};

export default CartDropdownEntry;
