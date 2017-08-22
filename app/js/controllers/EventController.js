'use strict'; 

eventsApp.controller('EventController',
	function EventController($scope,eventData,$anchorScroll){

		// $scope.snippet = '<span style="color:red">hi there </span>';
		// $scope.boolValue = true; 
		// $scope.buttonDisabled = true;
		$scope.sortOrder = 'name';
		eventData.getEvent()
			.$promise
			.then(function(event){$scope.event = event;})
			.catch(function(response){ $console.log(response);});
		

	
		$scope.upVoteSession = function(session){

			session.upVoteCount++; 

		};
		$scope.downVoteSession = function(session){

			session.upVoteCount--; 
			
		};

		$scope.scrollToSession = function(){
			$anchorScroll();

		};

	});