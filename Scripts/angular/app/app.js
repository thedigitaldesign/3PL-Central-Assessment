(function () {
	//-- Services
	angular.module('app.helpers', []);
	angular.module('app.services', []);

	//-- Controllers
	angular.module('app.assessment', ['app.helpers']);

	//-- Directives
	angular.module('app.ngMovieSearch', ['app.helpers']);

	//-- Plugins

	//-- App
	angular.module('app', [
		//-- Angular components
		'ngResource',

		//-- Services
		'app.helpers',
		'app.services',

		//-- Controllers
		'app.assessment',

		//-- Directives
		'app.ngMovieSearch'

		//-- Plugins
	]);
})();