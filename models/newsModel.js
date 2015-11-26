var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var newsSchema   = new Schema({
    heading		: 	String,
    text 		:   String,
    createdBy   :   String,
    createdOn   :   Date,
    active		: 	{ type: Boolean, default: false },
    comments: [{ comment: String, date: Date, active: Boolean}]
});

newsSchema.pre('save', function(next){
	this.createdOn = +new Date();
	if(!this.createdOn){
		this.createdOn = +new Date();
	}
	next();
});



module.exports = mongoose.model('News', newsSchema);