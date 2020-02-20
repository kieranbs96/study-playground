import React, { Component } from 'react';
import Section from '../Section';

class SubSections extends Component {
  render() {
    const { subsections } = this.props;

    return subsections.map((section, index) => (
      <Section key={index} sectionData={section} />
    ));
  }
}

export default SubSections;