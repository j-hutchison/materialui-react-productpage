import React, { useState } from "react";

export type CartItem = {
	id: number;
	image: string;
	itemName: string;
	unitPrice: number;
	quantity: number;
};

interface IAppContext {
	cart: CartItem[];
	showCart: boolean;
	showUserDropdown: boolean;
	activeModalImage: string;
	handleShowCartClick?: () => void;
	handleShowUserDropdownClick?: () => void;
	addToCart?: (item: CartItem) => void;
	removeFromCart?: (index: number) => void;
	handleActiveModalImage?: (image: string) => void;
}

const defaultState = {
	cart: [],
	showCart: false,
	showUserDropdown: false,
	activeModalImage: "",
};

export const AppContext = React.createContext<IAppContext>(defaultState);

interface AppContextProps {
	children: React.ReactNode;
}

const AppContextProvider: React.FC<AppContextProps> = (props) => {
	const [activeModalImage, setActiveModalImage] = useState("");
	const [showCart, setShowCart] = useState(false);
	const [showUserDropdown, setShowUserDropdown] = useState(false);
	const [cart, setCart] = useState<CartItem[]>([]);

	const handleShowCartClick = () => {
		setShowCart((prevValue) => !prevValue);
	};
	const handleShowUserDropdownClick = () => {
		setShowUserDropdown((prevValue) => !prevValue);
	};
	const handleActiveModalImage = (image: string) => {
		setActiveModalImage(() => image);
	};

	const addToCart = (item: CartItem) => {
		setCart((currentCart) => {
			const itemAlreadyInCart = currentCart.findIndex(
				(existingItem) => item.id === existingItem.id
			);

			let thisCartItem = { ...item };

			if (itemAlreadyInCart >= 0) {
				thisCartItem.quantity =
					thisCartItem.quantity + currentCart[itemAlreadyInCart].quantity;
				const newCart = [...currentCart];
				newCart[itemAlreadyInCart] = thisCartItem;
				return newCart;
			}
			return [...currentCart, thisCartItem];
		});
	};
	const removeFromCart = (index: number) => {
		setCart((prevValue) =>
			prevValue.filter((cartItem) => cartItem.id !== index)
		);
	};

	return (
		<AppContext.Provider
			value={{
				cart,
				showCart,
				showUserDropdown,
				activeModalImage,
				handleShowCartClick,
				handleShowUserDropdownClick,
				addToCart,
				removeFromCart,
				handleActiveModalImage,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
