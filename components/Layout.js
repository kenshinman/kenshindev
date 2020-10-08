import Nav from "./nav";
import Main from "./Main";
import Head from "./head";

const Layout = ({ children }) => {
	return (
		<div className="container flex">
			<Head />
			<Nav />
			<Main>{children}</Main>
		</div>
	);
};

export default Layout;
