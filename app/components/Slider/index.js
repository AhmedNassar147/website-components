import React from 'react';
import PropTypes from 'prop-types';
import './slider.css';

class Slider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      sliderImages: props.images,
      imgIndex: 0,
    };
  }
  componentWillMount() {
    this.startSlider();
  }
  startSlider = () => {
    setInterval(this.nextSlide, this.props.timeInBetween);
  }
  nextSlide = () => {
    if (this.state.imgIndex < this.state.sliderImages.length - 1) {
      this.setState({ imgIndex: this.state.imgIndex + 1 });
    } else {
      this.setState({ imgIndex: 0 });
    }
  }
  render() {
    const { sliderImages, imgIndex } = this.state;
    const carouselImages = sliderImages.map((image) => {
      if (image.id === imgIndex) {
        return (
          <div id="slider" key={image.id}>
            <img alt={image.label} src={image.imgUrl} width="100%" height="100%" />
          </div>
        );
      }
      return true;
    }
  );
    return (
      <section>
        <div style={{ height: '100%' }}>{carouselImages}</div>
      </section>
    );
  }
}

Slider.propTypes = {
  images: PropTypes.array,
  timeInBetween: PropTypes.any,
};

export default Slider;
