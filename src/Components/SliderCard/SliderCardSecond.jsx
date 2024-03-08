import "/src/index.scss";
import "macro-css";

const SliderCardSecond = ({ title, secondPlayButton, imageUrl }) => {
  return (
    <>
      <div className="card-block-second">
        <h3>{title}</h3>
        <div className="slider-block">
          <img src={secondPlayButton} alt="" />
        </div>
        <div className="slider__bottom-block d-flex align-center">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </>
  );
};

export default SliderCardSecond;
