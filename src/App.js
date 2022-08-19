import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routing from './Routing/routing';
import StudentRegisteration from './pages/student-registration/student-registration';
import { Provider } from 'react-redux';
import store from './redux/store';
import ViewStudent from './pages/view-students/view-students';
import Header from './pages/header/header';

function App() {
  return (
    <Provider store={store}>
    <div className='container'>
      <Header />
      <Routing />
    </div>
    </Provider>
  );
}

export default App;
