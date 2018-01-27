import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { CircularProgress } from 'material-ui';
import makeSelectHomePage, { makeSelectSliderImages } from './selectors';
import reducer from './reducer';
import saga from './saga';
import homeActions from './actions';
import { sliderImages } from './data';
import Navbar from '../../components/Navbar/index';
import Slider from '../../components/Slider/index';
export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    setTimeout(() => {
      this.props.getSliderImages(sliderImages);
    }, 4000);
  }
  render() {
    const { images } = this.props;
    return (
      <div >
        <div>
          <Navbar />
          <div>
            {!(images && images.length > 0) ? (
              <div style={LoadingComp}><CircularProgress thickness={6} size={80} color={'green'} /></div>
            ) : (
              <Slider timeInBetween={3000} images={images} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const LoadingComp = {
  paddingTop: '10%',
  textAlign: 'center',
};

HomePage.propTypes = {
  getSliderImages: PropTypes.func.isRequired,
  images: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
  images: makeSelectSliderImages(),
});

function mapDispatchToProps(dispatch) {
  return {
    getSliderImages: () => dispatch(homeActions.getSliderImages(sliderImages)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
