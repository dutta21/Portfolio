import React from 'react';

const Certification = () => {
  return (
    <section id="certification" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Certifications</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Mastering Data Structures and Algorithms using C and C++</h3>
            <p>Issuing Organization: Udemy</p>
            <p>Date: 04-2022</p>
          </div>

          <div className="col-md-4">
            <h3>React JS</h3>
            <p>Issuing Organization: Infosys Springboard</p>
            <p>Date: 03-2023</p>
          </div>

          <div className="col-md-4">
            <h3>MERN Stack - The Complete Guide</h3>
            <p>Issuing Organization: IIHT</p>
            <p>Date: pursuing</p>
          </div>
          {/* Add more certification entries as needed */}
        </div>
      </div>
    </section>
  );
}

export default Certification;
