/**
 * Created by hxsd on 2016/8/25.
 */
myapp.controller("homeCtrl",function($scope,$http){
    $http.get("json/home.json").success(function(data){
       $scope.hotsorts=data.hot;
        $scope.likesorts=data.like;
    })
});