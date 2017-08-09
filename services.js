WeatherApp.service('cityService', function(){
	this.city = "New York, NY";

})

WeatherApp.service('weatherAPIService', [ '$resource', function($resource){

	this.getWeather= function(city, days){
		let weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=4b525736d107a56a0ae179d44fa97f81', {callback:'JSON_CALLBACK'}, {get:{method: 'JSONP'}});

		return weatherAPI.get({q: city, cnt: days});
	}
}])
