var express 		= require('express');
var kummerRouter 	= express.Router();
var nodemailer 		= require('nodemailer');
var config 			= require('../config/config');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: config.gmUser,
        pass: config.gmPass
    }
});

kummerRouter.get('/', function(req, res){
	res.render('pages/kummer');
});

kummerRouter.post('/send', function(req, res){
	console.log("ha");
	var mailOptions = {
	    from: 'cozimog@gmail.com', // sender address
	    to: 'ccol@gmx.net', // list of receivers
	    subject: 'IMMER-OHNE MSG', // Subject line
	    text: req.body.name + ' schrieb: ' + req.body.message // plaintext body
	};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	    	res.redirect('/fehler');
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	    res.redirect('/danke');

	});

});


module.exports = kummerRouter;