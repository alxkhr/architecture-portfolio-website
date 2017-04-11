import React, { Component, PropTypes } from 'react';
import styles from '../style/thumb.css';

export default class Thumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  onMouseEnter() {
    this.setState({ hovered: true });
  }
  onMouseLeave() {
    this.setState({ hovered: false });
  }
  render() {
    const { title, image, hoverImage, anchor } = this.props;
    const { hovered } = this.state;
    return (
      <div className={styles.thumb}>
        <a href={`#${anchor}`} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          {!hovered && <h2 className={styles.title}>{title}</h2>}
          <img
            className={hovered ? styles.hovered : styles.image}
            src={hovered ? hoverImage : image}
          />
        </a>
      </div>
    );
  }
}

Thumb.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  hoverImage: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
};
