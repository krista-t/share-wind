import fairdata from "../assets/fairdata.png";
const Footer = () => {
	const today = new Date();

	return (
		<footer className="footer">
			<a
				href="https://fairdatacollective.com"
				target="_blank"
				rel="noreferrer">
				<img height={90} src={fairdata} alt="logo" />
			</a>

			<p>
				Designed and Developed by FAIR Data Collective
				&copy; {today.getFullYear()}
			</p>
		</footer>
	);
};

export default Footer;
