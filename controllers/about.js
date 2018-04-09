'use strict';
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');

const about = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);  
    logger.info('about rendering');
    if (loggedInUser) {
    const viewData = {
      title: 'About Bookmark Friend',
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };
    response.render('about', viewData);
   }
    else response.redirect('/');
  },
};

module.exports = about;
