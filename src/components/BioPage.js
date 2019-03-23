import React, { Component } from 'react'
import LinkedInCard from './LinkedInCard';

export default class BioPage extends Component {
  render() {
    return (
      <div className='bio'>
        <div className='container bio-text'>
          <h1>Hi I am Zach!</h1>
          <br/>
          <p>
            I am currently an IT Analyst at Bayer. I have an B.S. in Computer Science from the Indiana University of Pennslyvania and while in school I worked for the Butler Memorial Hospital as 
            a Desktop Technician for two years. After graduation, I entered into Bayer's College New Hire Program and have worked for multiple teams within Bayer over the last five years.
            When first starting at Bayer, I worked for the Application Support team where we worked to support multiple applications and bring new functionality to users. Most recently,
            I have been on the Ebusiness Platform Solutions team where we supported multiple Content Management Systems and I took part in our cloud initiatives at Bayer. 
            The latest project that I have been working on is an IoT application that is used within Bayer's Pest Control business. When I am not hard at work, I love spending time
            with his family and enjoys the great outdoors! 
          </p>
        </div>

        <LinkedInCard />
      </div>
    )
  }
}
