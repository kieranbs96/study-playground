import React, { Component } from 'react';
import { Block } from './style';

class Section extends Component {
  render() {
    const {
      sectionData: { title, type, description, image },
    } = this.props;

    return (
      <Block type={type} className={type}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <img src={image} />
      </Block>
    );
  }
}

export default Section;
