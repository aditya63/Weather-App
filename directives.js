WeatherApp.directive('weatherWidget', function(){
	return {
		templateUrl:'directives/weatherWidget.htm',
		replace: true,
		scope:{
			weatherDay: '=',
			convertToStandard: '&',
			convertToDate: '&',
			dateFormat: '@'
		}
	};
})