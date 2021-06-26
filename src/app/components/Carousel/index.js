import React from "react";
import PropTypes from "prop-types";
import { ChevronLeftIcon } from "../Icons";
import "./index.sass";

const INNER_VIEWPORT_PADDING = 40;

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

  // LIFE CYCLE
  componentDidMount() {
    // We need to keep track of the width of the carousel viewport
    // to know exactly when to stop sliding in the carousel no matter the size of the browser
    window.addEventListener("resize", this.handleChangeViewportWidth);

    const viewportWidth = this.carouselViewport.current.clientWidth;
    const viewportContentWidth =
      this.carouselViewportContent.current.clientWidth;

    this.setState({ viewportWidth, viewportContentWidth });
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      this.handleChangeViewportWidth
    );
  }
  // END OF LIFE CYCLE

  // HANDLERS
  handleChangeViewportWidth = () => {
    this.setState({
      viewportWidth: this.carouselViewport.current.clientWidth,
    });
  };

  slideToRight = () => {
    const { steps } = this.props;

    this.setState((prev) => {
      // Carousel starts at position 0 and translates (slides) to negative pixels
      // If the sum is a positive number it means we already surpassed the start
      // so let's stop at zero
      return {
        offset: prev.offset + steps > 0 ? 0 : prev.offset + steps,
      };
    });
  };

  slideToLeft = () => {
    const { steps } = this.props;
    const { viewportWidth, viewportContentWidth } = this.state;

    // This represents the last visible part of the carousel content
    const endOfCarousel =
      viewportContentWidth - viewportWidth + INNER_VIEWPORT_PADDING;

    // Sliding to left means sliding to negative pixels
    // that's why we're dealing with negative numbers
    return this.setState((prev) => {
      return {
        offset:
          prev.offset - steps < -endOfCarousel
            ? -endOfCarousel
            : prev.offset - steps,
      };
    });
  };

  // This could also have its own file, let's keep it here
  // while it's simple
  renderArrowBtn = (pos) => (
    <button
      className={`arrow-btn--${pos}`}
      onClick={pos === "left" ? this.slideToRight : this.slideToLeft}
    >
      <ChevronLeftIcon />
    </button>
  );

  render() {
    const { children } = this.props;
    const { viewportWidth, viewportContentWidth } = this.state;

    const showArrows = viewportContentWidth > viewportWidth;

    return (
      <div className="Carousel">
        {showArrows && this.renderArrowBtn("left")}
        <div className="viewport" ref={this.carouselViewport}>
          <div
            className="viewport-content"
            ref={this.carouselViewportContent}
            style={{
              transform: `translateX(${this.state.offset}px)`,
            }}
          >
            {children}
          </div>
        </div>
        {showArrows && this.renderArrowBtn("right")}
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node,
  steps: PropTypes.number, // how many px the carousel will move in each step
};

export default Carousel;
