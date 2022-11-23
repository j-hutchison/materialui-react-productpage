import React, { useState } from "react";
import { Box } from "@mui/material";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

type NavIcon = {
	type: "image" | "icon";
	imageString?: string;
	imageComponent?: React.ReactNode;
};

interface NavIconMenuProps {
	iconObject: NavIcon;
	tooltip: string;
	onClickHandler: () => void;
	children: React.ReactNode;
}

const NavIconWithMenu: React.FC<NavIconMenuProps> = (props) => {
	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title={props.tooltip}>
				<IconButton onClick={props.onClickHandler} sx={{ p: 0 }}>
					{props.iconObject.type === "image" ? (
						<Avatar alt="Remy Sharp" src={props.iconObject.imageString} />
					) : (
						<>{props.iconObject.imageComponent}</>
					)}
				</IconButton>
			</Tooltip>

			{props.children}
		</Box>
	);
};

export default NavIconWithMenu;
