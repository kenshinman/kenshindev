import React, { useEffect, useState } from "react";
import Link from "next/link";

const Nav = () => {
	const [headerTitle, setHeaderTitle] = useState("kenshin.dev");
	const toggleMenu = () => {
		if (window.innerWidth > 480) {
			return false;
		}

		console.log(window.location.href);
		const menu = document.querySelector(".sidenav");
		if (menu.classList.contains("animate__slideInLeft")) {
			menu.classList.remove("animate__slideInLeft");
			menu.classList.add("animate__slideOutLeft");
			setTimeout(() => {
				menu.classList.remove("open");
				menu.classList.add("close");
			}, 300);
			// setOpen(false);
		} else {
			menu.classList.remove("animate__slideOutLeft");
			menu.classList.add("animate__slideInLeft");
			menu.classList.remove("close");
			menu.classList.add("open");
		}
	};

	return (
		<>
			<nav className="topnav">
				<i onClick={toggleMenu} className="fas fa-bars" aria-hidden={true}></i>
				<h3 className="headertitle">{headerTitle}</h3>
			</nav>
			<nav className={`sidenav animate__animated animate__faster`}>
				<div className="content text-center">
					<img
						className="profilepic"
						src="/static/img/kehindeOrilogbon.jpg"
						alt="kehinde orilogbon"
					/>

					<ul className="nav">
						<li className="nav-item">
							<Link href="/">
								<a onClick={toggleMenu}>Home</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/#tools">
								<a onClick={toggleMenu}>Tools</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/#blog">
								<a>Blog</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/#portfolio">
								<a onClick={toggleMenu}>Portfolio</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<style jsx>
				{`
					.sidenav {
						width: var(--sideBarWidth);
						background-color: var(--primary-color);
						height: 100vh;
						position: fixed;
						top: 0;
						left: 0;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						max-width: 300px;
						padding-top: 30px;
						color: white;
					}

					.sidenav .content {
						padding: 15px;
					}
					img.profilepic {
						width: 150px;
						height: 150px;
						border-radius: 100%;
						border: 8px solid rgba(255, 255, 255, 0.3);
						margin-bottom: 3rem;
					}
					ul.nav {
						list-style: none;
					}

					ul.nav li.nav-item a {
						display: block;
						padding: 1rem 2rem;
						text-decoration: none;
						text-align: center;
						text-transform: uppercase;
						font-weight: bold;
						color: #f4f4f4;
						opacity: 0.7;
					}

					ul.nav li.nav-item a:hover,
					ul.nav li.nav-item a.active {
						opacity: 1;
					}

					 {
						/* topnav */
					}

					.topnav {
						display: none;
						height: 40px;
						padding: 10px 15px;
						background-color: var(--primary-color);
						width: 100vw;
						position: fixed;
						z-index: 5000;
						box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
						align-items: center;
					}

					.topnav i {
						color: white;
						font-size: 18px;
					}

					.close {
						display: flex;
					}

					@media only screen and (max-width: 480px) {
						.sidenav {
							display: none;
							position: fixed;
							width: 300px;
							top: 50px;
							left: 0;
							z-index: 5;
						}

						.topnav {
							display: flex;
							align-items: center;
						}
						.open {
							display: flex;
						}

						.close {
							display: none;
						}

						h3.headertitle {
							margin-left: 20px;
							color: #fff;
							text-transform: uppercase;
						}
					}
				`}
			</style>
		</>
	);
};

export default Nav;
