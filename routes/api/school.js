var express = require('express');
var router = express.Router();


// Users Model
const Schools = require('../../models/school');


module.exports = function(passport){

	/* HANDLE STUDENT PROFILE */

		/* STUDENT PROFILE INDEX */
		/* GET Student Profile Index */
		
		


		/* STUDENT SURVEYS */
		/* POST Student Surveys */
		router.put('/api/surveys/:userID', function(req, res) {
			Users.findOneAndUpdate({_id: req.params.userID}, req.body, {upsert: true, new: true}).then(function(){
				res.json({ successful: true })
			})
		})
		
		/* GET Student Surveys */
		router.get('/api/surveys/:userID', function(req, res) {
			Users.findOne({ _user: req.params.userID }, (err, user) => {
				if(err) throw err;
				res.send(user);
			})
		})

		/* STUDENT Tests */
		/* GET Student Tests */
		router.get('/api/tests/:userID', function(req, res) {
			Users.findOne({ _user: req.params.userID }, (err, user) => {
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
			Users.findOne({ _user: req.params.userID }, (err, user) => {
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

		
	

		/* STUDENT SEARCH */
		router.get('/api/students/search', function(req, res) {
			Users.find({}, function(err, users) {
				res.send(users);
			})
		})	





	

	return router;
}