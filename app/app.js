var appModule = angular.module('appModule', ['ngAnimate', 'localytics.directives']);

appModule.controller('appController', ['$scope', function($scope){
$scope.list = [
  {
    brand: "Brand-1",
    product: "Product-1",
    quantity: 2,
    delivery: "10/12/15"
  },
  {
    brand: "Brand-2",
    product: "Product-2",
    quantity: 1,
    delivery: "19/12/15"
  }
];

$scope.brandAndProduct = {
    brand: ["Brand-1", "Brand-2", "Brand-3", "Brand-4", "Brand-5"],
    product: ["product-1", "product-2","product-3", "product-4", "product-5"]
  };

console.log($scope.brandAndProduct.brand);

$scope.deleteItem = function(item){
  var index = $scope.list.indexOf(item);
  $scope.list.splice(index, 1);
}

$scope.addItem = function(newItem){
  console.log(newItem);
  $scope.list.push(newItem);
  $scope.newItem = {};
  console.log($scope.newItem);
}

$scope.editItem = function(item){
  $scope.newItem = item;
}

}]);

appModule.controller('jobController', ['$scope', function($scope){
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

  $scope.name= "gopal";
}]);
