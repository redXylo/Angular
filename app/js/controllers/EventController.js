'use strict'; 

eventsApp.controller('EventController',
	function EventController($scope){

		$scope.event = {

			name: 'Angular Bootcamp',
			date: '7/17/2017',
			time: '11:00 pm'
		}

	}
	);