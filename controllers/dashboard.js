'use strict';
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmark-store');
const uuid = require('uuid');


const pictureStore = require('../models/picture-store.js');


const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
    const viewData = {
      title: 'Bookmark Dashboard',
      bookmark: bookmarkStore.getUserBookmarks(loggedInUser.id),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      title: 'PictureStore Dashboard',
      user: loggedInUser,
      album: pictureStore.getAlbum(loggedInUser.id),
    };
    logger.info('about to render', bookmarkStore.getAllBookmarks());
    response.render('dashboard', viewData);
    }
    else response.redirect('/');
  },
  
  uploadPicture(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    pictureStore.addPicture(loggedInUser.id, request.body.title, request.files.picture, function () {
      response.redirect('/dashboard');
    });
  },
  
  removeBookmark(request, response) {
    const bookmarkId = request.params.id;
    logger.debug(`Deleting Bookmark ${bookmarkId}`);
    bookmarkStore.removeBookmark(bookmarkId);
    response.redirect('/dashboard');
  },
  
  addBookmark(request, response) {
     const loggedInUser = accounts.getCurrentUser(request);
    const newBookmark = {
      id: uuid(),
      userid: loggedInUser.id,
      title: request.body.title,
      websites: [],
    };
    logger.debug('Creating a new Bookmark', newBookmark);
    bookmarkStore.addBookmark(newBookmark);
    response.redirect('/dashboard');
  },
  
   
};



module.exports = dashboard;
