import React, { useState, useContext } from "react";

import CartDropdownEntry from "./CartDropdownEntry";
import { AppContext } from "../context/AppContext";

import { Divider, Menu, MenuItem, Typography, Button } from "@mui/material";

interface CartDropdownProps {
	settings: string[];
}

const CartDropdown: React.FC<CartDropdownProps> = (props) => {
	const ctx = useContext(AppContext);

	const [anchorElCart, setAnchorElCart] = useState<null | HTMLElement>(null);

	return (
		<Menu
			sx={{ mt: "45px" }}
			id="menu-appbar"
			anchorEl={anchorElCart}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={ctx.showCart}
			onClose={ctx.handleShowCartClick}
		>
			<Typography variant="h4" component="h4" sx={{ padding: "24px 16px" }}>
				Cart
			</Typography>
			<Divider />

			{ctx.cart.length > 0 ? (
				ctx.cart.map((cartItem, index) => (
					<MenuItem
						key={index}
						onClick={ctx.handleShowCartClick}
						sx={{ minWidth: "360px" }}
					>
						<CartDropdownEntry
							image={cartItem.image}
							itemName={cartItem.itemName}
							quantity={cartItem.quantity}
							price={cartItem.unitPrice}
						/>
					</MenuItem>
				))
			) : (
				<Typography
					variant="body1"
					component="p"
					color="secondary"
					sx={{ minWidth: "360px", textAlign: "center", padding: "80px 0" }}
				>
					Your cart is empty
				</Typography>
			)}
		</Menu>
	);
};

export default CartDropdown;
