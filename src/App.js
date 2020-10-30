import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { applicationStore } from './redux/store';
function App() {
  return (
   <Provider store={ applicationStore() }>
      <h1>APPLICATION PAGE a</h1>
   </Provider>
  );
}

export default App;
