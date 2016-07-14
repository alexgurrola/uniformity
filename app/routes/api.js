var 	api = require('../controllers/api'),
		express = require('express');


module.exports = function(app, callback) {
	//Setup CORS for only Reading externally
	var allowCrossDomain = function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		next();
	};
	
	var apiRoute = express.Router();
	apiRoute.use(allowCrossDomain);
	apiRoute.route('/:model/:id/:action').all(api.wildcard);//works for grabbing certain obj
	apiRoute.route('/:model/:id').all(api.wildcard);//works for grabbing certain obj
	apiRoute.route('/:model').all(api.wildcard);//works for grabbing certain obj
	
	app.use('/api', apiRoute);
	callback();
};
