'use strict';
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');

const uxdesign = {
  index(request, response) {
    logger.info('ux rendering');
    const viewData = {
      title: 'UX Design',
    };
    response.render('uxdesign', viewData);
  },
};

module.exports = uxdesign;