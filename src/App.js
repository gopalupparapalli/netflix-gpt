
import './App.css';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './Components/utils/appStore';
import StoreStateViewer from './Components/StoreStatus';

function App() {
  return (
    <Provider store={appStore}>
  
   <Body/>
   </Provider>
  );
}

export default App;
