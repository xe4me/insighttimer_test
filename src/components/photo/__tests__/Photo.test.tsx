import React from 'react';
import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';
import Photo from '../Photo';

describe('Photo', () => {
  describe('children', () => {
    let PhotoComponent: ShallowWrapper;
    beforeEach(() => {
      PhotoComponent = shallow(<Photo id={'TestID'} caption={'Test'} src={'/nothing.jpg'} alt={'No image here'}/>);
    });
    it('should render a root <figure/> with .Photo className', () => {
      expect(PhotoComponent.find('figure.Photo').length).toEqual(1);
    });
    it('should render a <img/> with .Photo__Image className', () => {
      expect(PhotoComponent.find('img.Photo__Image').length).toEqual(1);
    });

    it('should render a <figcaption/> with .Photo__Caption className', () => {
      expect(PhotoComponent.find('figcaption.Photo__Caption').length).toEqual(1);
    });
    it('should render a <fieldset/>', () => {
      expect(PhotoComponent.find('fieldset.Photo__Action').length).toEqual(1);
    });
    it('should render a <input type="checkbox"/> with .Photo__Checkbox className', () => {
      expect(PhotoComponent.find('input[type="checkbox"].Photo__Action-Checkbox').length).toEqual(1);
    });
    it('should render a <label/> for the checkbox ', () => {
      expect(PhotoComponent.find('label').length).toEqual(1);
    });
  });
  describe('<img/> element', () => {
    let PhotoComponent: ReactWrapper;
    beforeEach(() => {
      PhotoComponent = mount(<Photo id={'testid'} caption={'Test'} src={'/test.jpg'} alt={'No image here'}/>);
    });
    afterEach(() => {
      PhotoComponent.unmount();
    });
    it('should render the src prop correctly as passed', () => {
      expect(PhotoComponent.find('img').prop('src')).toEqual('/test.jpg');
    });
    it('should render the alt prop correctly as passed', () => {
      expect(PhotoComponent.find('img').prop('alt')).toEqual('No image here');
    });
  });
  describe('<figcaption/> element', () => {
    let PhotoComponent: ReactWrapper;
    beforeEach(() => {
      PhotoComponent = mount(<Photo id={'testid'} caption={'Test caption'} src={'/test.jpg'} alt={'No image here'}/>);
    });
    afterEach(() => {
      PhotoComponent.unmount();
    });
    it('should render the innerText correctly as passed', () => {
      expect(PhotoComponent.find('figcaption').text()).toEqual('Test caption');
    });
  });
  describe('<checkbox/> element', () => {
    let PhotoComponent: ReactWrapper;
    let checkbox: ReactWrapper;
    beforeEach(() => {
      PhotoComponent = mount(<Photo id={'testid'} caption={'Test caption'} src={'/test.jpg'} alt={'No image here'}/>);
      checkbox = PhotoComponent.find('input[type="checkbox"]');
    });
    afterEach(() => {
      PhotoComponent.unmount();
    });
    it('should render the id and name correctly as passed', () => {
      expect(checkbox.prop('id')).toEqual('testid');
      expect(checkbox.prop('name')).toEqual('testid');
    });
  });

});
