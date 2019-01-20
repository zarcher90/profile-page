import React, { Component } from 'react'
import LinkedInCard from './LinkedInCard';

export default class BioPage extends Component {
  render() {
    return (
      <div className='bio'>
        <div className='container bio-text'>
          <p>
            Zach Archer is an IT Analyst at Bayer. He got a B.S. in Computer Science from the Indiana University of Pennslyvania and while in school Zach worked for the Butler Memorial Hospital as 
            a Desktop Technician for two years. After graduation, Zach entered into Bayer's College New Hire Program and has worked for multiple teams within Bayer over the last five years.
            When first starting at Bayer, Zach worked for the Application Support team where we worked to support multiple applications and bring new functionality to users. Most recently,
            Zach has been on the Ebusiness Platform Solutions team where we supported multiple Content Management Systems and was a part of the move to cloud initiatives at Bayer. 
            The latest project that Zach has been working on is an IoT application that is used within Bayer's Pest Control business. When Zach is not hard at work, he loves spending time
            with his family and enjoys the great outdoors! 
          </p>
        </div>

        <LinkedInCard />
      </div>
    )
  }
}
