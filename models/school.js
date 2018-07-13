var mongoose = require('mongoose');
const { Schema } = mongoose;


const SchoolSchema = new Schema({
	id: String,
	schoolID: String,

	schoolProfile: { 
		schoolID: String,
		name: String,
		location: String,
		enrollment: Number,
		biography: String,
		sixYear: String,
        description: String,
        financialAid: String
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

module.exports = mongoose.model('Schools',SchoolSchema);