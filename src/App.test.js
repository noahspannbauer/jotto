import { configure } from 'enzyme';
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

configure({ adapter: new ReactSeventeenAdapter() })

test('renders learn react link', () => {
  
});
