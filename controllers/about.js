'use strict';
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');
const commentStore = require('../models/comment-store');
const uuid = require('uuid');


const about = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);  
    logger.info('about rendering');
    if (loggedInUser) {
    const viewData = {
      title: 'About Bookmark Friend',
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      comments: commentStore.getAllComments(),
    };
    response.render('about', viewData);
   }
    else response.redirect('/');
  },
  
  
  addComment(request, response) {
    const newComment = {
      id: uuid(),
      name: request.body.name,
      comment: request.body.comment
    };
    logger.debug('Creating a new Comment', newComment);
    commentStore.addComment(newComment);
    response.redirect('/about');
  },
  
  
};

module.exports = about;
