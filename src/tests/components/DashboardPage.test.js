import React from 'react';
import {shallow} from 'enzyme';
import DashboradPage from '../../components/DashboardPage';


test('should render DashboardPage correctly',()=>{
  const wrapper = shallow(<DashboradPage/>);
  expect(wrapper).toMatchSnapshot();
});