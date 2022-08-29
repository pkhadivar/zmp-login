import React from "react";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";

 const PauseOnHover = () =>  {
 
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        
        <Slider {...settings}>

        <CarouselCard  image="/assets/images/image1.png"/>
        <CarouselCard  image="/assets/images/image2.png"/>
        <CarouselCard image="/assets/images/image3.png"/>
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div> */}
        </Slider>
      </div>
    );
  }

  export default PauseOnHover






// const Carousel = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//   };
//   return (
//     <div>
//       <Slider {...settings}>
//         <CarouselCard />
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;
