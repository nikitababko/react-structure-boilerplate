import Enzyme from 'enzyme';

import App from './App.component';

describe('App', () => {
  it('Render component', async () => {
    const component = Enzyme.shallow(<App />);
    expect(component.exists()).toBe(true);
  });
});
