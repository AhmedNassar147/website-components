// import React from 'react';
// import PropTypes from 'prop-types';

// class CarouselImage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { imageStatus: null };
//   }
//   handleImageLoaded = () => {
//     this.setState({ imageStatus: 'loaded' });
//   }
//   handleImageErrored = () => {
//     this.setState({ imageStatus: 'failed' });
//   }

//   render() {
//     return (
//       <div style={wraper}>
//         <img
//           ref="image"
//           alt="sliderImg"
//           style={imgStyle}
//           onLoad={this.handleImageLoaded}
//           onError={this.handleImageErrored}
//         />
//         <div style={labelWraper}>
//           <h1 style={{ margin: 0 }}>
//             {this.props.label}
//           </h1>
//         </div>
//       </div>
//     );
//   }
// }
// const wraper = {
//   width: '100%',
//   height: '100%',
//   display: 'flex',
//   flex: 1,
// };
// const imgStyle = {
//   zIndex: -1,
//   opacity: 1,
//   backgroundImage: `url(${this.props.src})`,
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center center',
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   margin: 'auto',
//   minWidth: '100%',
//   minHeight: '100%',
// };
// const labelWraper = {
//   zIndex: 999,
//   padding: 5,
//   position: 'absolute',
//   height: 30,
//   left: 0,
//   bottom: 0,
//   width: '100%',
//   textAlign: 'center',
//   margin: 'auto',
//   background: 'black',
// };

// CarouselImage.propTypes = {
//   src: PropTypes.string,
//   label: PropTypes.string,
// };

// export default CarouselImage;
