WeatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){

	$scope.city = cityService.city;

	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	})

	$scope.submit= function(){
		$location.path("/forecast");
	}

}])

WeatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherAPIService', function($scope, $routeParams, cityService, weatherAPIService){
	$scope.city = cityService.city;

	$scope.days = $routeParams.days || '3';


	$scope.weatherResult = weatherAPIService.getWeather($scope.city, $scope.days);

	$scope.convertToFahrenheit = function(degk) {
		return Math.round((1.8 * (degk-273)) + 32);
	}

	$scope.convertToDate = function(dt){
		return  new Date(dt) * 1000;
	}

}])
