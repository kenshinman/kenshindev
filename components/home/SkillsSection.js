import MainSection from "./MainSection";

const SkillsSection = () => {
	return (
		<>
			<MainSection id="tools">
				<h1 className="title">SKILLS</h1>
				<div className="skillswrap">
					<div className="skill">
						<i className="fab fa-js"></i>
					</div>
					<div className="skill">
						<i className="fab fa-react"></i>
					</div>
					<div className="skill">
						<i className="fab fa-gulp"></i>
					</div>
					<div className="skill">
						<i className="fab fa-npm"></i>
					</div>
					<div className="skill">
						<i className="fab fa-css3-alt"></i>
					</div>
					<div className="skill">
						<i className="fab fa-html5"></i>
					</div>
					<div className="skill">
						<i className="fab fa-sass"></i>
					</div>
					<div className="skill">
						<i className="fab fa-docker"></i>
					</div>
					<div className="skill">
						<i className="fab fa-jenkins"></i>
					</div>
					<div className="skill">
						<i className="fab fa-aws"></i>
					</div>
					<div className="skill">
						<i className="fab fa-node"></i>
					</div>
				</div>
			</MainSection>

			<style jsx>{`
				.skillswrap {
					display: grid;
					grid-template-columns: repeat(5, 1fr);
					grid-column-gap: 1rem;
					width: 100%;
					max-width: 300px;
				}
				.skill {
					width: 60px;
					height: 60px;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.skill i {
					font-size: 40px;
				}

				h1.title {
					margin-bottom: 1rem;
				}
			`}</style>
		</>
	);
};

export default SkillsSection;
