var melanomaApp = angular.module('melanomaApp', ['ngRoute']);

melanomaApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })

        .when('/news', {
            templateUrl: 'views/news.html',
            controller: 'newsController'
        })

        .when('/info', {
            templateUrl: 'views/info.html',
            controller: 'infoController'
        })
})


melanomaApp.controller('mainController', function($scope) {
});

melanomaApp.controller('newsController', function($scope) {
});

melanomaApp.controller('infoController', function($scope) {
});
