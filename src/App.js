import React, { Component } from 'react';

import Layout from './containers/Layout/Layout'
import BuildBurger from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BuildBurger/>
        </Layout>
      </div>
    );
  }
}

export default App;
