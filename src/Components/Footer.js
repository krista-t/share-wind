const Footer = () => {
	const today = new Date();

	return (
		<footer className="footer">
			<p>
				Designed and Developed by Kristina Tomicic &copy;{" "}
				{today.getFullYear()}
			</p>
		</footer>
	);
};

export default Footer;
