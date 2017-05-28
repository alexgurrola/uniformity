
define(['angular','angular_material','angular_route','angular_sanitize','controllerService','apiService','authService','modelService','routeController', 'navigationController','userToolbarController'], function(angular) {
	return angular.module('uniformityApp', [
			'controllerService',
			'apiService',
			'authService',
			'modelService',
			'routeController',
			'navigationController',
			'userToolbarController',
			'ngRoute'//angular_route
		])
		/*.config(function($compileProvider) {
			$compileProvider.preAssignBindingsEnabled(true);
		})*/
		.run(function() {
			console.log('uniformity loaded');
		});
});