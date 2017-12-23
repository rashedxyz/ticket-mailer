import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { fetchUser } from '../actions';
import '../style/App.css';
import Routes from '../routes/Routes';

class App extends Component {
  componentDidMount() {
    console.log('==== App mounted!');
    this.props.dispatch(fetchUser());
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({ shopifyProducts: state.shopifyFetch }); // TODO: Need this?

export default connect(mapStateToProps)(App);
