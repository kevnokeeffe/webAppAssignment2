'use strict';
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');

const start = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);  
    logger.info('start rendering');
    if (loggedInUser) {
    const viewData = {
      title: 'Welcome to Bookmark Friend',
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };
    response.render('start', viewData);
    }
    else response.redirect('/');
  },
};

module.exports = start;
