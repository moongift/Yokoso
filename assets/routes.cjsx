'use strict'

React = require 'react'
Router = require 'react-router'

App = require './views/app.js'
Account = require './views/account.js'
Menu = require './views/menu.js'
Dashboard = require './views/dashboard.js'

routes = module.exports =
  <Router.Route path='/' handler={App}>
    <Router.DefaultRoute name='dashboard' handler={Dashboard} />
    <Router.Route path='/sign_up' name="account" handler={Account} />
  </Router.Route>
