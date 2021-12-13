import "./Header.scss";
/* import { FaloReorderTwoOut } from "react-icons/io5"; */
const Header = ({ name, profilePicture }) => {
	return (
		<header
			className="header-container"
			style={{ backgroundImage: `url('./assets/${profilePicture}')` }}
		>
			<div className="burger-item"></div>
			<span className="name">{name}</span>
			{/* <FaloReorderTwoOut /> */}
		</header>
	);
};

export default Header;
