const MainSection = ({ children, id }) => {
	return (
		<section className="first flex" id={id}>
			<div className="innercontent">{children}</div>

			<style jsx>{`
				.first {
					height: 100vh;
					background-color: #f4f4f4;
					align-items: center;
				}

				.innercontent {
					padding: 3rem 1rem;
					width: 100%;
				}
			`}</style>
		</section>
	);
};

export default MainSection;
