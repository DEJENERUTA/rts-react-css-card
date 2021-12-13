import "./About.scss";
const AboutMe = ({ text }) => {
	return (
		<div className="about-container">
			<h2>About</h2>
			<p>{text}</p>
		</div>
	);
};

export default AboutMe;
