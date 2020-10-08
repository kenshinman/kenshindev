const SocialIcons = () => {
	return (
		<div className="iconswrap">
			<h3>Follow Me</h3>
			<ul>
				<li>
					<a
						href="https://twitter.com/kay_kenshin"
						target="_blank"
						rel="noopener noreferrer">
						<i className="fab fa-twitter"></i>
					</a>
				</li>
				<li>
					<a
						href="https://linkedin.com/in/paul-kehinde-orilogbon"
						target="_blank"
						rel="noopener noreferrer">
						<i className="fab fa-linkedin"></i>
					</a>
				</li>
				<li>
					<a
						href="https://facebook.com/kenshinman"
						target="_blank"
						rel="noopener noreferrer">
						<i className="fab fa-facebook"></i>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/kenshinman"
						target="_blank"
						rel="noopener noreferrer">
						<i className="fab fa-github"></i>
					</a>
				</li>
			</ul>

			<style jsx>
				{`
					.iconswrap {
						display: block;
						margin-top: 1rem;
					}

					.iconswrap ul {
						display: flex;
						align-items: center;
						height: 60px;
						padding: 0.5rem;
					}

					.iconswrap ul li {
					}

					.iconswrap ul li a {
						margin-right: 1rem;
						width: 50px;
						height: 50px;
						display: flex;
						border-radius: 100%;
						justify-content: center;
						align-items: center;
						text-decoration: none;
					}

					.iconswrap ul li a:hover {
						box-shadow: 2px 2px 3px #999;
					}

					.iconswrap ul li a i {
						font-size: 28px;
					}
				`}
			</style>
		</div>
	);
};

export default SocialIcons;
