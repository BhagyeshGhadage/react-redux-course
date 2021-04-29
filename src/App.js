import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './components/Nav'
import store from './store'
import {Provider} from 'react-redux'
import Home from './components/Home'
import Form from './components/Form'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
            <Nav/>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/form" exact component = {Form}/>
        </div>
      </Provider>    
    </Router>
  );
}

export default App;
