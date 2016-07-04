angular.module('weather')

    .constant('OpenWeatherConfig', {
        searchUrl: 'http://api.openweathermap.org/data/2.5/weather?q=',
        units: '&units=metric',
        appid: '&appid=2facd25400244c8f4702647578a6a355',
        imgUrl: 'http://openweathermap.org/img/w/'
    })