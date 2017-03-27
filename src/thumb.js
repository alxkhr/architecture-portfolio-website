import React, { Component, PropTypes } from 'react';

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
      <div>
        <a href={`#${anchor}`} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          {!hovered && <h2>{title}</h2>}
          <img src={hovered ? hoverImage : image} />
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
}
