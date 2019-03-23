import React, { Component } from 'react'

export default class ProjectsPage extends Component {
  render() {
    return (
      <div className="contact container">
        <h1>PROJECTS</h1>
        <div>
          <div className="projects container">

            <h3>
              <a id="project-title" href={`${process.env.PUBLIC_URL}/projects/PhotoGallery/gallery.html`} target="_blank" rel="noopener noreferrer">Photo Gallery Page</a>
            </h3>
            <p className="project-description">
              A sample Photo Gallery Page created to gain experience with html and css. Please note links are not active. This is only to practice design.
              <br />
              <strong>Build With:</strong> HTML and CSS
              <br />
              <strong>Github:</strong> <a id="project-title" href="https://github.com/zarcher90/PhotoGalleryPage" target="_blank" rel="noopener noreferrer">project</a>
            </p>
            
            <h3>
              <a id="project-title" href={`${process.env.PUBLIC_URL}/projects/ColorGame/index.html`} target="_blank" rel="noopener noreferrer">Color Game</a>
            </h3>
            <p className="project-description">
              A color game for Devs to test their knowledge on RGB color codes
              <br />
              <strong>Build With:</strong> HTML, CSS, and Javascript
              <br />
              <strong>Github:</strong> <a id="project-title" href="https://github.com/zarcher90/ColorGame.git" target="_blank" rel="noopener noreferrer">project</a>
            </p>

            <h3>
              <a id="project-title" href={`${process.env.PUBLIC_URL}/projects/PatatapClone/circles.html`} target="_blank" rel="noopener noreferrer">Patatap Clone App</a>
            </h3>
            <p className="project-description">
              A Patatap clone project to gain some experience with paper.js framework
              <br />
              <strong>Build With:</strong> HTML, CSS, Javascript and Paper.js
              <br />
              <strong>Github:</strong> <a id="project-title" href="https://github.com/zarcher90/PatatapClone.git" target="_blank" rel="noopener noreferrer">project</a>
            </p>
            
            <h3>
              <a id="project-title" href="https://yelp-camp-dot-zach-archer-profile.appspot.com" target="_blank" rel="noopener noreferrer">YelpCamp</a>
            </h3>
            <p className="project-description">
              A full stack application that is a twist on Yelp.com. This Yelp site is for campgrounds. This is a fully functional site. Create an account to start campground Yelping!!
              <br />
              <strong>Build With:</strong> HTML, CSS, Javascript, Node.js, Express.js, MongoDB
              <br />
              <strong>Github:</strong> <a id="project-title" href="https://github.com/zarcher90/YelpCamp" target="_blank" rel="noopener noreferrer">project</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}