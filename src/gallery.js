import React, { Component, PropTypes } from 'react';
import GalleryMenu from './gallery-menu';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrevious = this.onClickPrevious.bind(this);
    this.state = {
      hovered: false,
      imageIndex: 0,
    };
  }

  onClickNext() {
    const { images } = this.props;
    this.setState(prevState => {
      let nextIndex = prevState.imageIndex + 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return { imageIndex: nextIndex };
    });
  }

  onClickPrevious() {
    const { images } = this.props;
    this.setState(prevState => {
      let nextIndex = prevState.imageIndex - 1;
      if (nextIndex <= 0) nextIndex = images.length - 1;
      return { imageIndex: nextIndex };
    });
  }

  render() {
    const { onClickNext, onClickPrevious, props, state } = this;
    const { images } = props;
    const { imageIndex, hovered } = state;
    return (
      <div>
        <img
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}
          src={images[imageIndex]}
        />
        {hovered && <GalleryMenu {...{ onClickNext, onClickPrevious }} />}
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
