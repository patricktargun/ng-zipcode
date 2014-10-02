var app = angular.module('myApp');


app.directive('zipcodeAuto', function($http, $q){
	return {
		restrict: 'A',
		scope: {
			zip: '=',
			city: '=',
			state: '='
		},
		link: function(scope, element, attrs){
			element.bind('keyup', function(){
				if(scope.zip.length === 5){
					 return $http({
						url: "http://zip.elevenbasetwo.com?zip=" + scope.zip,
			                	cache: false,
	                			dataType: "json",
	                			type: "GET"
					}).then(function(result){			
						scope.city = result.data.city;
						scope.state = result.data.state;	
					});
				}
				else if (scope.zip.length < 5 || scope.zip.length > 5 ) {
					scope.city = '';
					scope.state = '';
				}
			});
		}
	}
});
