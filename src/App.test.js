// import { getByAltText, getByRole, queryByAltText, render,  } from '@testing-library/react'
// import { screen } from '@testing-library/dom'
import App from './App';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter() })

describe('Testing app.jsx => ', () => {

  const wrapper = shallow(<App />);

  test("h1 text displayed", () => {
    expect(wrapper.find('h1').contains("Use the keyboard arrows to move"));
  });

  test("button displayed", () => {
    expect(wrapper.find('button')).toBeTruthy();
  });

  test("cells displayed", () => {
    expect(wrapper.find("cell")).toBeTruthy();
  });

  test("Img not displayed", () => {
    expect(wrapper.contains(<img src='./droid.png' alt="droid"/>)).toBe(false)
  })

  test('Testing button click', () => {
    const mockBtnClick = jest.fn();

    const button = shallow((<button onClick={mockBtnClick}>Ok!</button>));
    button.find('button').simulate('click');
    expect(mockBtnClick.mock.calls.length).toEqual(1);
  });
  
});