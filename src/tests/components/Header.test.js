import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Dashboard/Header/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header onHideSidebar={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test("should call onHideSidebar on button click", () => {
  const onToggleFilter = jest.fn();
  const wrapper = shallow(<Header onToggleFilter={onToggleFilter} />);
  wrapper.find('button').simulate('click');
  expect(onToggleFilter).toHaveBeenCalled();
});
