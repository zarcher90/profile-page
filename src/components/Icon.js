import React, { Component } from 'react'

export class Icon extends Component {
  render() {
    return (
      <a href={this.props.link}>
        <svg className="center icon icon-bubble icon-larger">
          <use xlinkHref={ '#' + this.props.name }></use>
        </svg>
      </a>
    )
  }
}

export default Icon
