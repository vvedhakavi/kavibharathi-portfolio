import React from 'react'

const Qualification = () => {
  return (
   <section className="qualifications" id="qualifications">
		<div className="main-text">
			<h2>My Qualifications</h2>
		</div>
		<br />
		<div className="qualifications-content">
			<div className="box">
				<h3>B.E in Electronics and Communication
					Engineering</h3>
				<div>
					<h4><span><i className="fa fa-calendar">&nbsp;<span> 08/2017 - 05/2021</span> </i> <br /> <br />
						<i className="fa fa-map-marker"> &nbsp; <span>Coimbatore, Tamil Nadu</span> </i> <br /> <br />
						<i className="fa fa-graduation-cap" aria-hidden="true"></i> &nbsp;
						<span>Institution: Christ the King Engineering College &nbsp; | &nbsp; CGPA: 7.5 / 10</span>
					</span>
					</h4>

				</div>
			</div>
			<div className="box">
				<h3>HSC</h3>
				<div>
					<h4><span><i className="fa fa-calendar"><span> 06/2016 - 05/2017  </span> </i> <br />  <br /> <i className="fa fa-map-marker"> 
                        <span>Erode, Tamil Nadu</span></i> <br /> <br />
						<i className="fa fa-graduation-cap" aria-hidden="true"></i> &nbsp;
						<span>Institution: K.V.K Govt Higher Secondary School &nbsp; | &nbsp; Percentage: 70 / 100</span></span></h4>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Qualification
