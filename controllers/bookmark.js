'use strict';

const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmark-store');
const uuid = require('uuid');

const bookmark = {
  index(request, response) {
    const bookmarkId = request.params.id;
    //const webId = request.params.webid;
    //logger.debug('Deleting Website ${webId} from Bookmark ${bookmarkId}');
    logger.debug('Bookmark id= ',bookmarkId);
    const viewData = {
      title: 'Bookmark',
      bookmark: bookmarkStore.getBookmark(bookmarkId),
    };
    response.render('bookmark', viewData);
  },
  
  
  addweb(request, response) {
    const bookmarkId = request.params.id;
    const bookmark = bookmarkStore.getBookmark(bookmarkId);
    const newWeb = {
      id: uuid(),
      website: request.body.website,
      webaddress: request.body.webaddress,
    };
    bookmarkStore.addweb(bookmarkId, newWeb);
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