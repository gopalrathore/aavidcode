var appModule = angular.module('appModule', ['ngAnimate', 'localytics.directives']);

// controller for table data
appModule.controller('appController', ['$scope', function($scope){

  // Dummy data
$scope.list = [
  {
    brand: "Brand-1",
    product: "Product-1",
    quantity: 2,
    delivery: "10/12/2015"
  },
  {
    brand: "Brand-2",
    product: "Product-2",
    quantity: 1,
    delivery: "19/12/2015"
  }
];

$scope.brandAndProduct = {
    brand: ["Brand-1", "Brand-2", "Brand-3", "Brand-4", "Brand-5"],
    product: ["product-1", "product-2","product-3", "product-4", "product-5"]
};

// true when editing a record
var editing = false;

// Deleting a record
$scope.deleteItem = function(item){
  var index = $scope.list.indexOf(item);
  $scope.list.splice(index, 1);
}

// adding a record
$scope.addItem = function(newItem){
  if(!editing){
    $scope.list.push(newItem);
    $scope.newItem = {};
  }else {
    $scope.newItem = {};
    editing = false;
  }
}

// editing a record
$scope.editItem = function(item){
  $scope.newItem = item;
  editing = true;
}

}]);

// controller for jobs table
appModule.controller('jobController', ['$scope', function($scope){

  // dummy jobs data
  $scope.jobs = [
    {
      id: 1,
      position: "Manager",
      experience: "10 years",
      location: "Mumbai",
      expire: "22/12/2017",
      url: "#FIXME"
    }
  ];
  
}]);
