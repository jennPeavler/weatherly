import Controls from '../lib/components/Controls'
import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../lib/components/App'

let controls;
let wrapperShallow;
let wrapperMount;
let searchField;
let submitButton;
let mockFn;

describe('Controls', () => {

  beforeEach(() => {
    controls = new Controls;
    wrapperShallow = shallow(<Controls />)
    wrapperMount = mount(<Controls />)
    searchField = wrapperShallow.find('input[type="text"]')
    submitButton = wrapperShallow.find('input[type="submit"]')
    mockFn = jest.fn()
  })

  it('Controls.submitItem should be called when the submit button is clicked', () => {
    wrapperShallow = shallow(<Controls handleClick={mockFn} />)
    var button  = wrapperShallow.find('input[type="submit"]');

    expect(mockFn).toHaveBeenCalledTimes(0)
    button.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should change the input state when a location is submitted', () => {
    wrapperShallow = shallow(<Controls handleClick = {mockFn} />)
    var button  = wrapperShallow.find('input[type="submit"]');
    var search = wrapperShallow.find('#search-input');
    search.simulate('change', {target: {value: 'Chicago, IL'}})
    // button.simulate('click')
    expect(wrapperShallow.state().input).toEqual('Chicago, IL')
    // expect.wrapperShallow.state('input').toEqual('Chicago, IL')
  })

  it.only('should clear the input state on click of submit', () => {
    wrapperShallow = shallow(<Controls handleClick = {mockFn} />)
    var button  = wrapperShallow.find('input[type="submit"]');
    var search = wrapperShallow.find('#search-input');
    search.simulate('change', {target: {value: 'Chicago, IL'}})
    expect(wrapperShallow.state().input).toEqual('Chicago, IL')
    button.simulate('click')
    expect(wrapperShallow.state().input).toEqual('')
  })
})
