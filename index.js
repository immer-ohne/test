var express    	= 	require('express'),
	config 		= 	require('./config/config'),
	bodyParser 	= 	require('body-parser'),
	mongoose	=	require('mongoose');

// Routes
var newsRouter 		= require('./routes/newsRouter'),
	kummerRouter	= require('./routes/kummerRouter'),
	newsRouter		= require('./routes/newsRouter');

// Init db
mongoose.connect(config.dbUrl);

var app = express();

app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Mount & register routes
app.use('/news', newsRouter);
app.use('/kummer', kummerRouter);


app.get('/', function(req, res){
	res.render('pages/index');
});

app.get('/danke', function(req, res){
	res.render('pages/danke');
});

app.get('/fehler', function(req, res){
	res.render('pages/fehler');
});

app.get('*', function(req, res){
	res.render('pages/index');
});
// Start the Server
app.listen(config.port);
console.log('Magic happens on port ' + config.port);
