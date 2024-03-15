import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import mypic from './images/mypic.jpg';



const AboutMe = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            
            <img src={mypic} alt=" " className="img-fluid rounded-circle" />
            
          </div>
          <div className="col-md-6">
            <h2>About Me</h2>
            <p>Greetings! I'm Aritra Dutta, a front-end developer skilled in React and Android development using Kotlin and XML. I specialize in crafting dynamic web interfaces with React and designing native Android apps tailored for seamless user experiences.<br/><br/>

                With expertise in component-based architecture and state management, I create engaging web applications that resonate across platforms. In Android development, I leverage Kotlin and XML to build feature-rich apps that prioritize user experience and functionality.<br/><br/>

                Beyond technical skills, I value collaboration and continuous learning. I thrive in environments that foster creativity and exploration, constantly seeking opportunities to expand my knowledge and refine my craft.

                Throughout my education, I've tackled diverse projects, honing my problem-solving abilities and passion for excellence. I'm eager to connect with like-minded professionals to explore collaboration opportunities and exchange insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
