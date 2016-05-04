
var app = angular.module('movieMakerSite', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

     .state('home', {
         url: '/home',
         templateUrl: '../../Views/ClipLibrary.html'
     })
    .state('create', {
        url: '/create',
        templateUrl: '../../Views/CreateClip.html'
    })
    .state('edit', {
        url: '/create',
        templateUrl: '../../Views/CreateClip.html'
    })


});