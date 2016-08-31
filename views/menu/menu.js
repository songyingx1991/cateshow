angular.module("myapp").controller("menuCtrl",function($scope,$http,$state){
    $scope.menu={};
    $http.get("data/data.json").success(function(data){
        $scope.menu.data=data.result.data;
    });
    /*$scope.menu_step=function(){
        $state.go("tabs.step");
    };*/
    /*无限下拉*/
    $scope.buttomrefresh=function(){
        $http.get("data/data.json").success(function(data){
            Array.prototype.push.apply($scope.menu.data,data.result.data)//转化为angular的方法
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");
        })
    }

});
