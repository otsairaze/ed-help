import "/src/index.scss";
import "macro-css";

const SliderCardFirst = ({ title, subtitle, viewText, ImageUrl }) => {
  return (
    <>
      <div className="card-block">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <div className="slider__bottom-block d-flex align-center">
          <p>{viewText}</p>
          <img src={ImageUrl} alt="" />
        </div>
      </div>
    </>
  );
};

export default SliderCardFirst;
