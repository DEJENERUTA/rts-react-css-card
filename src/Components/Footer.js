import "./Footer.scss";
const Footer = ({ by, pictureBy }) => {
	return (
		<div className="footer-container">
			<p>
				By: <span className="footer-bold">{by}</span>
			</p>
			<p>
				Image by: <span className="footer-bold">{pictureBy}</span>
			</p>
		</div>
	);
};

export default Footer;
