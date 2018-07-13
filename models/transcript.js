var mongoose = require('mongoose');
const { Schema } = mongoose;

const TranscriptSchema = new Schema({
    _id: { type: String },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    transcriptImage: { type: String, required: true }
})

module.exports = mongoose.model('Transcript',TranscriptSchema);