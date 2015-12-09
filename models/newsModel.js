var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var newsSchema   = new Schema({
    heading		: 	String,
    teaser      :   String,
    text 		:   String,
    author      :   String,
    createdOn   :   { type: Date, default: Date.now },
    active		: 	{ type: Boolean, default: true },
    comments: [{ comment: String, date: {type: Date, default: Date.now}, active: Boolean}]
});


module.exports = mongoose.model('News', newsSchema);