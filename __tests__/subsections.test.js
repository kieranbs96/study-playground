import React from 'react';
import SubSections from '../components/SubSections';
import { shallow } from 'enzyme';

const subsectionsData = [
  {
    title: 'Section One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dapibus purus, quis mollis dui eleifend id. Cras nec libero id elit congue pharetra. Phasellus laoreet metus eu leo porttitor commodo. Integer vestibulum mi sit amet nisl vulputate, sed porttitor lectus rutrum. Cras elit mi, lobortis ac elementum quis, pretium gravida magna. Vestibulum pulvinar arcu nec massa ultrices blandit. Phasellus laoreet vulputate diam, at imperdiet risus consequat id. Etiam ligula tortor, auctor sed suscipit at, auctor sit amet libero. Pellentesque ac pretium eros.',
    image: 'https://i.picsum.photos/id/776/960/320.jpg',
    type: 'gallery-section'
  },
  {
    title: 'Section Two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dapibus purus, quis mollis dui eleifend id. Cras nec libero id elit congue pharetra. Phasellus laoreet metus eu leo porttitor commodo. Integer vestibulum mi sit amet nisl vulputate, sed porttitor lectus rutrum. Cras elit mi, lobortis ac elementum quis, pretium gravida magna. Vestibulum pulvinar arcu nec massa ultrices blandit. Phasellus laoreet vulputate diam, at imperdiet risus consequat id. Etiam ligula tortor, auctor sed suscipit at, auctor sit amet libero. Pellentesque ac pretium eros.',
    image: 'https://i.picsum.photos/id/218/468/468.jpg',
    type: 'text-section'
  }
];

describe('<SubSections/>', () => {
  it('renders and displays properly', () => {
    const wrapper = shallow(<SubSections subsections={subsectionsData} />);
    console.log(wrapper.debug());
  });
});
