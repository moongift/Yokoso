'use strict';
var Account, App, Dashboard, Menu, React, Router, routes;

React = require('react');

Router = require('react-router');

App = require('./views/app.js');

Account = require('./views/account.js');

Menu = require('./views/menu.js');

Dashboard = require('./views/dashboard.js');

routes = module.exports = React.createElement(Router.Route, {
  "path": '/',
  "handler": App
}, React.createElement(Router.DefaultRoute, {
  "name": 'dashboard',
  "handler": Dashboard
}), React.createElement(Router.Route, {
  "path": '/sign_up',
  "name": "account",
  "handler": Account
}));
