import React, { Component } from 'react'

export default class LinkedInCard extends Component {
  render() {
    return (
        <div 
            class="LI-profile-badge"  
            data-version="v1" 
            data-size="large" 
            data-locale="en_US" 
            data-type="vertical" 
            data-theme="dark" 
            data-vanity="zachary-archer"
            style={{textAlign: 'center'}}>
                <a 
                    class="LI-simple-link" 
                    href='https://www.linkedin.com/in/zachary-archer?trk=profile-badge'>
                        Zachary Archer
                </a>
        </div>
    )
  }
}
