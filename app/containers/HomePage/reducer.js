import { fromJS } from 'immutable';
import homeConstants from './constants';

const initialState = fromJS({
  sliderImages: {},
});

function homePageReducer(state = initialState, action) {
  // const oldState = state.toJS();
  switch (action.type) {
    case homeConstants.GET_SLIDER_IMAGES:
      return state.merge({
        sliderImages: action.sliderImages,
      });
    default:
      return state;
  }
}

export default homePageReducer;
