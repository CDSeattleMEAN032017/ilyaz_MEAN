app.controller('todoListController', ['$scope', '$location', 'todoListFactory', function ( $scope, $location, todoListFactory ) {
	$scope.lists = [];

	$scope.create = function() {
			$scope.lists.push($scope.newTodoList);
			todoListFactory.create($scope.newTodoList, function(data) {
				console.log(data);
				$scope.newTodoList = {};
			})
	}

	var index = function () {
		todoListFactory.index(function(dataFromFactory) {
			$scope.lists = dataFromFactory;
		});

	}
	index();

	$scope.checked = function(id) {
		todoListFactory.checked(id, function(dataFromFactory) {
			console.log(dataFromFactory, "data from factory")
			index();
		})
	}

}]);
