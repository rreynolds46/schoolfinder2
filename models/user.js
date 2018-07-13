var mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
	id: String,
	username: String,
	password: String,
	email: String,
	grouping: String,
	essays: {     
		questionOne: { type: String },
		questionTwo: { type: String },
		questionThree: { type: String },
		questionFour: { type: String },
		questionFive: { type: String },
		questionSix: { type: String },
		questionSeven: { type: String }
		},
	tests: { 
		APresearch: Number,
		APseminar: Number,
		APmusic: Number,
		AParthistory: Number,
		APstudioart2d: Number,
		APstudioart3d: Number,
		APstudioartdrawing: Number,
		APenglishlanguage: Number,
		APenglishlit: Number,
		APcomparativegov: Number,
		APeuro: Number,
		APgeography: Number,
		APmacro: Number,
		APmicro: Number,
		APpsych: Number,
		APusgov: Number,
		APushistory: Number,
		APworldhistory: Number,
		APcalcAB: Number,
		APcalcBC: Number,
		APcompsciA: Number,
		APcompsciP: Number,
		APstat: Number,
		APbio: Number,
		APchem: Number,
		APenvironment: Number,
		APphysicsElect: Number,
		APphysicsMech: Number,
		APphysics1: Number,
		APphysics2: Number,
		APchinese: Number,
		APfrench: Number,
		APgerman: Number,
		APitalian: Number,
		APjapanese: Number,
		APlatin: Number,
		APspanishlang: Number,
		APspanishlit: Number,
		SAT: Number,
		SATmath: Number,
		SATenglish: Number,
		ACT: Number
	},
	studentprofile: { 
		name: String,
		highSchool: String,
		hometown: String,
		gpa: Number,
		biography: String,
		extracurricular: String,
		awards: String
	 },
	surveys: { 
		campusSetting: { type: Number, default: 5 },
		schoolSize: { type: Number, default: 5 },
		reputation: { type: Number, default: 5 },
		diversity: { type: Number, default: 5 },
		classSize: { type: Number, default: 5 },
		homework: { type: Number, default: 5 },
		courseRequirements: { type: Number, default: 5 },
		studyAbroad: { type: Number, default: 5 },
		campusHousing: { type: Number, default: 5 },
		greekLife: { type: Number, default: 5 },
		sports: { type: Number, default: 5 },
		arts: { type: Number, default: 5 }
	}
}, { minimize: false });

module.exports = mongoose.model('Users',UserSchema);