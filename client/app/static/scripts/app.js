'use strict';

 angular
 /*.config(config)*/
 /*.run(run)*/
 .module('app', [
  'ngAnimate',
   /*'ngRoute',*/
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'restangular'
  ])

 .config(function ($locationProvider, $urlRouterProvider, $stateProvider, $httpProvider) {
  $locationProvider.html5Mode(true);
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('main', {
    url: '/',
    templateUrl: 'static/views/main.html',
    controller: 'MainCtrl',
  })

  .state('suscribe', {
    url: "/suscribe",
    templateUrl: "static/views/suscribe.html",
    controller: 'RegisterController'
  })

  .state('login', {
    url: "/login",
    templateUrl: "static/views/login.html",
    controller: 'LoginController'
  })

  .state('home', {
    url: "/home",
    templateUrl: "static/views/home.html",
    controller: 'HomeController'
  });

});

 run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
 function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
          }

          $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
              $location.path('/login');
            }
          });
        }



/*

(function () {
    'use strict';

    angular
        .module('app', ['ngRoute',
          'ngAnimate',
          'ngRoute',
          'ngAria',
          'ngCookies',
          'ngMessages',
          'ngSanitize',
          'ngTouch',
          'ui.router',
          'restangular'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider', '$urlRouterProvider', '$stateProvider', '$httpProvider'];
    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        
        $routeProvider
            .when('/', {
                controller: 'MainCtrl',
                templateUrl: 'static/views/main.html',
                controllerAs: 'vm'
            })

            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'static/views/home.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'static/views/login.html',
                controllerAs: 'vm'
            })

            .when('/suscribe', {
                controller: 'RegisterController',
                templateUrl: 'static/views/suscribe.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();

*/






