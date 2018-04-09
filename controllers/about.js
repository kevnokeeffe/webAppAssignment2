'use strict';
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');

const about = {
  index(request, response) {
    logger.info('about rendering');
    const viewData = {
      title: 'About Your Bookmark Friend',
    };
    response.render('about', viewData);
  },
};

module.exports = about;
