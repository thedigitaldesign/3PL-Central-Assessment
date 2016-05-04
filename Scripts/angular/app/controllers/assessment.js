(function () {
	var app = angular.module('app.assessment');

	app.controller('Assessment', ['$scope', 'GetMovieByTitle', 'OMDbHelper', function ($scope, GetMovieByTitle, OMDbHelper) {
		$scope.model = {};
		$scope.model.OMDb = OMDbHelper;
		OMDbHelper.data.show = false;
	}]);
})();