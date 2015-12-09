var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var problemSchema   = new Schema({
    text 		:   String,
    createdOn   :   { type: Date, default: Date.now },
    active		: 	{ type: Boolean, default: true },
    comment		: 	String 
});


module.exports = mongoose.model('Problem', problemSchema);