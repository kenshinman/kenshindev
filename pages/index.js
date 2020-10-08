import React from "react";
import Layout from "../components/Layout";
import MainSection from "../components/home/MainSection";
import SocialIcons from "../components/shared/SocialIcons";
import SkillsSection from "../components/home/SkillsSection";
import Portfolio from "../components/home/Portfolio";

const Home = () => (
	<Layout>
		<MainSection>
			<h1 className="name">
				<span>Paul</span> Kehinde Orilogbon
			</h1>
			<h4 className="subtext">Frontend Developer</h4>
			<p>
				I am an ambitious and skilful Frontend Software Engineer with more than
				6 years of professional experience with a passion for solving real-life
				problems using technology. An adept and creative web developer with a
				focus on usability and functionality.
			</p>
			<p>
				Technically sound and constantly up to date with the industry standards
				meaning that each project is handled with the latest standards in mind.
				A strong communicator with the ability to communicate ideas and transmit
				information to team members. Also a great collaborator and a great
				person with respect for others and their beliefs and values.
			</p>
			<SocialIcons />
		</MainSection>

		<SkillsSection />
		<Portfolio />

		<style jsx>
			{`
				h1.name {
					font-weight: bold;
					line-height: 1.4;
					font-size: 2.5rem;
					text-transform: uppercase;
				}

				h1.name span {
					color: var(--primary-color);
				}
				.subtext {
					color: var(--grey);
					font-weight: 400;
					font-size: 18px;
					text-transform: uppercase;
				}
			`}
		</style>
	</Layout>
);

export default Home;
