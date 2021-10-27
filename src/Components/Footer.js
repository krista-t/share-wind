const Footer = () => {
	const today = new Date();

	return (
		<footer className="footer">
			<p>
				Designed and Developed by FAIR Data Collective
				&copy; {today.getFullYear()}
			</p>
		</footer>
	);
};

export default Footer;
