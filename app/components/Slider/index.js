import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import './slider.css';

let startCarouselInterval = null;
class Slider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      sliderImages: props.images,
      imgIndex: 0,
    };
  }
  componentDidMount() {
    this.startCarousel();
  }
  componentWillUnmount() {
    clearInterval(startCarouselInterval);
  }
  startCarousel = () => {
    startCarouselInterval = setInterval(this.nextSlide, this.props.timeInBetween);
  }
  nextSlide = () => {
    if (startCarouselInterval) {
      clearInterval(startCarouselInterval);
      setTimeout(() => {
        startCarouselInterval = setInterval(this.nextSlide, this.props.timeInBetween);
      }, 3000);
    }
    if (this.state.imgIndex < this.state.sliderImages.length - 1) {
      this.setState({ imgIndex: this.state.imgIndex + 1 });
    } else {
      this.setState({ imgIndex: 0 });
    }
  }
  prevSlide = () => {
    if (this.state.imgIndex !== 0) {
      this.setState({ imgIndex: this.state.imgIndex - 1 });
    } else {
      this.setState({ imgIndex: this.state.sliderImages.length - 1 });
    }
  }
  render() {
    const { sliderImages } = this.state;
    const carouselImages = sliderImages.map((image) => {
      if (image.id === this.state.imgIndex) {
        return (
          <div id="slider" key={image.id}>
            <img alt={image.label} src={image.imgUrl} width="100%" height="100%" />
          </div>
        );
      }
      return true;
    }
  );
    if (sliderImages.length === 0) return null;
    return (
      <Paper className="slider-wrapper">
        {carouselImages}
      </Paper>
    );
  }
}

Slider.propTypes = {
  images: PropTypes.array,
  timeInBetween: PropTypes.any,
};

export default Slider;
