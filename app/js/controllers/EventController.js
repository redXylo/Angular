'use strict'; 

eventsApp.controller('EventController',
	function EventController($scope){

		$scope.event = {

			name: 'Angular Bootcamp',
			date: '7/17/2017',
			time: '11:00 pm',
			location:{
				address: 'Regeena Fabians Home',
				city: 'Hamilton',
				province: 'ON'

			},
			imageUrl: '/img/angularjs-logo.png',
			sessions:[
			{
				name: 'Directives Masterclass',
				creatorName: 'Bob Smith', 
				duration: '1 hr',
				level: 'Advanced',
				abstract: 'In this session you will learn the ins and out of directives',
				upVoteCount : 0

			},
			{
				name: 'Scopes for fun and profit',
				creatorName: 'John Doe',
				duration: '30 mins',
				level: 'Introductory',
				abstract: 'This session will take closer look at span',
				upVoteCount : 0

			},
			{
				name: 'Well Behaved Controllers',
				creatorName: 'Jane Smith',
				duration: '2 hours',
				level: 'Intermediate',
				abstract: 'In depth review of Controllers.',
				upVoteCount : 0

			}
			]
		}

		$scope.upVoteSession = function(session){

			session.upVoteCount++; 

		};
		$scope.downVoteSession = function(session){

			session.upVoteCount--; 
			
		};

	}
	);