import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact-text">
        <h2>Contact Me</h2>
        <h4>Let's Work Together</h4>
        <p>I will help you in your next project. Contact me using the details below.</p>

        <div className="contact-list">

          {/* Local Address */}
          <li>
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noreferrer"
            >
              Local Address
            </a>
          </li>

          {/* Email */}
          <li>
            <a href="mailto:kkavibharathi51@gmail.com">
              kkavibharathi51@gmail.com
            </a>
          </li>

          {/* Phone Number */}
          <li>
            <a href="tel:+919629892634">
              +91 9629892634
            </a>
          </li>

          {/* Chat Button */}
          <a href="mailto:kkavibharathi51@gmail.com">
            <button className="btn">Let's Chat</button>
          </a>
        </div>

        {/* Social Icons */}
        <div className="contact-icons">

          <a 
            href="https://www.linkedin.com/in/kavibharathi-palanisamy-40a81a220/" 
            target="_blank" 
            rel="noreferrer"
          >
            <i className='bx bxl-linkedin'></i>
          </a>

          <a 
            href="https://github.com/vedhakavi" 
            target="_blank" 
            rel="noreferrer"
          >
            <i className='bx bxl-github'></i>
          </a>

          <a 
            href="https://wa.me/919629892634" 
            target="_blank" 
            rel="noreferrer"
            title="+91 9629892634"
          >
            <i className='bx bxl-whatsapp'></i>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
