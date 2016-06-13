'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */

var app = angular.module('app');

app.controller('MainCtrl', function ($scope) {
    //$scope.todos = [
    //  'Create Django models',
    //  'Expose them through a REST API',
    //  'Consume them with restangular'
    //];
    $scope.suscribe = function(){
  		$location.url('/suscribe.html');
	};

	$scope.login = function(){
  		$location.url('/login.html');
	};

  });
