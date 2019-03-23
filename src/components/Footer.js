import React, { Component } from 'react'

import Icon from './Icon';

export default class Footer extends Component {
  render() {
    return (
        <div className='container home-links'>
            <p className='home-links-text'>Check out my profiles!</p>
            <div >
                <Icon name="github" link="https://github.com/zarcher90"/>
                <Icon name="codePen" link="https://codepen.io/zarcher/"/>
                <Icon name="LinkedIn" link="https://www.linkedin.com/in/zachary-archer/"/>
            </div>
        </div>
        )
    }
}