import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Chevron } from "../../assets/chevron-left.svg";
import "./index.sass";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.carouselViewport = React.createRef();
    this.carouselViewportContent = React.createRef();

    this.state = {
      offset: 0,
      viewportWidth: 0,
      viewportContentWidth: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleChangeViewportWidth);

    const viewportWidth = this.carouselViewport.current.clientWidth;
    const viewportContentWidth =
      this.carouselViewportContent.current.clientWidth;

    this.setState({ viewportWidth, viewportContentWidth });
  }

  handleChangeViewportWidth = () => {
    this.setState({
      viewportWidth: this.carouselViewport.current.clientWidth,
    });
  };

  render() {
    const { children, steps } = this.props;
    const { viewportWidth, viewportContentWidth } = this.state;
    console.log(viewportWidth);

    const moveToRight = () =>
      this.setState((prev) => {
        return {
          offset: prev.offset + steps < 0 ? prev.offset + steps : 0,
        };
      });

    const moveToLeft = () =>
      this.setState((prev) => {
        console.log(prev);
        return {
          offset:
            Math.abs(prev.offset - steps) >
            viewportContentWidth - viewportWidth
              ? -viewportContentWidth + viewportWidth - 40
              : prev.offset - steps,
        };
      });

    const showArrows = viewportContentWidth > viewportWidth;

    return (
      <div className="Carousel">
        {showArrows && (
          <button
            className="Carousel__button--left"
            onClick={moveToRight}
          >
            <Chevron />
          </button>
        )}
        <div
          className="Carousel__viewport"
          ref={this.carouselViewport}
        >
          <div
            className="Carousel__viewport__content"
            ref={this.carouselViewportContent}
            style={{
              transform: `translateX(${this.state.offset}px)`,
            }}
          >
            {children}
          </div>
        </div>
        {showArrows && (
          <button
            className="Carousel__button--right"
            onClick={moveToLeft}
          >
            <Chevron />
          </button>
        )}
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node,
  steps: PropTypes.number,
};

export default Carousel;
