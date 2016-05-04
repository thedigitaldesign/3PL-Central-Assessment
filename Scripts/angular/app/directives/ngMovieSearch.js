(function () {
	var app = angular.module('app.ngMovieSearch');

	app.directive('movieSearch', ['GetMovieByTitle', 'OMDbHelper', function (GetMovieByTitle, OMDbHelper) {
		return {
			restrict: 'EA',
			scope: {},
			controller: 'Assessment',
			templateUrl: '/Scripts/angular/app/views/movie-search.html',
			link: function (scope, element, attrs) {
				scope.MovieSearch = function () {
					var get = GetMovieByTitle.get({
						MovieTitle: scope.MovieTitle
					});

					get.$promise.then(function (data) {
						OMDbHelper.data = data;
						OMDbHelper.data.show = true;
					});
				};
			}
		};
	}]);
})();
