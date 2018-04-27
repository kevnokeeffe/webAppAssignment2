'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const bookmark = require('./controllers/bookmark.js');
const about = require('./controllers/about.js');
const uxdesign = require('./controllers/uxdesign.js');
const accounts = require ('./controllers/accounts.js');

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);
router.post('/dashboard/uploadpicture', dashboard.uploadPicture);
router.get('/', start.index);
router.post('/dashboard/addbookmark', dashboard.addBookmark);
router.get('/dashboard', dashboard.index);
router.get('/dashboard/removeBookmark/:id', dashboard.removeBookmark);
router.get('/bookmark/:id/deleteweb/:webid', bookmark.deleteWeb);
router.post('/bookmark/:id/addweb', bookmark.addweb);
router.get('/bookmark/:id',bookmark.index);
router.get('/uxdesign', uxdesign.index);
router.get('/about', about.index);



module.exports = router;
