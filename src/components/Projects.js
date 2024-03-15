import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import react from './images/react.png'
import senti from './images/senti.jpg'
import android from './images/android.png'


const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={react} alt="Portfolio Item 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Weather App</h5>
                <p className="card-text">Engineered a Weather Application leveraging React framework, empowering users to access real-time
                    meteorological data for designated cities; enhanced user experience by providing up-to-date weather
                    forecasts, including temperature, humidity, and wind speed information.Users can seamlessly obtain up-to-date weather data without navigating through multiple screens or
                    encountering needless complexity.</p>
                <a href="https://github.com/dutta21/aritra-weather-app" className="btn btn-primary">GitHub Link</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src={senti} alt="Portfolio Item 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Sentiment Analysis for Amazon Alexa Reviews</h5>
                <p className="card-text">Developed a sentiment analysis project focusing on Amazon Alexa reviews.
                Leveraging natural language processing (NLP) techniques to interpret the sentiment of reviews,
                categorizing them as positive, negative, or neutral, represents a pivotal application of computational
                linguistics in modern data analysis paradigms.</p>
                <a href="https://github.com/dutta21/Sentiment-Analysis-for-Amazon-Alexa-Reviews" className="btn btn-primary">GitHub Link</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src={android} alt="Portfolio Item 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Mobile Application: Health and Nutrition Tracker (Kotlin/XML)</h5>
                <p className="card-text">Using Kotlin and XML, a full mobile application was built to help users manage their nutrition and health
                  objectives.
                  It features functionalities, including: Ideal Body Weight, Required Calories, Macro-nutrient Analysis, Food Database.
                  The aim is to empower users in making healthier lifestyle choices by providing insights and guidance on
                  nutrition and fitness.</p>
                <a href="https://ijariie.com/FormDetails.aspx?MenuScriptId=220060" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>

          
          {/* Add more portfolio items as needed */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
