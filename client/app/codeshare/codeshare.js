angular.module('codellama.codeshare', [])
  .service('CodeshareService', function() {
    this.code = '';
  })
  .controller('CodeshareController', function($scope) {
    $scope.code = 'console.log(yaya)';
  });