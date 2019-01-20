import React, { Component } from 'react'
import LinkedInCard from './LinkedInCard';

export default class BioPage extends Component {
  render() {
    return (
      <div className='bio'>
        <div className='container bio-text'>
          <p>
            Zach Archer is an IT Analyst at Bayer. He got a B.S from Indiana University of Pennslyvania and while in school Zach worked for the Butler Memorial Hospital as 
            a Desktop Technician for two years. After graduation Zach entered into Bayers College New Hire program and has worked for multiple teams within Bayer for the last 5 years.
            When first starting at Bayer Zach worked for the Application Support team where we worked to support multiple applications and bring new functionality. Most recently
            Zach as been on the Ebusiness Plateform Solutions team were we supported multiple Content Management Systems and was a part of the move to Cloud enitiatives at Bayer. 
            The latest project that Zach has been working on is an IoT application that is used within Bayer's Pest Controle business. When Zach is not hard at work he loves spending time
            with his family and enjoying the great outdoors! 
          </p>
        </div>

        <LinkedInCard />
      </div>
    )
  }
}
