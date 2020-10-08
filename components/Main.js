const Main = ({ children }) => {
	return (
		<main className="main">
			{children}
			<style jsx>{`
				.main {
					background-color: #f4f4f4;
					margin-left: var(--sideBarWidth);
					width: calc(100vw - var(--sideBarWidth))
					position: relative;
					height: 100%;
					align-items: center;
					min-height: 100vh;
					overflow: scroll;
				}
			`}</style>
		</main>
	);
};

export default Main;
