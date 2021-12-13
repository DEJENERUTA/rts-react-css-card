import Header from "./Header";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import "./ProfileCard.scss";

const ProfileCard = ({
	name,
	profilePicture,
	aboutMeText,
	by,
	pictureBy,
	linkedInUrl,
	faceBookUrl,
	twitterUrl,
	githubUrl,
	googleUrl,
}) => {
	return (
		<div className="profile-card">
			<Header name={name} profilePicture={profilePicture} />
			<AboutMe text={aboutMeText} />
			<Contact
				linkedInUrl={linkedInUrl}
				faceBookUrl={faceBookUrl}
				twitterUrl={twitterUrl}
				githubUrl={githubUrl}
				googleUrl={googleUrl}
			/>
			<Footer by={by} pictureBy={pictureBy} />
		</div>
	);
};

export default ProfileCard;
