import React, { Component, PropTypes } from 'react';
import GalleryMenu from './gallery-menu';
import styles from '../style/gallery.css';

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
      if (nextIndex < 0) nextIndex = images.length - 1;
      return { imageIndex: nextIndex };
    });
  }

  render() {
    const { onClickNext, onClickPrevious, props, state } = this;
    const { images } = props;
    const { imageIndex, hovered } = state;
    const { source, photographer } = images[imageIndex];
    return (
      <div
        className={styles.gallery}
        onMouseEnter={images.length > 1 ? () => this.setState({ hovered: true }) : undefined}
        onMouseLeave={images.length > 1 ? () => this.setState({ hovered: false }) : undefined}
      >
        <img className={styles.image} src={source} />
        {hovered && <GalleryMenu {...{ onClickNext, onClickPrevious }} />}
        {photographer && <p>{photographer}</p> /* TODO flexbox with middle index of image */}
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    source: PropTypes.string.isRequired,
    photographer: PropTypes.string,
  })).isRequired,
};
