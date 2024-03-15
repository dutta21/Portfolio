import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Education</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>DSATM, Bangalore</h3>
            <p>Degree: MCA</p>
            <p>Year: 2023</p>
            <p>CGPA: 8.11</p>
          </div>

          <div className="col-md-6">
            <h3>Kalyani Mahavidyalaya, Kalyani</h3>
            <p>Degree: B.Sc. in Computer Science(H)</p>
            <p>Year: 2021</p>
            <p>CGPA: 7.86</p>
          </div>
          {/* Add more education entries as needed */}
        </div>
      </div>
    </section>
  );
}

export default Education;
