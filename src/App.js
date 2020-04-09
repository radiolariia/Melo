import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore';
import './App.css';
import Root from './components/Wrapper/Root'




const store = ConfigureStore();

class App extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         basketIsOpen: false,
    //     }
    // }



    render() {
      return (
          <Provider store={store}>
              <BrowserRouter>
                  <Root/>
              </BrowserRouter>
          </Provider>

     );
    }
}

export default App;
