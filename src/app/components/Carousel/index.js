import React from "react";
import PropTypes from "prop-types";
import ChevronIcon from "../Icons/Chevron";
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
    const viewportWidth = this.carouselViewport.current.clientWidth;
    const viewportContentWidth =
      this.carouselViewportContent.current.clientWidth;

    this.setState({ viewportWidth, viewportContentWidth });
  }

  render() {
    const { children, steps } = this.props;
    const { viewportWidth, viewportContentWidth } = this.state;

    const moveToRight = () =>
      this.setState((prev) => {
        debugger;

        return {
          offset: prev.offset - steps,
        };
      });

    const moveToLeft = () =>
      this.setState((prev) => ({
        offset: prev.offset + steps,
      }));

    const showArrows = viewportContentWidth > viewportWidth;

    return (
      <div className="Carousel">
        {showArrows && (
          <button
            className="Carousel__button--left"
            onClick={moveToLeft}
          >
            <ChevronIcon />
          </button>
        )}
        <div
          className="Carousel__viewport"
          ref={this.carouselViewport}
        >
          {/* <div className="Carousel__viewport__border--left" /> */}
          <div
            className="Carousel__viewport__content"
            ref={this.carouselViewportContent}
            style={{
              transform: `translateX(${this.state.offset}px)`,
            }}
          >
            {children}
          </div>
          {/* <div className="Carousel__viewport__border--right" /> */}
        </div>
        {showArrows && (
          <button
            className="Carousel__button--right"
            onClick={moveToRight}
          >
            <ChevronIcon />
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
