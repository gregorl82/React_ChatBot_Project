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
  return (
    <div  className="photoSlider">

    <Slider {...settings} >
      <div>
        <h3><img src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="pets"/></h3>
      </div>
      <div>
        <h3><img src="https://images.unsplash.com/photo-1512723185835-0700e5069a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="pets"/></h3>
      </div>
      <div>
        <h3><img src="https://images.unsplash.com/photo-1559214369-a6b1d7919865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="pets"/></h3>
      </div>
      <div>
        <h3><img src="https://images.unsplash.com/photo-1554530700-747e22bb4e56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="pets"/></h3>
      </div>
      <div>
        <h3><img src="https://images.unsplash.com/photo-1517352551702-336dda93455e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="pets"/></h3>
      </div>
      <div>
        <h3><img src="https://images.unsplash.com/photo-1518288774672-b94e808873ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="pets"/></h3>
      </div>
    </Slider>

    <div style={{'zIndex':99, 'position': 'absolute'}} className="navLinkHome">
      <a href="/" id="home" >Home</a>
    </div>

    </div>
  );
}
}

export default PhotoSlider;
