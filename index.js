import React from 'react'
import {AppRegistry} from 'react-native';
import Routers from './src/routes'
import {registerModels} from './src/models'
import dva, {connect} from 'dva/mobile'

// 1. Initialize
const app = dva();

// 2. Router
app.router(() => <Routers/>)

// 3. Register
registerModels(app)

AppRegistry.registerComponent('loans', () => app.start());
