var express    	= 	require('express'),
	config 		= 	require('./config/config'),
	bodyParser 	= 	require('body-parser'),
	mongoose	=	require('mongoose'),
	path 	   	= 	require('path');

// Routes
var userRouter 		= require('./routes/userRouter'),
	newsRouter 		= require('./routes/newsRouter'),
	authRouter 		= require('./routes/authRouter'),
	kummerRouter	= require('./routes/kummerRouter'),
	problemRouter	= require('./routes/problemRouter');

// Init db
mongoose.connect(config.dbUrl);

var app = express();

//app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Mount & register routes
// app.use('/user', userRouter);
app.use('/api/news', newsRouter);
app.use('/api/problem', problemRouter);
app.use('/api/kummer', kummerRouter);
// app.use('/auth', authRouter);


// app.get('/', function(req, res){
// 	res.render('pages/index');
// });

// app.get('/danke', function(req, res){
// 	res.render('pages/danke');
// });

// app.get('/fehler', function(req, res){
// 	res.render('pages/fehler');
// });

app.get('*', function(req, res){
	//res.render('pages/index');
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});
// Start the Server
app.listen(config.port);
console.log('Magic happens on port ' + config.port);
