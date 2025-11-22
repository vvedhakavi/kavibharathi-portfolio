import React from 'react'

const Home = () => {
  return (
   <section className="home" id="home">
		<video autoPlay loop muted playsInline className="back-video">
			<source src="images/video4.mp4" type="video/mp4" />
		</video>
		<div className="home-text">
			<h4>Hello</h4>
			<h1>I'm Kavibharathi</h1>
			<h3>MERN Stack Developer</h3>
		 <a href="kavibharthi.pdf" className="btn" target='_blank' rel="noopener noreferrer">Download Resume</a>
				
		</div>
	</section>
  )
}

export default Home
