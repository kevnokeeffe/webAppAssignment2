'use strict';
const _ = require('lodash');
const logger = require('../utils/logger');
const JsonStore = require('./json-store');

const commentStore = {
  store: new JsonStore('./models/comment-store.json', {commentCollection: []}),
  collection: 'commentCollection',
  
  getAllComments(){
    return this.store.findAll(this.collection);
  },
  
  getComment(id){
    return this.store.findOneBy(this.collection, {id: id});
  },
  
  addComment(comment){
   this.store.add(this.collection, comment); 
  },
  
  removeComment(id){
    const comment = this.getComment(id);
    this.store.remove(this.collection, comment);
  },
  
};

module.exports = commentStore;