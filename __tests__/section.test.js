import React from 'react';
import Section from '../components/Section';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const sectionData = {
    title: 'Section One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dapibus purus, quis mollis dui eleifend id. Cras nec libero id elit congue pharetra. Phasellus laoreet metus eu leo porttitor commodo. Integer vestibulum mi sit amet nisl vulputate, sed porttitor lectus rutrum. Cras elit mi, lobortis ac elementum quis, pretium gravida magna. Vestibulum pulvinar arcu nec massa ultrices blandit. Phasellus laoreet vulputate diam, at imperdiet risus consequat id. Etiam ligula tortor, auctor sed suscipit at, auctor sit amet libero. Pellentesque ac pretium eros.',
    image: 'https://i.picsum.photos/id/776/960/320.jpg',
    type: 'gallery-section'
};

describe('<Section/>', () => {
  it('renders the title and description properly', () => {
    const wrapper = shallow(<Section sectionData={sectionData} />);
    const Title = wrapper.find('h3');
    const Description = wrapper.find('p');

    expect(Title.text()).toBe(sectionData.title);
    expect(Description.text()).toBe(sectionData.description);
  });

  it('renders the image properly', () => {
    const wrapper = shallow(<Section sectionData={sectionData} />);
    const Image = wrapper.find('img');
    expect(Image.props().src).toBe(sectionData.image);
  })

  it('matches the snapshot', () => {
    const wrapper = shallow(<Section sectionData={sectionData} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    // const price = '£50.35';
    // expect(price).toMatchSnapshot();
  })
});
