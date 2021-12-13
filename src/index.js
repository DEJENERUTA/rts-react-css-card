import React from "react";

import ReactDOM from "react-dom";

import ProfileCard from "./Components/ProfileCard";

import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<ProfileCard
			name="Dejene"
			profilePicture="dejene.png"
			aboutMeText="I am Dejene a React Developer, Courteous and enthusiastic, I am passionate about IT and everything in its orbit"
			by="@devD"
			pictureBy="Pexels"
			linkedInUrl="https://www.linkedin.com/in/dejene-daba-432029140/"
			faceBookUrl="https://www.facebook.com/dejene.daba.73"
			twitterUrl="https://twitter.com/DejeneDaba5"
			githubUrl="https://github.com/DEJENERUTA"
			googleUrl="https://myaccount.google.com/profile"
		/>
	</React.StrictMode>,

	document.getElementById("root")
);
