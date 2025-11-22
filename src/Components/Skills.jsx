import React,{ useRef } from "react";


import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaNodeJs,
	FaReact,
	FaBootstrap,
	FaGitAlt,
	FaGithub,
	FaLinux,
	FaAws,
	
} from "react-icons/fa";
import {
	SiExpress,
	
	SiMongodb,
	SiMysql,
	
} from "react-icons/si";

const techs = [
	{ name: "HTML", icon: <FaHtml5 style={{ color: "#E34F26" }} /> },
	{ name: "CSS", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
	{ name: "JavaScript", icon: <FaJs style={{ color: "#F7DF1E" }} /> },
	{ name: "Node.js", icon: <FaNodeJs style={{ color: "#339933" }} /> },
	{ name: "Express.js", icon: <SiExpress style={{ color: "rgba(224, 205, 32, 1)" }} /> },
	{ name: "React.js", icon: <FaReact style={{ color: "#61DAFB" }} /> },
	{ name: "Bootstrap", icon: <FaBootstrap style={{ color: "#7952B3" }} /> },
	
	{ name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} /> },
	{ name: "SQL", icon: <SiMysql style={{ color: "#4479A1" }} /> },
	
	{ name: "AWS S3", icon: <FaAws style={{ color: "#FF9900" }} /> },
	{ name: "Linux", icon: <FaLinux style={{ color: "#FCC624" }} /> },
	
	{ name: "REST API", icon: <FaGitAlt style={{ color: "#F05032" }} /> },
	
	{ name: "GitHub", icon: <FaGithub style={{ color: "rgba(218, 71, 238, 1)" }} /> },
];

// const scrollAmount = 150;

const Skills = () => {
  
    
      const containerRef = useRef(null);

	// const scrollLeft = () => {
	// 	if (containerRef.current) {
	// 		containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
	// 	}
	// };

	// const scrollRight = () => {
	// 	if (containerRef.current) {
	// 		containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
	// 	}
	// };

	// Split into two rows
	const half = Math.ceil(techs.length / 2);
	const row1 = techs.slice(0, half);
	const row2 = techs.slice(half);

	return (
		<section className="skills" id="skills">
			<div className="main-text">
				<h2>My Skills</h2>
			</div>
			<br />
			<div
				style={{
					width: "100%",
					maxWidth: 900,
					margin: "0 auto",
					userSelect: "none",
					fontFamily: "Arial, sans-serif",
				}}
			>

				{/* <div style={{ textAlign: "center", marginBottom: 12 }}>
					<button
						onClick={scrollLeft}
						style={{
							marginRight: 8,
							cursor: "pointer",
							padding: "6px 12px",
							fontSize: 14,
							borderRadius: 4,
							border: "1px solid #ccc",
							backgroundColor: "#f5f5f5",
						}}
						aria-label="Scroll Left"
					>
						<FaArrowLeft />
					</button>
					<button
						onClick={scrollRight}
						style={{
							cursor: "pointer",
							padding: "6px 12px",
							fontSize: 14,
							borderRadius: 4,
							border: "1px solid #ccc",
							backgroundColor: "#f5f5f5",
						}}
						aria-label="Scroll Right"
					>
						<FaArrowRight />
					</button>
				</div> */}

				<div
					ref={containerRef}
					style={{
						overflowX: "auto",
						whiteSpace: "nowrap",
						scrollbarWidth: "thin",
						scrollbarColor: "#888 #eee",
						padding: "8px 0",
						marginBottom: 16
					}}
				>
					<div style={{ display: "inline-block", width: "100%" }}>
						{[row1, row2].map((row, idx) => (
							<div
								key={idx}
								style={{
									display: "flex",
									justifyContent: "flex-start",
									gap: 24,
									padding: "8px 16px",
									whiteSpace: "nowrap",
								}}
							>
								{row.map(({ name, icon }) => (
									<div
										key={name}
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											width: 100,
											flexShrink: 0,
										}}
										title={name}
									>
										<div style={{ fontSize: 48 }}>{icon}</div>
										<span style={{ marginTop: 6, fontSize: 14 }}>{name}</span>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
    
                    );
};

export default Skills;
