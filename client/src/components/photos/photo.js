import React, {Component} from 'react';
import Slider from 'react-slick';
import '../../App.css';


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class PhotoSlider extends Component {
render() {
  const settings = {
    className: 'photoSlider',
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "80px",
    pauseOnDotsHover: true
  };

  const images = this.props.photos.map((photo, index) => {
    return (
      <div key={index}>
        <h3><img src={photo.image} alt={photo.text}/></h3>
      </div>
    )
  })
  console.log(images);

  return (
    <div  className="photoSlider">
    <Slider {...settings} >
      {images}
    </Slider>

    <div style={{'zIndex':99, 'position': 'absolute'}} className="navLinkHome">
      <a href="/" id="home" >Home</a>
    </div>

    </div>
  );
}
}

export default PhotoSlider;
