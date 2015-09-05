'use strict';

angular
  .module('<%= slugify(appname) %>')
  .config(routes);

<% if (angularRoute === 'uiRouter') { %>function routes($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'partials/about.html',
      controller: 'AboutController'
    });
}<% } %><% if (angularRoute === 'ngRoute') { %>function routes($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise('/404');

  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'AboutController'
    });
}<% } %>
