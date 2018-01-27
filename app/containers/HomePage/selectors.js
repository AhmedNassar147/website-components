import { createSelector } from 'reselect';

const selectHomePageDomain = (state) => state.get('homePage');
export const makeSelectSliderImages = () => createSelector(
  selectHomePageDomain, (substate) => substate.get('sliderImages').toJS());

const makeSelectHomePage = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectHomePage;
export {
  selectHomePageDomain,
};
