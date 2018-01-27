import homeConstants from './constants';
export default{
  getSliderImages: (sliderImages) => ({
    type: homeConstants.GET_SLIDER_IMAGES,
    sliderImages,
  }),
};

