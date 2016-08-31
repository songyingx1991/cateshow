angular.module("myapp").controller("stepCtrl",function($scope,$http,$stateParams){
    $scope.menu1={};
    $http.get("data/data.json").success(function(data){
        $scope.menu1.data=data.result.data;
        $scope.newstep={};
        for(var i=0;i<$scope.menu1.data.length;i++){
            if($scope.menu1.data[i].id==$stateParams.menuid){
                $scope.newstep.data=$scope.menu1.data[i];
            }
        }
    });


});

