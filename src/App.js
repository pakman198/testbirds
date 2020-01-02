import React, { Component } from 'react';
import logo from './logo.svg';

//components
import TeamBox from './components/TeamBox/TeamBox';

//styles
import './App.css';
// import './App.less';
// import './App.styl';

//modules
import cssStyles from './First.module.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={cssStyles.header}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">
            Testbirds code challenge
          </h2>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <TeamBox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
