/**
 *
 */
angular.module("myapp").controller("login2Ctrl",function($scope,$location,$rootscope){
    $scope.link=function(registerForm){
        if(registerForm.$invalid){
            $location.path("login");
            //return tabs.home;
        }else{
            $location.path("home");
            //return tabs.home;
        }
    };
    $scope.mytVar = false;
    $scope.myfVar = true;

    $scope.run=function(){
        $scope.mytVar = true;
        $scope.myfVar = false;
        console.log('1')
    };

    $scope.tog={};
    $scope.tog.que1=false;
    $scope.que1=false;

    $scope.toggler=function(){
        $rootscope.que1=true;
    }
});