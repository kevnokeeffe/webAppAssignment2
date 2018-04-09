'use strict';
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmark-store');
const uuid = require('uuid');

const bookmark = {
   index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);  
    const bookmarkId = request.params.id;
    logger.debug('Bookmark id = ', bookmarkId);
    if (loggedInUser) {
    const viewData = {
      title: 'Bookmark',
      bookmark: bookmarkStore.getBookmark(bookmarkId),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };
    response.render('bookmark', viewData);
    }
    else response.redirect('/');
  },
  
  
  addweb(request, response) {
    const bookmarkId = request.params.id;
    const bookmark = bookmarkStore.getBookmark(bookmarkId);
    const newWeb = {
      id: uuid(),
      website: request.body.website,
      webaddress: request.body.webaddress,
    };
    bookmarkStore.addWeb(bookmarkId, newWeb);
    response.redirect('/bookmark/' + bookmarkId);
  },
  
  deleteWeb(request, response) {
    const bookmarkId = request.params.id;
    const webId = request.params.webid;
    logger.debug('Deleting Website ${webId} from Bookmark ${bookmarkId}');
    bookmarkStore.removeWeb(bookmarkId, webId);
    response.redirect('/bookmark/' + bookmarkId);
  }
};

 

module.exports = bookmark;