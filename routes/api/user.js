var express = require('express');
var router = express.Router();
var multer = require('multer');
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		if(req.body.transcript) {
			cb(null, './uploads/transcripts');
		} else {
			console.log("not a transcript");
		}
	},
	filename(req, file, cb) {
		const userID = req.user._id + ".pdf";

		cb(null, userID);
	},
  });                  
  
const upload = multer({ storage });



// Users Model
const Users = require('../../models/user');
const Transcript = require('../../models/transcript');
const Schools = require('../../models/school');

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = function(passport){

	/* HANDLE STUDENT PROFILE */

		/* STUDENT PROFILE INDEX */
		/* GET Student Profile Index */
		router.get('/api/users/:userID', function(req, res) {
			Users.findOne({ _id: req.params.userID }, (err, user) => {
				if(err) throw err;
				res.send(user);
			})
		})

		/* STUDENT PROFILE */
		/* POST Student Profile */
		router.put('/api/studentprofile/:userID', function(req, res, next) {
			console.log(req.body);
			Users.findOneAndUpdate({_id: req.params.userID}, req.body, {upsert: true, new: true}).then(function(){
				res.json({ successful: true })
			})
		})
		
		/* GET Student Surveys */
		router.get('/api/surveys/', function(req, res) {
			Users.findOne({ _id: req.params.userID }, (err, user) => {
				if(err) throw err;
				res.send(user);
			})
		})


		/* STUDENT SURVEYS */
		/* POST Student Surveys */
		router.put('/api/surveys/:userID', function(req, res) {
			Users.findOneAndUpdate({_id: req.params.userID}, req.body, {upsert: true, new: true}).then(function(){
				res.json({ successful: true })
			})
		})
		
		/* GET Student Surveys */
		router.get('/api/surveys/:userID', function(req, res) {
			Users.findOne({ _id: req.params.userID }, (err, user) => {
				if(err) throw err;
				res.send(user);
			})
		})

		/* STUDENT Tests */
		/* GET Student Tests */
		router.get('/api/tests/:userID', function(req, res) {
			Users.findOne({ _id: req.params.userID }, (err, user) => {
				if(err) throw err;
				res.send(user);
			})
		})		


		/* POST Student Tests */
		router.put('/api/tests/:userID', function(req, res) {
			Users.findOneAndUpdate({_id: req.params.userID}, req.body, {upsert: true, new: true}).then(function(){
				res.json({ successful: true })
			})
		})

		/* STUDENT Essays */
		/* GET Student Essays */
		router.get('/api/essays/:userID', function(req, res) {
			Users.findOne({ _id: req.params.userID }, (err, user) => {
				if(err) throw err;
				res.send(user);
			})
		})		


		/* POST Student Essays */
		router.put('/api/essays/:userID', function(req, res) {
			Users.findOneAndUpdate({_id: req.params.userID}, req.body, {upsert: true, new: true}).then(function(){
				res.json({ successful: true })
			})
		})

		
	
		/* STUDENT TRANSCRIPT */
		/* POST Student Transcript */
		router.post('/api/transcript', upload.single('imageItem'), async (req, res) => {
			const transcript = new Transcript({
				_id: req.user._id,
				_user: req.user._id,
				transcriptImage: req.file.path
			})
			transcript
				.save();
				res.redirect('back');
		  });

		/* STUDENT SEARCH */
		router.get('/api/students/search', function(req, res) {
			Users.find({}, function(err, users) {
				res.send(users);
			})
		})	


		/* SCHOOL SEARCH */
		router.get('/api/schools/search', function(req, res) {
			Schools.find({}, function(err, users) {
				res.send(users);
			})
		})	


	/* HANDLE AUTHENTICATION */

		/* Handle Logout GET */
		router.get('/api/signout', function(req, res) {
			req.logout();
			res.redirect('/');
			res.json({ successful: true });
		});

		/* Handle Login POST */
		router.post('/api/login', passport.authenticate('login'), function(req, res) {
			res.json({successful: true});
		});

		/* Handle Registration POST */
		router.post('/api/users', passport.authenticate('signup', function(req, res) {
			console.log(res);
		}));

		/* GET Current User */
		router.get('/api/current_user', (req, res) => {
			res.send(req.user);
		});

		/* HANDLE SCHOOL */
		router.get('/api/schools/:schoolID', function(req, res) {
			Schools.findOne({ schoolID: req.params.schoolID }, (err, user) => {
				if(err) throw err;
				res.send(user);
			})
		})

		/* School PROFILE */
		/* POST School Profile */
		router.put('/api/schools/:schoolID', function(req, res, next) {
			console.log(req.body);
			Schools.findOneAndUpdate({schoolID: req.params.schoolID}, req.body, {upsert: true, new: true}).then(function(){
				res.json({ successful: true })
			})
		})

	return router;
}