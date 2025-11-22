import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
        <div className="contact-text">
				<h2>Contact Me</h2>
				<h4>Let's Work Together</h4>
				<p>I will Help you in your next Project, Contact me through details given below .</p>
				<div className="contact-list">
					<li><a href="#">Local Address</a></li>
					<li><a href="#">kkavibharathi51@gmail.com</a></li>
					<li><a href="#">+91 9629892634</a></li>
					<a href="mailto: kkavibharathi51@gmail.com">
						<button className="btn">
							Let's Chat
						</button>
					</a>
				</div>
                <div className="contact-icons">
					<a href="https://www.linkedin.com/in/kavibharathi-palanisamy-40a81a220/" target="_blank"><i className='bx bxl-linkedin' ></i></a>
					
					<a href="https://github.com/vedhakavi" target="_blank"><i className='bx bxl-github' ></i></a>
					
					<a title="+91 9629892634"><i className='bx bxl-whatsapp' ></i></a>

				</div>
			</div>
    </section>
  );
};

export default Contact;
