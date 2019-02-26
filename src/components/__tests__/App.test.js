import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './App';

// it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);

  describe('App', () => {
    it('should render correctly and match snapshot', () => {
        const component = shallow(<App />);
        expect(toJson(component)).toMatchSnapshot();
    });
  });
// });

