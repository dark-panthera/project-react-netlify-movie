import React from 'react';
import { shallow } from 'enzyme';
import Backdrop from '../../components/Backdrop/Backdrop';

test('should render Backdrop correctly', () => {
  const wrapper = shallow(<Backdrop onHideBackdrop={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

/*
test("should call onHideBackdrop on button click", () => {
    const onHideBackdrop = jest.fn();
    const wrapper = shallow(<Backdrop onHideBackdrop={onHideBackdrop} />);
    wrapper.find('button').simulate('click');
    expect(onHideBackdrop).toHaveBeenCalled();
  });
  */