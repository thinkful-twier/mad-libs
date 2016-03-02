angular.module('madLibs', [])
.controller('MadLibsController', function($scope){
    $scope.completed = false;

    $scope.submitWords = function(){
        console.log($scope.wordsForm.$valid);
        if($scope.wordsForm.$valid){
            $scope.completed = true;
        }
    }

    $scope.startOver = function(){
        $scope.completed = false;
        $scope.female_name = '';
        $scope.job_title = '';
        $scope.tedious_task = '';
        $scope.dirty_task = '';
        $scope.celebrity = '';
        $scope.useless_skill = '';
        $scope.obnoxious_celebrity = '';
        $scope.huge_number = null;
    }
});