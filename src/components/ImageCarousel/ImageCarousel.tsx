import './ImageCarousel.scss';
import { useState } from 'react';
import { RiCircleFill } from 'react-icons/ri';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

type ImageCarouselPropTypes = {
  images: string[];
};

const ImageCarousel = ({ images }: ImageCarouselPropTypes) => {
  const [index, setIndex] = useState(0);

  const goToPrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="image-carousel">
      <div className="carousel-display flex-container">
        <MdKeyboardArrowLeft onClick={goToPrev} className="arrow" />

        <img src={images[index]} alt="Project preview" onClick={goToNext} />
        <MdKeyboardArrowRight onClick={goToNext} className="arrow" />
      </div>
      <div className="index-display">
        {images.map((_, i) => (
          <RiCircleFill key={i} className={i === index ? 'active' : ''} />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
