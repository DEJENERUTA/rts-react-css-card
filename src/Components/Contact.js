import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Contact.scss";
library.add(fab);
const Contact = ({
	linkedInUrl,
	faceBookUrl,
	twitterUrl,
	githubUrl,
	googleUrl,
}) => {
	return (
		<div className="contact-container">
			<h2>Contact</h2>
			<nav>
				<ul>
					<li>
						<a href={faceBookUrl}>
							<FontAwesomeIcon icon={["fab", "facebook"]} />
						</a>
					</li>
					<li>
						<a href={twitterUrl}>
							<FontAwesomeIcon icon={["fab", "twitter"]} />
						</a>
					</li>
					<li>
						<a href={googleUrl}>
							<FontAwesomeIcon icon={["fab", "google"]} />
						</a>
					</li>
					<li>
						<a href={githubUrl}>
							<FontAwesomeIcon icon={["fab", "github"]} />
						</a>
					</li>
					<li>
						<a href={linkedInUrl}>
							<FontAwesomeIcon icon={["fab", "linkedin"]} />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Contact;
