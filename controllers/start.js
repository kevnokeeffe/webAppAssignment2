'use strict';
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');

const start = {
  index(request, response) {
    logger.info('start rendering');
    const viewData = {
      title: 'Welcome to Your Bookmark Buddy',
    };
    response.render('start', viewData);
  },
};

module.exports = start;
