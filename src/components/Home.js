import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Icon from './Icon';

const image1 = require('../images/WWM-46.jpg');
const image2 = require('../images/code.jpg');
const image3 = require('../images/ai-blur-codes.jpg');

const items = [
  {
    src: image1,
    altText: 'Slide 1',
    captionHeader: 'Hi! I am Zach Archer',
    caption: 'Welcome to my Website!'
  },
  {
    src: image2,
    altText: 'Slide 2',
    captionHeader: 'Check out my Github and Codepen!',
    caption: 'I have a lot of projects that you can look at in my Github account. I also have a few Pens on CodePen! Checkout the links below!'
  },
  {
    src: image3,
    altText: 'Slide 3',
    captionHeader: 'Contact Me!',
    caption: 'I have included a Bio and Contact pages here along with a link to my LinkedIn accout below.'
  }
];

export default class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.captionHeader} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <Carousel
          className='carousel'
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        <div className='container home-links'>
          <p className='home-links-text'>Check out my profiles!</p>
          <div>
            <Icon name="github" link="https://github.com/zarcher90"/>
            <Icon name="codePen" link="https://codepen.io/zarcher/"/>
            <Icon name="LinkedIn" link="https://www.linkedin.com/in/zachary-archer/"/>
          </div>
        </div>
      </div>
    )
  }
}
