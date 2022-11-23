import React, { useState, useContext } from "react";
import {
	AppBar,
	Box,
	Container,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem,
	SvgIcon,
} from "@mui/material";

// Context Import
import { AppContext } from "../context/AppContext";

// Custom Components
import CartDropdown from "./CartDropdown";
import UserDropdown from "./UserDropdown";
import NavIconWithMenu from "./NavIconWithMenu";
import MenuTab from "./MenuTab";

// Images & Icons
import { ReactComponent as Logo } from "../images/logo.svg";
import avatarImg from "../images/image-avatar.png";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const pages = ["Collections", "Men", "Women", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar: React.FC = () => {
	const ctx = useContext(AppContext);

	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
							alignItems: "center",
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<SvgIcon
							component={Logo}
							sx={{
								display: "inline-block",
								width: "150px",
								height: "30px",
								fontSize: "2rem",
							}}
							viewBox="0 0 138 24"
						></SvgIcon>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							alignItems: "center",
						}}
					>
						<SvgIcon
							component={Logo}
							sx={{
								display: "inline-block",
								width: "150px",
								height: "30px",
								fontSize: "2rem",
							}}
							viewBox="0 0 138 24"
						></SvgIcon>
						<MenuTab names={pages} />
					</Box>

					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: "2rem",
						}}
					>
						<NavIconWithMenu
							iconObject={{
								type: "icon",
								imageComponent: <ShoppingCartOutlinedIcon />,
							}}
							tooltip="Open Cart"
							onClickHandler={ctx.handleShowCartClick!}
						>
							<CartDropdown settings={settings}></CartDropdown>
						</NavIconWithMenu>
						<NavIconWithMenu
							iconObject={{
								type: "image",
								imageString: avatarImg,
							}}
							tooltip="Open Settings"
							onClickHandler={ctx.handleShowUserDropdownClick!}
						>
							<UserDropdown settings={settings} />
						</NavIconWithMenu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
