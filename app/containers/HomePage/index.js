import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Navbar from '../../components/Navbar/index';
import Slider from '../../components/Slider/index';
const images = [
  {
    id: 1,
    imgUrl: 'https://images.pexels.com/photos/515167/pexels-photo-515167.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    label: 'pic1',
  },
  {
    id: 2,
    imgUrl: 'https://images.pexels.com/photos/630835/pexels-photo-630835.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    label: 'pic2',
  },
  {
    id: 3,
    imgUrl: 'https://images.pexels.com/photos/515169/pexels-photo-515169.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    label: 'pic3',
  },
  {
    id: 4,
    imgUrl: 'https://images.pexels.com/photos/604897/pexels-photo-604897.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    label: 'pic4',
  },
  {
    id: 5,
    imgUrl: 'https://images.pexels.com/photos/423368/pexels-photo-423368.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    label: 'pic5',
  },
];
export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div >
        <div>
          <Navbar />
          <Slider timeInBetween={3000} images={images} />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
