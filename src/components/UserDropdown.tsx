import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

import { Menu, MenuItem, Typography, Button } from "@mui/material";

interface UserDropdownProps {
	settings: string[];
}

const UserDropdown: React.FC<UserDropdownProps> = (props) => {
	const ctx = useContext(AppContext);

	// User Menu State
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	return (
		<Menu
			sx={{ mt: "45px" }}
			id="menu-appbar"
			anchorEl={anchorElUser}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={ctx.showUserDropdown}
			onClose={ctx.handleShowUserDropdownClick}
		>
			{props.settings.map((option) => (
				<MenuItem key={option} onClick={ctx.handleShowUserDropdownClick}>
					<Typography>{option}</Typography>
				</MenuItem>
			))}
		</Menu>
	);
};

export default UserDropdown;
