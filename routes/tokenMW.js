var jwt			= require('jsonwebtoken');
var superSecret = require('./../config/config').secret;

module.exports = 
{

check:	function(req, res, next){
				var token = req.body.token || req.params.token || req.headers['x-access-token'];
				// decode token
				if (token) {
				// verifies secret and checks exp
					jwt.verify(token, superSecret, function(err, decoded) {
						if (err) {
							return res.status(403).send({
								success: false,
								message: 'Failed to authenticate token.'
							});
						} else {
						// if everything is good, save to request for use in other routes
							req.decoded = decoded;
							next();
						}
					});
				} else {
					// if there is no token
					// return an HTTP response of 403 (access forbidden) and an error message
					return res.status(403).send({
						success: false,
						message: 'No token provided.'
					});
				}
			}
}