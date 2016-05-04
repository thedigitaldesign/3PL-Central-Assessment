(function () {
	var app = angular.module('app.services', ['ngResource']);

	app.factory('GetMovieByTitle', ['$resource', function ($resource) {
		return $resource('http://www.omdbapi.com/?t=:MovieTitle', { MovieTitle: '@MovieTitle' }, {
			get: {
				method: 'GET'
			}
		});
	}]);
})();